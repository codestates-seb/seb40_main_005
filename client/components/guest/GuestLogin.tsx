import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import useGetBoards from "../../hooks/calendar/useGetBoards";
import usePostLogin from "../../hooks/user/usePostLogin";
import { selectMonthState, selectYearState } from "../../recoil/calendarAtom";

const GuestLogin = () => {
  const [curMonth] = useRecoilState(selectMonthState);
  const [curYear] = useRecoilState(selectYearState);

  const router = useRouter();

  const { refetch } = useGetBoards({
    curYear,
    curMonth,
  });

  const { mutate, isSuccess } = usePostLogin();

  useEffect(() => {
    if (isSuccess) {
      refetch();
      router.push("/calendar");
    }
  }, [isSuccess]);

  const handleGuestLogin = () => {
    mutate({ id: "testuser1234", password: "test1234!" });
  };

  return (
    <div className="relative items-center justify-center mr-8 cursor-pointer w-fit h-7">
      <button
        type="button"
        className="z-10 ml-1 text-lg text-gray-700 font-SCDream3"
        onClick={handleGuestLogin}
      >
        <span className="font-bold">Guest</span> 로그인
      </button>
      <div className="absolute top-5 left-0.5 right-0 bottom-0.5  bg-mainOrange/40"></div>
    </div>
  );
};

export default GuestLogin;
