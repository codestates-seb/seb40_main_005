import Image from "next/image";
import Link from "next/link";

/**
 * @author yeowool
 * @description 사용 예시 : CertifyPageLayout태그 안에서 코드 작성
 **/

const CertifyPageLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col justify-center md:justify-evenly lg:justify-center bg-bgGray items-center  h-screen">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/images/logo export(orange).svg"
            width={200}
            height={50}
          />
        </Link>
        <div className="flex h-4/5 w-80 lg:mt-11 lg:mb-10 lg:h-[32rem] md:w-4/6 lg:w-3/5 drop-shadow-2xl">
          <div className="lg:w-1/2 hidden md:hidden lg:block h-full bg-gradient-to-t from-[#FE4C00] to-[#FF9264]">
            <div className="flex justify-center	 items-center lg:h-full">
              <div className="absolute top-0 bottom-0 left-0 right-0 w-1/2 h-full bg-white/60"></div>

              <img
                className="flex  lg:h-4/6 "
                src="/images/시계누끼.png"
                alt="시계 이미지"
              />
            </div>
          </div>
          <div className="w-full p-8 lg:w-1/2  h-full bg-bgWhite">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CertifyPageLayout;
