const LogDetail = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="font-SCDream5 h-fit text-[0.2rem] md:text-xs lg:text-base w-80 lg:w-[70%]">
        {props.children}
      </div>
    </>
  );
};

export default LogDetail;
