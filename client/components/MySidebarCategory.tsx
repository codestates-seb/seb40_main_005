interface Props {
  onClick: () => void;
  // children: React.ReactNode;
  categoryTitle: string;
  selectedTitle: string;
}

const MySidebarCategory = ({
  onClick,
  categoryTitle,
  selectedTitle,
}: Props) => {
  return (
    <>
      <div
        className="flex mb-3 lg:mb-5 rounded-[0.2rem]  w-full h-8  cursor-pointer bg-white"
        onClick={onClick}
      >
        <div className="w-1 h-full bg-btnOrange "></div>

        <div className="flex flex-row justify-between w-full mx-2">
          <div className="flex justify-between w-full p-1.5 h-fit">
            {categoryTitle}
          </div>

          {selectedTitle === categoryTitle ? (
            <div
              className={`w-3 h-3 self-center rounded-full bg-btnOrange pl-2`}
            ></div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MySidebarCategory;
