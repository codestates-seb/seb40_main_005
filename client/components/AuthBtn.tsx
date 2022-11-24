import { Children } from "react";

interface Props {
  children : React.ReactNode,
  onClick : () => void
}

const AuthBtn = ({ children, onClick }: Props) => {
  return (
    <>
      <button className="bg-socialBgOrg  font-SCDream4 text-white rounded-lg text-[11px] md:text-xs w-16 h-6 ml-2"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default AuthBtn;
