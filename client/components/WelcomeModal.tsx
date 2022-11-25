import ConfirmBtn from "./ConfirmBtn";
import Router, { useRouter } from "next/router";

const WelcomeModal = ({ name }: { name: string }) => {
  
  const handleClickConfirm = () => {
    Router.push("/login")
  }


  return (
    <>
    <div className="fixed w-full h-full z-20">
      <div className="flex flex-row justify-center items-center w-full h-full bg-bgWhite/20">
        <div className="fixed bg-bgWhite w-56 h-32 pt-[1.3rem] md:pt-6 flex flex-col justify-center items-center md:w-[25rem] md:h-44 border-2 rounded-2xl">
          <span className="mb-2 text-lg md:mb-6 md:text-xl font-SCDream6 text-textBlack">
            환영합니다! {name}님!
          </span>
          <div className="absolute w-44 h-2 top-[3.2rem] md:top-[4.5rem] bg-orange/40"></div>
          <ConfirmBtn onClick={handleClickConfirm}>확인</ConfirmBtn>
        </div>
      </div>
    </div>
    </>
  );
};

export default WelcomeModal;
