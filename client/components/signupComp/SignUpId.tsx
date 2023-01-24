import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import AuthBtn from "../AuthBtn";
import useCheckUserId from "../../hooks/user/useCheckUserId";
import { useRecoilState } from "recoil";
import { checkIdState } from "../../recoil/refacAtom";

interface Props {
  id: string;
  setId: (id: string) => void;
}

const SignUpId = ({ id, setId }: Props) => {
  const [checkId, setCheckId] = useRecoilState(checkIdState);
  const { refetch: idRefetch, isSuccess, isError } = useCheckUserId(id);

  const onSubmit = () => {
    idRefetch();
  };

  const failSubmit = () => {
    console.log("fail");
  };

  const handleIdChange = (e: any) => {
    setId(e.target.value);
    setCheckId(false);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit, failSubmit)}>
        <div className="flex flex-col w-full h-fit">
          <div className="relative items-center justify-center w-fit h-7 mt-7">
            <label className="text-base text-gray-500 font-SCDream5">ID</label>
            <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
          </div>
        </div>
        <div className="flex flex-row w-full h-fit items-center justify-center">
          <input
            className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
            type="text"
            autoComplete="off"
            value={id}
            placeholder="ID를 입력 후 중복확인 버튼을 클릭하세요"
            {...register("id", {
              required: "ID는 필수 입력입니다.",
              onChange: handleIdChange,
              pattern: {
                value: /^[a-zA-Z0-9]{5,}$/,
                message: "ID는 영문,숫자 5자 이상 입력되어야합니다.",
              },
            })}
          />
          <AuthBtn onClick={() => {}}>중복확인</AuthBtn>
        </div>
        <ErrorMessage
          errors={errors}
          name="id"
          render={({ message }) => {
            return (
              <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                {message}
              </div>
            );
          }}
        />
        {checkId && isSuccess ? (
          <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
            사용가능한 ID입니다
          </div>
        ) : null}
        {checkId && isError ? (
          <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
            이미 사용중인 ID입니다
          </div>
        ) : null}
      </form>
    </>
  );
};

export default SignUpId;
