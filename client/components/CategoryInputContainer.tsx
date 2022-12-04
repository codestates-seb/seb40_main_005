interface Props {
  children: React.ReactNode;
}

const CategoryInputContainer = ({ children }: Props) => {
  return (
    <>
        <div className="flex flex-row justify-between px-4 items-center w-full md:w-3/4 h-8 bg-bgWhite drop-shadow-md rounded-xl mb-3">
            {children}
        </div>
    </>
  );
};

export default CategoryInputContainer;
