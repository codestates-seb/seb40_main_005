import { atom } from "recoil";

const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});

export default modalOpenState;