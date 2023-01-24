import { useState } from "react";
import EmailCheckNumberLayout from "../EmailCheckNumberLayout";
import AuthBtn from "../AuthBtn";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useCheckAuthNum from "../../hooks/user/useCheckAuthNum";
import { useRecoilValue } from "recoil";
import { checkCodeState } from "../../recoil/refacAtom";

interface Props {
  email: string;
}

const SignUpCode = ({ email }: Props) => {
  const [authNumValue, setAuthNumbValue] = useState<string>("");
  const checkCode = useRecoilValue(checkCodeState);

  const { mutate, isError } = useCheckAuthNum();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const handleAuthNumChange = (e: any) => {
    setAuthNumbValue(e.target.value);
  };

  const onSubmit = () => {
    mutate({ authNumValue, email });
  };

  const failSubmit = () => {
    console.log("fail");
  };

  return (
    <EmailCheckNumberLayout>
      <form
        className="w-full flex flex-col justify-center items-center pt-8"
        onSubmit={handleSubmit(onSubmit, failSubmit)}
      >
        <div className="text-xs text-mainOrange font-SCDream4 md:text-sm">
          입력하신 Email로 인증번호가 발송되었습니다
        </div>
        <ErrorMessage
          errors={errors}
          name="code"
          render={({ message }) => {
            return (
              <div className="flex flex-row items-end justify-center w-full mb-3 text-xs text-nagativeMessage h-fit font-SCDream2">
                {message}
              </div>
            );
          }}
        />
        {checkCode && isError ? (
          <div className=" text-nagativeMessage font-SCDream3 text-[11px] md:text-[12px] mt-2">
            인증번호가 올바르지 않습니다
          </div>
        ) : (
          <div className=" text-nagativeMessage font-SCDream3 text-[11px] md:text-[12px] mt-2">
            5분이내에 입력해주세요
          </div>
        )}

        <input
          className="flex pl-5 pr-5 pt-1 pb-1 mt-1 mb-3 font-SCDream3 text-gray-500 w-60 h-fit text-xs md:text-sm outline-none text-center rounded-md border-b-[1px] border-mainOrange/40"
          placeholder="인증번호를 입력하세요"
          value={authNumValue}
          {...register("code", {
            required: "인증코드는 반드시 입력해야 합니다",
            onChange: handleAuthNumChange,
          })}
        />

        <AuthBtn onClick={() => {}}>인증</AuthBtn>
      </form>
    </EmailCheckNumberLayout>
  );
};

export default SignUpCode;
