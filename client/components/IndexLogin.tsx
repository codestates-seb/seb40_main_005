import Link from "next/link";

const IndexLogin = () => {
  return (
    <Link href="/login">
      <div className="relative items-center justify-center mr-8 cursor-pointer w-fit h-7">
        <div className="z-10 ml-1 text-lg text-gray-700 font-SCDream3">
          로그인
        </div>
        <div className="absolute top-5 left-0.5 right-0 bottom-0.5  bg-mainOrange/40"></div>
      </div>
    </Link>
  );
};

export default IndexLogin;
