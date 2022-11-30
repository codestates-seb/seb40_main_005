import { useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import postLogin from "../apis/auth/postLogin";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
// import { client } from "../client/client";

interface FormValues {
  id: string;
  password: string;
  setFailedMsg: Dispatch<SetStateAction<string>>;
}

const LoginForm = () => {
  const [idValue, setIdValue] = useState<string>("");
  const [failedMsg, setFailedMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();
  const loginMutation = useMutation(postLogin);
  const setIsLogin = useSetRecoilState(isLoginState);

  const useLogin = ({ id, password }: FormValues) => {
    return loginMutation
      .mutateAsync({ id, password })
      .then(res => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("memberId", res.memberId);
          setIsLogin(true);
          setFailedMsg("");
          router.push("/calendar");
        }
      })
      .catch(() => {
        setFailedMsg("ID 혹은 비밀번호가 일치하지 않습니다.");
      });
  };

  const handleIdChange = (e: any) => {
    setIdValue(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-between h-1/2">
        <div className="relative">
          <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
            로그인
          </div>
          <div className="absolute w-12 h-2 top-[0.8rem] md:w-[3.7rem] md:top-4 lg:w-[4.4rem] lg:top-5 bg-mainOrange/40"></div>
        </div>

        <form
          className="relative flex flex-col mt-5 text-base text-gray-500 font-SCDream5"
          onSubmit={handleSubmit(useLogin)}
        >
          {/* 아이디 입력 */}
          <label htmlFor="id">ID</label>
          {/* 언더바 */}
          <div className="absolute w-4 h-2 top-[0.8rem] md:top-3 lg:w-4 lg:top-[0.8rem] bg-mainOrange/40"></div>
          <input
            className="mt-4 text-sm outline-none font-SCDream3 border-b-[1px] border-mainOrange/40"
            id="id"
            placeholder="ID를 입력 후 ENTER를 눌러주세요"
            type="text"
            {...register("id", {
              required: "ID를 입력해주세요!",
              onChange: handleIdChange,
              minLength: 5,
              pattern: {
                value: /^[a-zA-Z0-9]{5,20}$/,
                message: "ID는 영문,숫자 5자 이상 입력되어야합니다.",
              },
            })}
          />

          <ErrorMessage
            errors={errors}
            name="id"
            render={({ message }) => (
              <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                {message}
              </div>
            )}
          />
          {idValue.length !== 0 && idValue.length < 5 ? (
            <div className="flex flex-row items-end justify-end w-full mt-1 text-[0.6rem] md:text-xs text-mainOrange h-fit font-SCDream2">
              5글자 이상으로 입력해주세요
            </div>
          ) : null}

          {/* 비밀번호 입력 */}
          <div className="relative flex flex-col mt-4">
            <label htmlFor="password">비밀번호</label>
            <span className="text-[6px] font-SCDream3">
              특수문자 포함 영문자,숫자 8글자 이상 입력해주세요
            </span>
            {/* 언더바 */}
            <div className="absolute w-16 h-2 top-[0.8rem] md:w-16 md:top-[0.8rem] bg-mainOrange/40"></div>
          </div>
          <input
            className="mt-4 text-sm outline-none font-SCDream3 border-b-[1px] border-mainOrange/40"
            id="password"
            placeholder="비밀번호를 입력하세요"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요!",
              pattern: {
                value:
                  /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,25}$/,
                message: "비밀번호 형식에 맞게 입력해주세요",
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

          <div className="mt-2 text-gray-500 flex justify-between text-[6px] font-SCDream2">
            <Link href={"/signup"}>아직 회원이 아니신가요?</Link>

            <div className="flex text-[6px]">
              <div className="mr-[0.3rem] md:mr-6">
                <Link href={"/findid"} className="mr-4">
                  아이디찾기
                </Link>
              </div>
              <Link href={"/resetpw"}>비밀번호재설정</Link>
            </div>
          </div>
          <input
            type="submit"
            className="self-end w-20 mt-3 md:w-28 h-8 rounded-2xl bg-btnOrange text-white font-SCDream5 text-sm hover:bg-[#fcb79a]"
          ></input>
        </form>

        {/* 로그인 실패 메세지 */}
        {failedMsg.length !== 0 ? (
          <div className="self-center my-8 text-xs md:text-sm lg:my-5 font-SCDream4 md:mt-12 text-nagativeMessage">
            {failedMsg}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LoginForm;
