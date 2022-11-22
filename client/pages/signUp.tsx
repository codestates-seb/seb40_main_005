import CertifyPageLayout from "../components/CertifyPageLayout";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

interface FormInputs {
  singleErrorInput: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  //   const [authentication, setAuthentication] = useState<boolean>(false);
  const [idValue, setIdValue] = useState<string>("");
  const [idAlert, setIdAlert] = useState<boolean>(false);
  const [checkId, setCheckId] = useState<boolean>(false);

  const getAllPosts = async () => {
    const { data } = await axios.get(
      "http://3.39.195.113:8080/members/search?id=35",
    );

    return data;
  };
  const queryClient = useQueryClient();
  const { data, status, isLoading, isSuccess } = useQuery(
    ["questions"],
    getAllPosts,
  );

  const onValid = () => {
    // const queryClient = useQueryClient();
    // const {data, status, isLoading, isSuccess} = useQuery(
    //   ['question'],
    //   ()=> {
    //     return axios.get("http://3.39.195.113:8080/members/search?id=35");
    //   }
    // )
    console.log(data);
  };

  const onInValid = () => {
    alert("detive!");
  };

  const handleIdChange = (e: any) => {
    setIdValue(e.target.value);
  };

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

          <form onSubmit={handleSubmit(onValid, onInValid)} className="w-full">
            <div className="flex flex-col w-full h-fit">
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
                  className="font-SCDream2 text-gray-500 w-full text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                  id="identity"
                  type="text"
                  value={idValue}
                  placeholder="ID를 입력 후 Enter를 눌러주세요"
                  {...register("singleErrorInput", {
                    required: "ID는 필수 입력입니다.",
                    onChange: handleIdChange,
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
                {idValue.length < 5 ? (
                  <div className="flex flex-row justify-end items-end w-full text-mainOrange h-fit font-SCDream2 text-xs mt-1">
                    5글자 이상으로 입력해주세요
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default SignUp;
