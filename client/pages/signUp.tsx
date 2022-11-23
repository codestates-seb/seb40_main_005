import CertifyPageLayout from "../components/CertifyPageLayout";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useState } from "react";
import {
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from "react-query";
import axios from "axios";
import fetchIdCheck from "../apis/user/getUserId";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  interface FormInputs {
    idErrorInput: string;
    emailErrorInput: string;
  }

  const [idValue, setIdValue] = useState<string>("");
  const [checkId, setCheckId] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");

  const useGetUserId = () => {
    return useQuery(
      ["get/userIdAfterClick"],
      () => fetchIdCheck("parkhacker"),
      {
        enabled: false,
      },
    );
  };

  const { data, refetch, isLoading, isFetching } = useGetUserId();

  const onInValid = () => {
    alert("detive!");
  };

  const handleIdChange = (e: any) => {
    setIdValue(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmailValue(e.target.value);
  };

  const handlePressEnter = (e: any) => {
    if (e.keyCode === 13){
      e.preventDefault();
      refetch();
    }
  }

  return (
    <>
      <CertifyPageLayout>
        <div className="flex flex-col justify-start items-start w-full h-full">
          <div className="relative items-center justify-center w-fit h-7 ">
            <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              회원가입
            </div>
            <div className="absolute top-5 md:top-6 lg:top-7 left-0 right-0 bottom-1 md:bottom-0 lg:-bottom-1 bg-mainOrange/40"></div>
          </div>
          <form className="w-full" onSubmit={()=> false}>
            <div className="flex flex-col w-full h-fit">
              <div className="relative items-center justify-center w-fit h-7 mt-7">
                <label
                  htmlFor="identity"
                  className="font-SCDream5 text-gray-500 text-base"
                >
                  ID
                </label>
                <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
              </div>
              <input
                className="font-SCDream3 text-gray-500 w-full text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                id="identity"
                autoComplete="off"
                type="text"
                value={idValue}
                onKeyDown={handlePressEnter}
                placeholder="ID를 입력 후 Enter를 눌러주세요"
                {...register("idErrorInput", {
                  required: "ID는 필수 입력입니다.",
                  onChange: handleIdChange,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="idErrorInput"
                render={({ message }) => (
                  <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                    {message}
                  </div>
                )}
              />
              {idValue.length !== 0 && idValue.length < 5 ? (
                <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                  5글자 이상으로 입력해주세요
                </div>
              ) : null}

              {data && data.status === 200 ? (
                <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                  사용가능한 ID입니다
                </div>
              ) : data && data.status !== 200 ? (
                <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                  이미 사용중인 ID입니다
                </div>
              ) : null}
            </div>
          </form>

          <form className="w-full">
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
                autoComplete="off"
                type="text"
                value={emailValue}
                placeholder="Email 입력 후 인증버튼을 클릭하세요"
                {...register("emailErrorInput", {
                  required: "Email은 필수 입력입니다.",
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
            </div>
          </form>

          {/* <div className="flex flex-col justify-start items-start w-full h-full">
            <form onSubmit={handleSubmit(onValid, onInValid)} className="w-full">
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
                    autoComplete="off"
                    type="text"
                    value={emailValue}
                    placeholder="Email을 입력후 인증버튼을 클릭하세요"
                    {...register("singleErrorInput", {
                      required: "Email은 필수 입력입니다.",
                      onChange: handleEmailChange,
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="singleErrorInput"
                    render={({ message }) => (
                      <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                        {message}
                      </div>
                    )}
                  />
                  {idValue.length !== 0 && idValue.length < 5 ? (
                    <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                      5글자 이상으로 입력해주세요
                    </div>
                  ) : null}
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default SignUp;
