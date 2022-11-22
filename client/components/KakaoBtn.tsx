import { Children } from "react";

const KakaoBtn = (props: { children: React.ReactNode }) => {
  return (
    <>
      <button className="bg-socialBgOrg text-white text-xs rounded-2xl w-28 h-9 font-SCDream5 md:text-sm md:w-48 md:h-10`">
        {props.children}
      </button>
    </>
  );
};

export default KakaoBtn;
