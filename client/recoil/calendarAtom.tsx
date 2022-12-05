import { atom } from "recoil";
import { useRecoilValue } from "recoil";
import { getMonth, getYear } from "date-fns";

const date = new Date();
let month = getMonth(date) + 1;
let year = getYear(date);

const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});

const selectYearState = atom({
  key: "selectYearState",
  default: `${year}`,
});

const selectMonthState = atom({
  key: "selectMonthState",
  default: `${month}`,
});

const selectDayState = atom({
  key: "selectDayState",
  default: "6",
});

const pickDayState = atom({
  key: "pickDayState",
  default: "2022-12-02",
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
  default: false,
});

const categorySelectTitle = atom<string>({
  key: "categorySelectTitle",
  default: "전체",
});

const getBoardState = atom<boolean>({
  key: "getBoardState",
  default: false,
});

const getShareNoticeState = atom<boolean>({
  // 공유알림 모달 내 알림 변경사항을 위해 만든 상태 -> 수락 또는 거절이 상태 변경 일어남
  key: "getShareNoticeState",
  default: false,
});

const getShareModalState = atom<boolean>({
  //공유알림 모달의 상태
  key: "isShareOpen",
  default: false,
});

const getShippingModalState = atom<boolean>({
  // 배송알림 모달의 상태
  key: "isShippingOpen",
  default: false,
});

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
  editModeState,
  categorySelectTitle,
  getBoardState,
  getShareNoticeState,
  getShareModalState,
  getShippingModalState,
};
