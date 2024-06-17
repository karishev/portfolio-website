export function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function isCircleComplete(
  drawingPoints: { x: number; y: number }[],
  centerPoint: { x: number; y: number },
  angleThreshold = 10,
  distanceThreshold = 10
) {
  if (drawingPoints.length < 3) {
    return false; // Not enough points to assess a circle.
  }

  // Check the spread of points to avoid single-point clustering
  let minDistance = Infinity;
  let maxDistance = 0;
  drawingPoints.forEach((point) => {
    const distance = Math.sqrt(
      (point.x - centerPoint.x) ** 2 + (point.y - centerPoint.y) ** 2
    );
    if (distance < minDistance) minDistance = distance;
    if (distance > maxDistance) maxDistance = distance;
  });

  // Require a minimal spatial distribution to avoid clusters at a single point
  if (maxDistance - minDistance < distanceThreshold) {
    return false;
  }

  // Calculate the total angular change
  let totalAngularChange = 0;
  let lastAngle = Math.atan2(
    drawingPoints[0].y - centerPoint.y,
    drawingPoints[0].x - centerPoint.x
  );

  for (let i = 1; i < drawingPoints.length; i++) {
    const currentAngle = Math.atan2(
      drawingPoints[i].y - centerPoint.y,
      drawingPoints[i].x - centerPoint.x
    );
    totalAngularChange += Math.atan2(
      Math.sin(currentAngle - lastAngle),
      Math.cos(currentAngle - lastAngle)
    );
    lastAngle = currentAngle;
  }

  // Normalize the total angular change to [0, 2π]
  totalAngularChange = Math.abs(totalAngularChange) % (2 * Math.PI);

  // Check if we have approximately made a full circle
  return totalAngularChange > 2 * Math.PI - (angleThreshold * Math.PI) / 180;
}

// Color interpolation function
export function interpolateColor(
  minValue: number,
  maxValue: number,
  value: number
) {
  let ratio = (value - minValue) / (maxValue - minValue);
  let red = (1 - ratio) * 122; // Decrease red as the value increases
  let green = (ratio - 0) * 122; // Increase green as the value increases
  let blue = 0; // Blue remains 0
  return `rgb(${Math.round(red)}, ${Math.round(green)}, ${blue})`;
}

export function drawHand(
  landmarks: { x: number; y: number }[],
  ctx: CanvasRenderingContext2D
) {
  landmarks.forEach(({ x, y }) => {
    ctx.fillStyle = "limegreen";
    ctx.beginPath();
    ctx.arc(x * ctx.canvas.width, y * ctx.canvas.height, 5, 0, 2 * Math.PI);
    ctx.fill();
  });
}

// Helper function for angle difference
export function angleDifference(theta1: number, theta2: number) {
  let diff = theta2 - theta1;
  if (diff > 180) {
    diff -= 360;
  } else if (diff < -180) {
    diff += 360;
  }
  return diff;
}
