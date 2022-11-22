import { Children } from "react";

const GoogleBtn = (props: { children: React.ReactNode }) => {
  console.log(props);
  return (
    <>
      <button className="bg-socialBgGray text-[#9E9E9E] text-xs rounded-2xl w-28 h-9 font-SCDream5 md:text-sm md:w-48 md:h-10`">
        {props.children}
      </button>
    </>
  );
};

export default GoogleBtn;
