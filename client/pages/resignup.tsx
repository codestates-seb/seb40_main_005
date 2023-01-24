import { useState } from "react";
import { useRecoilValue } from "recoil";
import { codeInputState, pwInputState } from "../recoil/refacAtom";
import CertifyPageLayout from "../components/CertifyPageLayout";
import SignUpId from "../components/signupComp/SignUpId";
import SignUpEmail from "../components/signupComp/SignUpEmail";
import SignUpIllust from "../components/signupComp/SignUpIllust";
import SignUpCode from "../components/signupComp/SignUpCode";
import SignUpPw from "../components/signupComp/SignUpPw";

const Resignup = () => {
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isViewCode = useRecoilValue(codeInputState);
  const isViewPw = useRecoilValue(pwInputState);

  const handleChangeEmail = (email: string) => {
    setEmail(email);
  };

  const handleChangeId = (id: string) => {
    setId(id);
  };

  const handleChangePw = (pw: string) => {
    setPassword(pw);
  };

  return (
    <>
      <CertifyPageLayout>
        <div className="flex flex-col items-start justify-start w-full h-full">
          <div className="relative items-center justify-center w-fit h-7 ">
            <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              회원가입
            </div>
            <div className="absolute left-0 right-0 top-5 md:top-6 lg:top-7 bottom-1 md:bottom-0 lg:-bottom-1 bg-mainOrange/40"></div>
          </div>
          <SignUpId id={id} setId={handleChangeId} />
          <SignUpEmail email={email} setEmail={handleChangeEmail} />
          {isViewCode || isViewPw ? null : <SignUpIllust />}
          {isViewCode ? <SignUpCode email={email} /> : null}
          {isViewPw ? (
            <SignUpPw
              id={id}
              email={email}
              password={password}
              setPassword={handleChangePw}
            />
          ) : null}
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default Resignup;
