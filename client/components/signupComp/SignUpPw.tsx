import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import SubmitBtn from "../SubmitBtn";
import { ErrorMessage } from "@hookform/error-message";
import { useRecoilValue } from "recoil";
import {
  checkIdState,
  checkEmailState,
  checkCodeState,
} from "../../recoil/refacAtom";
import usePostSignUpData from "../../hooks/user/usePostSignUpData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  id: string;
  email: string;
  password: string;
  setPassword: (pw: string) => void;
}

const SignUpPw = ({ id, email, password, setPassword }: Props) => {
  const [rePw, setRePw] = useState("");

  const checkId = useRecoilValue(checkIdState);
  const checkEmail = useRecoilValue(checkEmailState);
  const checkCode = useRecoilValue(checkCodeState);

  const router = useRouter();

  const { mutate, isSuccess, isError } = usePostSignUpData();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    mutate({ id, email, password });
  };

  const failSubmit = () => {
    console.log("fail");
  };

  const handleChangeRePw = (e: any) => {
    setRePw(e.target.value);
  };

  const handleChangePw = (e: any) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("회원가입에 성공하였습니다!", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        toast.success("로그인페이지로 이동합니다!", {
          autoClose: 2000,
          position: toast.POSITION.TOP_RIGHT,
        });
      }, 1000);

      setTimeout(() => {
        router.push("/login");
      }, 3000);
    }

    if (isError) {
      toast.error(`${Error}`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [isSuccess, isError]);

  return (
    <>
      <ToastContainer />
      <form className="w-full" onSubmit={handleSubmit(onSubmit, failSubmit)}>
        <div className="flex flex-col w-full h-fit">
          <div className="flex flex-col w-full md:flex-row h-fit">
            <div className="relative items-center justify-center mt-5 w-fit h-7">
              <label
                htmlFor="password"
                className="text-base text-gray-500 font-SCDream5"
              >
                비밀번호
              </label>
              <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
            </div>
            <div className="font-SCDream3 text-gray-400 w-fit h-fit text-[10px] mt-0 md:mt-7 ml-0 md:ml-2">
              특수문자, 영문자, 숫자 포함 8글자 이상으로 입력해주세요
            </div>
          </div>
          <input
            className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
            id="password"
            autoComplete="off"
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              onChange: handleChangePw,
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,23}$/,
                message: "올바르지 않은 비밀번호형식입니다.",
              },
            })}
          />

          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => (
              <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                {message}
              </div>
            )}
          />
        </div>

        <div className="flex flex-col w-full h-fit">
          <div className="relative items-center justify-center mt-3 w-fit h-7">
            <label
              htmlFor="checkpassword"
              className="text-base text-gray-500 font-SCDream5"
            >
              비밀번호 확인
            </label>
            <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
          </div>
          <input
            className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 mb-0 border-b-[1px] border-mainOrange/40 outline-none"
            id="checkpassword"
            autoComplete="off"
            type="password"
            value={rePw}
            placeholder="다시 한번 비밀번호를 입력하세요"
            {...register("checkPassword", {
              required: "비밀번호를 확인하세요",
              onChange: handleChangeRePw,
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            })}
          />

          <ErrorMessage
            errors={errors}
            name="checkPassword"
            render={({ message }) => (
              <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                {message}
              </div>
            )}
          />
        </div>
        {checkId && checkEmail && checkCode ? (
          <div className="flex flex-row items-center justify-end w-full mt-4 h-fit">
            <SubmitBtn onClick={() => {}} />
          </div>
        ) : null}
      </form>
    </>
  );
};
export default SignUpPw;
