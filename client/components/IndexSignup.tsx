import Link from "next/link";

const IndexSignup = () => {
  return (
    <>
      <Link href="/resignup">
        <div className="relative items-center justify-center cursor-pointer w-fit h-7">
          <div className="z-10 ml-1 text-lg text-gray-700 font-SCDream3">
            회원가입
          </div>
          <div className="absolute top-5 left-1 right-0 bottom-0.5  bg-mainOrange/40"></div>
        </div>
      </Link>
    </>
  );
};

export default IndexSignup;
