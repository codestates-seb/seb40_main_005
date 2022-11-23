import { useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useState } from "react";
import Link from "next/link";
import { useMutation } from "react-query";
import postLogin from "../apis/auth/postLogin";
// import { client } from "../client/client";

interface FormInputs {
  singleErrorInput: string;
  id: string;
  password: string;
}

export const LoginForm = () => {
  const [idValue, setIdValue] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");
  const [failedMsg, setFailedMsg] = useState("");

  const setIsLogin = useSetRecoilState(isLoginState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const loginMutation = useMutation(postLogin);

  const onValid = () => {
    loginMutation.mutateAsync().then(res => {
      if (res.data.success) {
        localStorage.setItem("token", res.token);
        // localStorage.setItem("username", result.username);
        setIsLogin(true);
      }
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
          onSubmit={onValid}
        >
          {/* 아이디 입력 */}
          <label htmlFor="id">ID</label>
          {/* 언더바 */}
          <div className="absolute w-4 h-2 top-[0.8rem] md:top-3 lg:w-4 lg:top-[0.8rem] bg-mainOrange/40"></div>
          <input
            className="mt-4 text-sm outline-none font-SCDream3 border-b-[1px] border-mainOrange/40"
            id="loginId"
            type="text"
            {...register("id", {
              required: "ID를 입력해주세요!",
              onChange: handleIdChange,
              minLength: 5,
            })}
            placeholder="ID를 입력 후 ENTER를 눌러주세요"
          ></input>

          <ErrorMessage
            errors={errors}
            name="singleErrorInput"
            render={({ message }) => (
              <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-mainOrange h-fit font-SCDream2">
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
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요!",
              pattern:
                /^(?=.[A-Za-z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,25}$/,
            })}
            placeholder="비밀번호를 입력하세요"
          ></input>
          <div className="mt-2 text-gray-500 flex justify-between text-[6px] font-SCDream2">
            <Link href={"/signup"}>아직 회원이 아니신가요?</Link>

            <div className="flex text-[6px]">
              <div className="mr-[0.3rem] md:mr-6">
                <Link href={"/signup"} className="mr-4">
                  아이디찾기
                </Link>
              </div>
              <Link href={"/signup"}>비밀번호재설정</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

// client
//       .post("/api/login", JSON.stringify(payload))
//       .then((res) => {
//         if (res.headers.get("Authorization")) {
//           localStorage.setItem("accessToken", res.headers.get("Authorization"));
//           localStorage.setItem("userName", res.data.displayName);
//         }
//         setIsLogin(true);
//         naviagte("/");
//         setFailedMsg("");
//       })
//       .catch((err) => {
//         setFailedMsg(err.response.data.message);
//         setErrorMsg("");
//       });
//   };

//   return (
//         <form
//           className="flex flex-col space-y-5"
//           onSubmit={handleSubmit(onValid, onInValid)}
//         >
//           <Input
//             label={"Email"}
//             register={register("email", {
//               required: "이메일을 입력해주세요!",
//             })}
//             errorMsg={errorMsg}
//             failedMsg={failedMsg}
//           />

//           <Input
//             label={"Password"}
//             register={register("password", {
//               required: "비밀번호를 입력해주세요!",
//               minLength: {
//                 value: 8,
//                 message: "비밀번호는 8글자 이상입니다.",
//               },
//             })}
//             errorMsg={errorMsg}
//             failedMsg={failedMsg}
//           />
