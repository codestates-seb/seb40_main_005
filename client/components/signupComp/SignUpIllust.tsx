import EmailCheckNumberLayout from "../EmailCheckNumberLayout";

const SignUpIllust = () => {
  return (
    <EmailCheckNumberLayout>
      <div className="flex flex-row items-center justify-center w-full text-sm h-fit font-SCDream5 md:text-lg text-mainOrange">
        Gallendar에 오신 걸 환영합니다!
      </div>
      <div className="flex flex-row items-center justify-center w-full text-xs h-fit font-SCDream5 md:text-sm text-socialBgOrg">
        Welcome to Galledar!
      </div>
    </EmailCheckNumberLayout>
  );
};

export default SignUpIllust;
