import CertifyPageLayout from "../components/CertifyPageLayout";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useState } from "react";
import useCheckUserId from "../hooks/user/useCheckUserId";
import AuthBtn from "../components/AuthBtn";
import EmailCheckNumberLayout from "../components/EmailCheckNumberLayout";

import SubmitBtn from "../components/SubmitBtn";
import useCheckEmail from "../hooks/user/useCheckEmail";
import useCheckAuthNum from "../hooks/user/useCheckAuthNum";
import usePatchPw from "../hooks/user/usePatchPw";
import ResetPwModal from "../components/ResetPwModal";

const ResetPw = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  interface FormInputs {
    idErrorInput: string;
    emailErrorInput: string;
    passwordErrorInput: string;
    repasswordErrorInput: string;
  }

  interface ResetPwData {
    id: string;
    email: string;
    password: string;
  }

  const [idValue, setIdValue] = useState<string>("");
  const [checkId, setCheckId] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [isSameEmail, setIsSameEmail] = useState<boolean>(false);
  const [isCheckEmail, setIsCheckEmail] = useState<boolean>(false);
  const [pwValue, setPwValue] = useState<string>("");
  const [checkPw, setCheckPw] = useState<boolean>(false);
  const [rePwValue, setRePwValue] = useState<string>("");
  const [checkRePw, setCheckRePw] = useState<boolean>(false);
  const [authInputView, setAuthInputView] = useState<boolean>(false);
  const [authNumValue, setAuthNumValue] = useState<string>("");
  const [checkAuthNum, setCheckAuthNum] = useState<boolean>(true);
  const [pwInputView, setPwInputView] = useState<boolean>(false);
  const [patchPwData, setPatchPwData] = useState<ResetPwData>({
    id: idValue,
    email: emailValue,
    password: pwValue,
  });

  const [modalView, setModalView] = useState<boolean>(false);

  const { data: idData, refetch: idRefetch } = useCheckUserId(idValue);

  const { data: emailData, refetch: emailRefetch } = useCheckEmail(emailValue);

  const { data: authNumData, refetch: authNumRefetch } = useCheckAuthNum(
    authNumValue,
    emailValue,
  );

  const { data: resetPw, mutate: singUpMute } = usePatchPw(patchPwData);

  const emailRex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const pwRex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,23}$/;
  const idRex = /^[a-zA-Z0-9]{5,20}$/;

  const handleAuthClick = () => {
    setAuthInputView(true);
  };

  const handleIdChange = (e: any) => {
    setIdValue(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    if (emailRex.test(e.target.value)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
    setEmailValue(e.target.value);
  };

  const handlePressEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (idValue.length >= 5) {
        idRefetch();
        console.log(idData);
      }
    }
  };

  const handleEmailEnter = (e: any) => {
    e.preventDefault();
    if (e.keyCode === 13 && checkEmail) {
      // console.log(emailData);
      emailRefetch();
      setIsCheckEmail(true);
    }
  };

  const handlePwChange = (e: any) => {
    if (pwRex.test(e.target.value)) {
      setCheckPw(true);
    } else {
      setCheckPw(false);
    }
    setPwValue(e.target.value);
  };

  const handleRePwChange = (e: any) => {
    if (e.target.value === pwValue) {
      setCheckRePw(true);
      setPatchPwData({
        id: idValue,
        email: emailValue,
        password: e.target.value,
      });
    } else {
      setCheckRePw(false);
    }
    setRePwValue(e.target.value);
  };

  const handleAuthNumChange = (e: any) => {
    setAuthNumValue(e.target.value);
  };

  const handleClickAuthNumBtn = () => {
    // 조건문 추가
    authNumRefetch();
    setCheckAuthNum(true);
    setAuthInputView(false);
    setPwInputView(true);
    const idPwTag = document.getElementById("idPwTag");
    idPwTag!.style.display = "none";
  };

  const handleClickSubmit = (e: any) => {
    e.preventDefault();

    // console.log(idValue, emailValue, pwValue);
    singUpMute(patchPwData);
    console.log(patchPwData);
    console.log(resetPw);

    setModalView(true);
  };

  return (
    <>
      {modalView && checkRePw && checkPw ? <ResetPwModal /> : null}
      <CertifyPageLayout>
        <div className="flex flex-col items-start justify-start w-full h-full">
          <div className="relative items-center justify-center w-fit h-7 ">
            <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              비밀번호 재설정
            </div>
            <div className="absolute left-0 right-0 top-5 md:top-6 lg:top-7 bottom-1 md:bottom-0 lg:-bottom-1 bg-mainOrange/40"></div>
          </div>
          <div id="idPwTag" className="w-full">
            <form className="w-full mt-7">
              <div className="flex flex-col w-full h-fit">
                <div className="relative items-center justify-center w-fit h-7 mt-7">
                  <label
                    htmlFor="identity"
                    className="text-base text-gray-500 font-SCDream5"
                  >
                    ID
                  </label>
                  <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
                </div>
                <input
                  className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                  id="identity"
                  autoComplete="off"
                  type="text"
                  value={idValue}
                  onKeyDown={handlePressEnter}
                  placeholder="ID를 입력 후 Enter를 눌러주세요"
                  {...register("idErrorInput", {
                    required: "ID는 필수 입력입니다.",
                    onChange: handleIdChange,
                    minLength: 5,
                    pattern: {
                      value: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{5,}$/,
                      message: "ID는 영문,숫자 5자 이상 입력되어야합니다.",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="idErrorInput"
                  render={({ message }) => (
                    <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                      {message}
                    </div>
                  )}
                />
                {idValue.length !== 0 &&
                (idValue.length < 5 || !idRex.test(idValue)) ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                    ID는 영문,숫자포함 5자 이상 입력되어야합니다.
                  </div>
                ) : null}

                {/* API 구현 뒤 수정 필요 */}
                {idData && idData.data.length > 0 ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-mainOrange h-fit font-SCDream2">
                    존재하는 ID입니다
                  </div>
                ) : idData && idData.data.length === 0 ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                    존재하지 않는 ID입니다
                  </div>
                ) : null}
              </div>
            </form>

            <form className="w-full" onSubmit={handleEmailEnter}>
              <div className="flex flex-col w-full h-fit">
                <div className="relative items-center justify-center w-fit h-7 mt-7">
                  <label
                    htmlFor="email"
                    className="text-base text-gray-500 font-SCDream5"
                  >
                    E-mail
                  </label>
                  <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
                </div>
                <div className="flex flex-row items-end justify-center w-full h-fit">
                  <input
                    className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                    id="email"
                    autoComplete="off"
                    type="text"
                    value={emailValue}
                    onKeyUp={handleEmailEnter}
                    placeholder="Email 입력 후 Enter를 눌러주세요"
                    {...register("emailErrorInput", {
                      required: "Email은 필수 입력입니다.",
                      onChange: handleEmailChange,
                    })}
                  />
                  {emailValue.length !== 0 && isCheckEmail && checkAuthNum ? (
                    <AuthBtn onClick={handleAuthClick}>인증요청</AuthBtn>
                  ) : checkAuthNum ? (
                    <AuthBtn
                      onClick={() => {
                        return 0;
                      }}
                    >
                      인증완료
                    </AuthBtn>
                  ) : emailValue.length !== 0 &&
                    isCheckEmail &&
                    !checkAuthNum ? (
                    <AuthBtn
                      onClick={() => {
                        return 0;
                      }}
                    >
                      인증완료
                    </AuthBtn>
                  ) : null}
                  {/* <AuthBtn>인증완료</AuthBtn> */}
                </div>

                <ErrorMessage
                  errors={errors}
                  name="emailErrorInput"
                  render={({ message }) => (
                    <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                      {message}
                    </div>
                  )}
                />
                {emailValue.length !== 0 && !checkEmail ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                    올바르지않은 이메일 형식입니다
                  </div>
                ) : null}

                {/* isSameEmail 상태 활용 */}
                {/* api완성 시 수정필요 */}
                {emailValue.length !== 0 && isSameEmail && isCheckEmail ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-mainOrange h-fit font-SCDream2">
                    존재 하지 않는 Email입니다
                  </div>
                ) : emailValue.length !== 0 && !isSameEmail && isCheckEmail ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                    존재하는 Email입니다. 인증요청 버튼을 클릭해주세요
                  </div>
                ) : null}
              </div>
            </form>

            {authInputView ? (
              <EmailCheckNumberLayout>
                <div
                  id=""
                  className="text-xs text-mainOrange font-SCDream4 md:text-sm"
                >
                  입력하신 Email로 인증번호가 발송되었습니다
                </div>
                {authNumValue.length !== 0 && !checkAuthNum ? (
                  <div className=" text-nagativeMessage font-SCDream3 text-[11px] md:text-[12px] mt-2">
                    인증번호가 올바르지 않습니다
                  </div>
                ) : (
                  <div className=" text-nagativeMessage font-SCDream3 text-[11px] md:text-[12px] mt-2">
                    5분이내에 입력해주세요
                  </div>
                )}

                <input
                  className="flex pl-5 pr-5 pt-1 pb-1 mt-3 mb-3 font-SCDream3 text-gray-500 w-60 h-fit text-xs md:text-sm outline-none text-center rounded-md border-b-[1px] border-mainOrange/40"
                  placeholder="인증번호를 입력하세요"
                  value={authNumValue}
                  onChange={handleAuthNumChange}
                />
                <AuthBtn onClick={handleClickAuthNumBtn}>인증</AuthBtn>
              </EmailCheckNumberLayout>
            ) : null}
          </div>
          <div className="w-full mt-7">
            {isCheckEmail && !authInputView && pwInputView ? (
              <form className="w-full" onSubmit={handleClickSubmit}>
                <div className="flex flex-col w-full h-fit">
                  <div className="flex flex-col w-full md:flex-row h-fit">
                    <div className="relative items-center justify-center w-fit h-7 mt-3">
                      <label
                        htmlFor="password"
                        className="text-base text-gray-500 font-SCDream5"
                      >
                        비밀번호
                      </label>
                      <div className="absolute top-4 md:top-4.5 lg:top-4 left-0 right-0 bottom-2 md:bottom-1.5 lg:bottom-1.5 bg-mainOrange/40"></div>
                    </div>
                    <div className="font-SCDream3 text-gray-400 w-fit h-fit text-[10px] mt-0 md:mt-5 ml-0 md:ml-2">
                      특수문자, 영문자, 숫자 포함 8글자 이상으로 입력해주세요
                    </div>
                  </div>
                  <input
                    className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                    id="email"
                    autoComplete="off"
                    type="password"
                    value={pwValue}
                    placeholder="비밀번호를 입력하세요"
                    {...register("passwordErrorInput", {
                      required: "비밀번호는 필수 입력입니다.",
                      onChange: handlePwChange,
                    })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="passwordErrorInput"
                    render={({ message }) => (
                      <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                        {message}
                      </div>
                    )}
                  />
                  {pwValue.length !== 0 && checkPw ? (
                    <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-mainOrange h-fit font-SCDream2">
                      올바른 비밀번호 형식입니다
                    </div>
                  ) : pwValue.length !== 0 && !checkPw ? (
                    <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                      비밀번호 형식이 올바르지 않습니다
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col w-full h-fit">
                  <div className="relative items-center justify-center w-fit h-7 mt-3">
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
                    value={rePwValue}
                    placeholder="다시 한번 비밀번호를 입력하세요"
                    {...register("repasswordErrorInput", {
                      required: "비밀번호를 확인하세요",
                      onChange: handleRePwChange,
                    })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="repasswordErrorInput"
                    render={({ message }) => (
                      <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                        {message}
                      </div>
                    )}
                  />
                  {rePwValue.length !== 0 && checkRePw ? (
                    <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-mainOrange h-fit font-SCDream2">
                      비밀번호가 일치합니다
                    </div>
                  ) : rePwValue.length !== 0 && !checkRePw ? (
                    <div className="flex flex-row items-end justify-end w-full mt-1 text-xs  text-nagativeMessage h-fit font-SCDream2">
                      비밀번호가 일치하지 않습니다
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-row items-center justify-end w-full h-fit mt-4">
                  <SubmitBtn onClick={() => handleClickSubmit} />
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default ResetPw;
