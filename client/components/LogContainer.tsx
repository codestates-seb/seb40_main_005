const LogContainer = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between mt-2 lg:mx-10">
        {props.children}
      </div>
    </>
  );
};

export default LogContainer;
