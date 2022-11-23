import { Children } from "react";

const EmailCheckNumberLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-40 mt-5">
        {props.children}
      </div>
    </>
  );
};

export default EmailCheckNumberLayout;
