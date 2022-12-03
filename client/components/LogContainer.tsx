const LogContainer = (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between m-2">
        {props.children}
      </div>
    </>
  );
};

export default LogContainer;
