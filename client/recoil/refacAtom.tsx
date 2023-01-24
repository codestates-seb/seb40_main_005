import { atom } from "recoil";

const checkIdState = atom<boolean>({
  key: "checkIdState",
  default: false,
});

const checkEmailState = atom<boolean>({
  key: "checkEmailState",
  default: false,
});

const checkCodeState = atom<boolean>({
  key: "checkCodeState",
  default: false,
});

const codeInputState = atom<boolean>({
  key: "codeInputState",
  default: false,
});

const pwInputState = atom<boolean>({
  key: "pwInputState",
  default: false,
});

export {
  checkIdState,
  checkEmailState,
  checkCodeState,
  codeInputState,
  pwInputState,
};
