interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const SidebarCategory = ({ onClick, children }: Props) => {
  return (
    <>
      <div
        className="flex mb-3 lg:mb-5 rounded-md  w-full h-10  cursor-pointer bg-white"
        onClick={onClick}
      >
        <div className="w-3 h-full bg-btnOrange rounded-l-md"></div>
        <div className="flex justify-between w-full p-2 h-fit mt-1">
          {children}
        </div>
      </div>
    </>
  );
};

export default SidebarCategory;
