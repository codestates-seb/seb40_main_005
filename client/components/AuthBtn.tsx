import { Children } from "react";

const AuthBtn = (props: { children: React.ReactNode }) => {
  return (
    <>
      <button className="bg-socialBgOrg  font-SCDream4 text-white rounded-lg text-[11px] md:text-xs w-16 h-6 ml-2">
        {props.children}
      </button>
    </>
  );
};

export default AuthBtn;
