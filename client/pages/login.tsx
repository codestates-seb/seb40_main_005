import LoginForm from "../components/LoginForm";
import CertifyPageLayout from "../components/CertifyPageLayout";
import GoogleBtn from "../components/GoogleBtn";
import KakaoBtn from "../components/KakaoBtn";

const Login = () => {
  return (
    <>
      <CertifyPageLayout>
        <div className="flex flex-col justify-between h-fit">
          <LoginForm />
          {/* <div className="flex flex-col mt-5 md:mt-12 lg:mt-6 md:items-center">
            <GoogleBtn />
            <KakaoBtn />
          </div> */}
        </div>
      </CertifyPageLayout>
    </>
  );
};

export default Login;
