const LogDetail = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="font-SCDream5 h-fit text-[0.2rem] md:text-sm lg:text-base max-w-80">
        {props.children}
      </div>
    </>
  );
};

export default LogDetail;
