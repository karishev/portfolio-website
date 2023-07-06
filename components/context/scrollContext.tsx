import { createContext, Dispatch, SetStateAction } from "react";

interface IScrollContext {
  handleClick: (target: string) => void;
}

const ScrollContext = createContext<IScrollContext>({
  handleClick: (target: string) => {}
});

export default ScrollContext;
