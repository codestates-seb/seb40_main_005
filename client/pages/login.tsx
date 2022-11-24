import LoginForm from "../components/LoginForm";
import CertifyPageLayout from "../components/CertifyPageLayout";
import GoogleBtn from "../components/GoogleBtn";
import KakaoBtn from "../components/KakaoBtn";
import SubmitBtn from "../components/SubmitBtn";

const Login = () => {
  return (
    <>
      <CertifyPageLayout>
        <div className="flex flex-col h-[75%] md:h-[85%] lg:h-full justify-between">
          <LoginForm />
          <div className="flex flex-col md:items-center">
            <GoogleBtn />
            <KakaoBtn />
          </div>
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default Login;
