import { createContext } from "react";

const toolboxContext = createContext({
  toolboxState: {},
  changeStroke: () => {},
  changeFill: () => {},
  changeSize: () => {},
  changeBoxColor: () => {},
});

export default toolboxContext;
