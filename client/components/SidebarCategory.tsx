interface Props {
  onClick: () => void;
  // children: React.ReactNode;
  categoryTitle: string;
  selectedTitle: string;
}

const SidebarCategory = ({ onClick, categoryTitle, selectedTitle }: Props) => {
  return (
    <>
      <div
        className="flex mb-3 lg:mb-5 rounded-[0.2rem]  w-full h-10  cursor-pointer bg-white"
        onClick={onClick}
      >
        <div className="w-3 h-full bg-btnOrange rounded-l-[0.2rem]"></div>

        <div className="flex flex-row justify-between w-full mx-2">
          <div className="flex justify-between w-full p-2 mt-1 h-fit">
            {categoryTitle}
          </div>

          {selectedTitle === categoryTitle ? (
            <div
              className={`w-3 h-3 self-center rounded-full bg-btnOrange`}
            ></div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SidebarCategory;
