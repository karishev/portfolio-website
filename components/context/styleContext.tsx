import { createContext, Dispatch, SetStateAction } from "react";

interface IStyleContext {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const StyleContext = createContext<IStyleContext>({
  menuOpen: false,
  setMenuOpen: () => {},
});

export default StyleContext;
