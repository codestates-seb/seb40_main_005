import CertifyPageLayout from "../components/CertifyPageLayout";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ErrorMessage } from "@hookform/error-message";
import { useState, useCallback } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import getIdByEmail from "../apis/user/getIdByEmail";

function FindId() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  interface FormInputs {
    emailErrorInput: string;
  }

  const [emailValue, setEmailValue] = useState<string>("");
  const useGetIdByEmail = (email: string) => {
    return useQuery(["get/userGetIdByEmail"], () => getIdByEmail(email), {
      enabled: false,
    });
  };

  const { data, refetch, isLoading, isFetching } = useGetIdByEmail(emailValue);

  const handleEmailChange = (e: any) => {
    setEmailValue(e.target.value);
  };

  const handlePressEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      refetch();
    }
  };

  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return (
    <>
      <CertifyPageLayout>
        <>
          <div className="relative items-center justify-center w-fit h-7 ">
            <h2 className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              아이디 찾기
            </h2>
            <div className="absolute top-5 md:top-6 lg:top-7 left-0 right-0 bottom-1 md:bottom-0 lg:-bottom-1 bg-mainOrange/40"></div>
          </div>
          <form className="w-full">
            <div className="flex flex-col w-full h-fit">
              <div className="flex flex-col w-full h-fit">
                <div className="relative items-center justify-center w-fit h-7 mt-7">
                  <label
                    htmlFor="email"
                    className="font-SCDream5 text-gray-500 text-base"
                  >
                    E-mail
                  </label>
                  <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
                </div>
                <input
                  className="font-SCDream3 text-gray-500 w-full text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                  id="email"
                  type="text"
                  value={emailValue}
                  onKeyDown={handlePressEnter}
                  placeholder="E-mail을 입력 후 Enter를 눌러주세요"
                  {...register("emailErrorInput", {
                    required: "이메일 필수로 입력 해 주세요",
                    onChange: handleEmailChange,
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="emailErrorInput"
                  render={({ message }) => (
                    <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                      {message}
                    </div>
                  )}
                />
                <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                  {emailValue === ""
                    ? null
                    : emailValue.match(emailRegex)
                    ? "올바른 이메일 형식입니다"
                    : "이메일 형식이 올바르지 않습니다"}
                </div>
              </div>
            </div>
          </form>
          <div className="transition duration-700 ease-in-out  w-full h-1/6 flex items-center justify-center text-mainOrange font-SCDream4 text-sm mt-1">
            {data
              ? `ID는 ${
                  data.data.id.slice(0, 4) + "*".repeat(data.data.id.length - 4)
                }입니다`
              : null}
          </div>

          <div className="w-full h-1/6 flex items-center justify-center">
            <Link href="/login">
              <button className="flex items-center justify-center w-5/6 md:w-4/6 lg:w-5/6 h-8 rounded-2xl bg-btnOrange text-white font-SCDream5 text-sm hover:bg-[#fcb79a]">
                <span>로그인 페이지로 이동하기</span>
              </button>
            </Link>
          </div>
        </>
      </CertifyPageLayout>
    </>
  );
}

export default FindId;
