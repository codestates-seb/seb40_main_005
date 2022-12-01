interface Props {
    children: React.ReactNode;
  }
  
  const CategoryReadContainer = ({ children }: Props) => {
    return (
      <>
          <div className="flex flex-row justify-between p-1.5 items-center w-fit bg-bgWhite drop-shadow-md rounded-md mb-3">
              {children}
          </div>
      </>
    );
  };
  
  export default CategoryReadContainer;
  