import { atom } from "recoil";
import { useRecoilValue } from "recoil";

const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});

const selectYearState = atom({
  key: "selectYearState",
  default: "1234",
});

const selectMonthState = atom({
  key: "selectMonthState",
  default: "5",
});

const selectDayState = atom({
  key: "selectDayState",
  default: "6",
});

const pickDayState = atom({
  key: "pickDayState",
  default: "",
});

const readModalOpenState = atom({
  key: "readModalOpenState",
  default: false,
});

const boardItemState = atom<any>({
  key: "boardItemState",
  default: "123",
});

const categorySelectState = atom({
  key: "categorySelectState",
  default: false,
});

const boardSharedState = atom<boolean | null>({
  key: "boardSharedState",
  default: false,
});

const editModeState = atom<boolean>({
  key: "editModeState",
  default : false
})

export {
  modalOpenState,
  selectYearState,
  selectMonthState,
  selectDayState,
  pickDayState,
  readModalOpenState,
  boardItemState,
  categorySelectState,
  boardSharedState,
  editModeState
};
