import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import styles from "./sketch.module.css";
import {
  drawHand,
  interpolateColor,
  dist,
  isCircleComplete,
  angleDifference,
} from "./utils";

// const pencilSound = new Audio("/pencil.mp3");

const Sketch = () => {
  const videoElement = useRef<HTMLVideoElement>(null);
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const scoreElement = useRef<HTMLDivElement>(null);

  let drawingPoints: { x: number; y: number }[] = [];

  let drawingDirection = "clockwise";

  let progress = 0;

  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!canvasElement.current) {
      console.error("Canvas element not found");
      return;
    }

    const centerPoint = {
      x: canvasElement.current.width / 2,
      y: canvasElement.current.height / 2,
    };

    const canvasCtx = canvasElement.current.getContext("2d");
    if (!canvasCtx) {
      console.error("Failed to get canvas context");
      return;
    }

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => onResults(results, canvasCtx, centerPoint));

    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoElement.current) {
        videoElement.current.srcObject = stream;
        return new Promise((resolve) => {
          videoElement.current!.onloadedmetadata = () => {
            resolve(videoElement.current);
          };
        });
      }
    };

    const main = async () => {
      await setupCamera();
      videoElement.current?.play();

      const sendFrameToHandpose = () => {
        if (videoElement.current) {
          hands.send({ image: videoElement.current }).then(() => {
            requestAnimationFrame(sendFrameToHandpose);
          });
        }
      };
      sendFrameToHandpose();
    };

    main();
  }, []);

  const onResults = (
    results: any,
    canvasCtx: CanvasRenderingContext2D,
    centerPoint: { x: number; y: number }
  ) => {
    canvasCtx.save();
    canvasCtx.clearRect(
      0,
      0,
      canvasElement.current!.width,
      canvasElement.current!.height
    );
    canvasCtx.translate(canvasElement.current!.width, 0);
    canvasCtx.scale(-1, 1); // Flip the canvas horizontally
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.current!.width,
      canvasElement.current!.height
    );
    drawCenterPoint(canvasCtx, centerPoint);
    results.multiHandLandmarks.forEach((landmarks: any, index: number) => {
      drawHand(landmarks, canvasCtx);
      const hand = results.multiHandedness[index].label;
      if (hand === "Right") resetDrawing();
      else if (hand === "Left")
        trackDrawing(landmarks[8], canvasCtx, centerPoint);
    });
    evaluateCircle(centerPoint, canvasCtx);
    canvasCtx.restore();
  };

  const drawCenterPoint = (
    ctx: CanvasRenderingContext2D,
    centerPoint: { x: number; y: number }
  ) => {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(centerPoint.x, centerPoint.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  };

  const trackDrawing = (
    fingerTip: any,
    ctx: CanvasRenderingContext2D,
    centerPoint: { x: number; y: number }
  ) => {
    const x = fingerTip.x * ctx.canvas.width;
    const y = fingerTip.y * ctx.canvas.height;
    const currentPoint = { x, y };

    if (isCircleComplete(drawingPoints, centerPoint)) return;

    drawingPoints.push(currentPoint);
    // pencilSound.play();

    if (isCircleComplete(drawingPoints, centerPoint)) return;

    if (drawingPoints.length > 2) {
      updateDrawingDirection(centerPoint, drawingPoints);
      const lastPoint = drawingPoints[drawingPoints.length - 3];
      calculateAndLogAngles(lastPoint, currentPoint, centerPoint);
    }
  };

  const updateDrawingDirection = (
    centerPoint: { x: number; y: number },
    drawingPoints: { x: number; y: number }[]
  ) => {
    if (drawingPoints.length < 3 || drawingDirection) return;
    const [first, second] = drawingPoints.slice(-3);
    const angle1 = Math.atan2(first.y - centerPoint.y, first.x - centerPoint.x);
    const angle2 = Math.atan2(
      second.y - centerPoint.y,
      second.x - centerPoint.x
    );
    const angleDiff = angleDifference(angle1, angle2);
    drawingDirection = angleDiff > 0 ? "clockwise" : "counterclockwise";
  };

  const calculateAndLogAngles = (
    lastPoint: { x: number; y: number },
    currentPoint: { x: number; y: number },
    centerPoint: { x: number; y: number }
  ) => {
    const thetaA =
      (Math.atan2(lastPoint.y - centerPoint.y, lastPoint.x - centerPoint.x) *
        180) /
      Math.PI;
    const thetaB =
      (Math.atan2(
        currentPoint.y - centerPoint.y,
        currentPoint.x - centerPoint.x
      ) *
        180) /
      Math.PI;
    const diff = angleDifference(thetaA, thetaB);

    if (
      (diff > 1.5 && drawingDirection === "clockwise") ||
      (diff < -1.5 && drawingDirection === "counterclockwise")
    ) {
      resetDrawing();
    }
  };

  const evaluateCircle = (
    center: { x: number; y: number },
    ctx: CanvasRenderingContext2D
  ) => {
    if (!drawingPoints.length) return;

    let starting = drawingPoints[0];
    let radius = dist(starting, center);

    let total = 0,
      count = 0;

    drawingPoints.forEach((point) => {
      let fromCenter = dist(point, center);
      let minus = Math.abs(fromCenter - radius);

      const ideal = 100 - (minus / radius) * 100;

      total += ideal;
      count += 1;

      const x = point.x;
      const y = point.y;

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = interpolateColor(50, 100, ideal);
      ctx.fill();
    });

    if (scoreElement.current && progress != total / count) {
      progress = total / count;
      // pencilSound.play();

      scoreElement.current.innerHTML = `${progress.toFixed(1)}%`;
      scoreElement.current.style.color = interpolateColor(0, 100, progress);
    }
  };

  const resetDrawing = () => {
    drawingPoints = [];
    progress = 0;
    if (scoreElement.current) {
      scoreElement.current.innerHTML = `${progress.toFixed(1)}%`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.instructions}>
        <p>Draw a perferct circle with your finger!</p>
      </div>
      <video ref={videoElement} width="768" height="600" />
      <canvas ref={canvasElement} width="768" height="600" />
      <div ref={scoreElement} className={styles.score} />
    </div>
  );
};

export default Sketch;
