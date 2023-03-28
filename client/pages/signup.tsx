import CertifyPageLayout from "../components/CertifyPageLayout";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useState } from "react";
import useCheckUserId from "../hooks/user/useCheckUserId";
import AuthBtn from "../components/AuthBtn";
import EmailCheckNumberLayout from "../components/EmailCheckNumberLayout";
import GoogleBtn from "../components/GoogleBtn";
import KakaoBtn from "../components/KakaoBtn";
import SubmitBtn from "../components/SubmitBtn";
import useCheckEmail from "../hooks/user/useCheckEmail";
import useCheckAuthNum from "../hooks/user/useCheckAuthNum";
import usePostSignUpData from "../hooks/user/usePostSignUpData";
import WelcomeModal from "../components/WelcomeModal";
import useRequestAuthNum from "../hooks/user/useRequestAuthNum";

const SignUp = () => {
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

  interface SignUpData {
    id: string;
    email: string;
    password: string;
  }

  const [idValue, setIdValue] = useState<string>("");
  const [checkId, setCheckId] = useState<boolean>(true);
  const [isCheckId, setIsCheckId] = useState<boolean>(false);
  const [isSameId, setIsSameId] = useState<boolean>(false);
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
  const [checkAuthNum, setCheckAuthNum] = useState<boolean>(false);
  const [pwInputView, setPwInputView] = useState<boolean>(false);
  const [signUpData, setSignUpData] = useState<SignUpData>({
    id: idValue,
    email: emailValue,
    password: pwValue,
  });
  const [modalView, setModalView] = useState<boolean>(false);

  const { data: idData, refetch: idRefetch } = useCheckUserId(idValue);

  const { data: emailData, refetch: emailRefetch } = useCheckEmail(emailValue);

  const { data: checkAuth, mutate: checkAuthNumMute } = useCheckAuthNum({
    authNum: authNumValue,
    email: emailValue,
  });

  const { mutate: postAuthNumMute } = useRequestAuthNum({ email: emailValue });

  const { data: signupData, mutate: singUpMute } =
    usePostSignUpData(signUpData);

  const emailRex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const pwRex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,23}$/;
  const idRex = /^[a-zA-Z0-9]{5,20}$/;

  const handleAuthClick = () => {
    setAuthInputView(true);
    postAuthNumMute({ email: emailValue });
  };

  const handleIdChange = (e: any) => {
    setIdValue(e.target.value);
    setIsCheckId(false);
    if (
      e.target.value.length !== 0 &&
      e.target.value.length < 5 &&
      !idRex.test(e.target.value)
    ) {
      setCheckId(false);
    } else {
      setCheckId(true);
    }
  };

  const handleEmailChange = (e: any) => {
    if (isCheckEmail) {
      setAuthInputView(false);
      setIsCheckEmail(false);
    }
    if (emailRex.test(e.target.value)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
    setEmailValue(e.target.value);
  };

  const handlePressEnter = (e: any) => {
    e.preventDefault();
    if (idValue.length !== 0 && checkId) {
      idRefetch();
      setIsCheckId(true);
    }
  };

  const handleEmailEnter = (e: any) => {
    e.preventDefault();
    // if (e.keyCode === 13 && checkEmail) {
    // console.log(emailData);
    emailRefetch();
    // console.log(emailData);
    setIsCheckEmail(true);
    // }
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
      setSignUpData({
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
    checkAuthNumMute({ authNum: authNumValue, email: emailValue });
    console.log(checkAuth);
    setCheckAuthNum(true);
    setAuthInputView(false);
    setPwInputView(true);
  };

  const handleClickSubmit = (e: any) => {
    e.preventDefault();

    singUpMute(signUpData);
    setModalView(true);
  };

  return (
    <>
      {modalView ? <WelcomeModal name={idValue} /> : null}

      <CertifyPageLayout>
        <div className="flex flex-col items-start justify-start w-full h-full">
          <div className="relative items-center justify-center w-fit h-7 ">
            <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              회원가입
            </div>
            <div className="absolute left-0 right-0 top-5 md:top-6 lg:top-7 bottom-1 md:bottom-0 lg:-bottom-1 bg-mainOrange/40"></div>
          </div>
          <form className="w-full" onSubmit={handlePressEnter}>
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
              <div className="flex flex-row items-center justify-center w-full h-fit">
                <input
                  className="font-SCDream3 text-gray-500 w-full text-xs md:text-sm mt-2 border-b-[1px] border-mainOrange/40 outline-none"
                  id="identity"
                  autoComplete="off"
                  type="text"
                  value={idValue}
                  // onKeyDown={handlePressEnter}
                  placeholder="ID를 입력 후 중복확인 버튼을 클릭하세요"
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
                {idRex.test(idValue) &&
                checkId &&
                idValue.length !== 0 &&
                !isCheckId ? (
                  <AuthBtn
                    onClick={() => {
                      handlePressEnter;
                    }}
                  >
                    중복확인
                  </AuthBtn>
                ) : null}
              </div>
              <ErrorMessage
                errors={errors}
                name="idErrorInput"
                render={({ message }) => (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-xs text-nagativeMessage h-fit font-SCDream2">
                    {message}
                  </div>
                )}
              />
              {idValue.length !== 0 && !idRex.test(idValue) ? (
                <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-nagativeMessage h-fit font-SCDream2">
                  ID는 영문,숫자포함 5자 이상 입력되어야합니다.
                </div>
              ) : null}

              {/* API 구현 뒤 수정 필요 */}
              {checkId && isCheckId && idData?.data && idValue.length !== 0 ? (
                <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
                  사용가능한 ID입니다
                </div>
              ) : checkId &&
                isCheckId &&
                idData?.response &&
                idValue.length !== 0 ? (
                <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-nagativeMessage h-fit font-SCDream2">
                  이미 사용중인 ID입니다
                </div>
              ) : null}
            </div>
          </form>

          <form className="w-full" onSubmit={handleEmailEnter}>
            <div className="flex flex-col w-full h-fit">
              <div className="relative items-center justify-center mt-5 w-fit h-7">
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
                  // onKeyUp={handleEmailEnter}
                  disabled={!idData ? true : idData.response ? true : false}
                  placeholder="Email 입력 후 중복확인 버튼을 클릭하세요"
                  {...register("emailErrorInput", {
                    required: "Email은 필수 입력입니다.",
                    onChange: handleEmailChange,
                  })}
                />
                {checkEmail && !isCheckEmail ? (
                  <AuthBtn
                    onClick={() => {
                      handleEmailEnter;
                    }}
                  >
                    중복확인
                  </AuthBtn>
                ) : null}
                {emailValue.length !== 0 &&
                isCheckEmail &&
                !checkAuthNum &&
                emailData?.data ? (
                  <AuthBtn onClick={handleAuthClick}>인증요청</AuthBtn>
                ) : emailValue.length !== 0 &&
                  isCheckEmail &&
                  checkAuthNum &&
                  emailData?.data ? (
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
                <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-nagativeMessage h-fit font-SCDream2">
                  올바르지않은 이메일 형식입니다
                </div>
              ) : null}

              {/* isSameEmail 상태 활용 */}
              {/* api완성 시 수정필요 */}
              {emailValue.length !== 0 &&
              emailData?.response &&
              isCheckEmail &&
              emailRex.test(emailValue) ? (
                <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-nagativeMessage h-fit font-SCDream2">
                  이미 존재하는 Email입니다
                </div>
              ) : emailValue.length !== 0 &&
                emailData?.data &&
                isCheckEmail &&
                emailRex.test(emailValue) ? (
                <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
                  사용가능한 Email입니다! 인증요청 버튼을 클릭해주세요
                </div>
              ) : null}
            </div>
          </form>

          {authInputView || checkAuth?.response ? (
            <EmailCheckNumberLayout>
              <div className="text-xs text-mainOrange font-SCDream4 md:text-sm">
                입력하신 Email로 인증번호가 발송되었습니다
              </div>
              {authNumValue.length !== 0 && checkAuth?.response ? ( //요청 응답에 따른 조건 부여
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
          ) : isCheckEmail &&
            !authInputView &&
            pwInputView &&
            checkAuth?.data ? (
            <form className="w-full" onSubmit={handleClickSubmit}>
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
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
                    올바른 비밀번호 형식입니다
                  </div>
                ) : pwValue.length !== 0 && !checkPw ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-nagativeMessage h-fit font-SCDream2">
                    비밀번호 형식이 올바르지 않습니다
                  </div>
                ) : null}
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
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px] text-mainOrange h-fit font-SCDream2">
                    비밀번호가 일치합니다
                  </div>
                ) : rePwValue.length !== 0 && !checkRePw ? (
                  <div className="flex flex-row items-end justify-end w-full mt-1 text-[10px] md:text-[11px]  text-nagativeMessage h-fit font-SCDream2">
                    비밀번호가 일치하지 않습니다
                  </div>
                ) : null}
              </div>
              {isCheckId && isCheckEmail && checkPw && checkRePw ? (
                <div className="flex flex-row items-center justify-end w-full mt-4 h-fit">
                  <SubmitBtn onClick={() => handleClickSubmit} />
                </div>
              ) : null}
            </form>
          ) : (
            <EmailCheckNumberLayout>
              <div className="flex flex-row items-center justify-center w-full text-sm h-fit font-SCDream5 md:text-lg text-mainOrange">
                Gallendar에 오신 걸 환영합니다!
              </div>
              <div className="flex flex-row items-center justify-center w-full text-xs h-fit font-SCDream5 md:text-sm text-socialBgOrg">
                Welcome to Galledar!
              </div>
            </EmailCheckNumberLayout>
          )}
          {/* Oauth */}
          {/* {!authInputView && !pwInputView ? (
            <div className="flex flex-col items-center justify-center w-full mt-3 h-fit">
              <GoogleBtn />
              <KakaoBtn />
            </div>
          ) : null} */}
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default SignUp;
