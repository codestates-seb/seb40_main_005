import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import AuthBtn from "../AuthBtn";
import { useRecoilState } from "recoil";
import { checkEmailState } from "../../recoil/refacAtom";
import useCheckEmail from "../../hooks/user/useCheckEmail";
import useRequestAuthNum from "../../hooks/user/useRequestAuthNum";

interface Props {
  email: string;
  setEmail: (email: string) => void;
}

const SignUpEmail = ({ email, setEmail }: Props) => {
  const [checkEmail, setCheckEmail] = useRecoilState(checkEmailState);

  const { refetch, isError, isSuccess } = useCheckEmail(email);
  const { mutate } = useRequestAuthNum();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    // 인증요청 버튼 클릭 시, 이메일 중복검사 요청
    refetch();
  };

  const failSubmit = () => {
    console.log("submit failed");
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    setCheckEmail(false);
  };

  // 이메일 중복확인 성공 시 이메일 인증코드 전송요청
  useEffect(() => {
    if (isSuccess) {
      mutate({ email });
    }
  }, [isSuccess]);

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit, failSubmit)}>
      <div className="flex flex-col w-full h-fit">
        <div className="relative items-center justify-center w-fit h-7 mt-3">
          <label className="text-base text-gray-500 font-SCDream5">Email</label>
          <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
        </div>
      </div>
      <div className="flex flex-row w-full h-fit items-center justify-center">
        <input
          className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
          type="text"
          autoComplete="off"
          value={email}
          placeholder="Email을 입력 후 인증요청 버튼을 클릭하세요"
          {...register("email", {
            required: "Email은 필수 입력입니다.",
            onChange: handleEmailChange,
            pattern: {
              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
              message: "올바르지않은 Email 형식입니다.",
            },
          })}
        />
        <AuthBtn onClick={() => {}}>인증요청</AuthBtn>
      </div>
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => {
          return (
            <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
              {message}
            </div>
          );
        }}
      />
      {checkEmail && isSuccess ? (
        <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
          사용가능한 Email입니다
        </div>
      ) : null}
      {checkEmail && isError ? (
        <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
          이미 사용중인 Email입니다
        </div>
      ) : null}
    </form>
  );
};
export default SignUpEmail;
