import MySidebarCategory from "./MySidebarCategory";
import { useRecoilState } from "recoil";
import { categorySelectTitle } from "../recoil/calendarAtom";

interface Props {
  onClick: () => void;
}

interface CategoryValue {
  mtCategory: string;
}

const CommerceSidebarToggle = ({ onClick }: Props) => {
  const myCategory = [
    {
      mtCategory: "테마",
    },
    {
      mtCategory: "앨범",
    },
  ];

  const [categoryTitle, setcategoryTitle] =
    useRecoilState<string>(categorySelectTitle);

  const renderNotices = () => {
    const categoryListArr: any[] = [];

    if (myCategory) {
      myCategory.map((data: CategoryValue, idx: number) => {
        categoryListArr?.push(
          <MySidebarCategory
            key={idx}
            categoryTitle={data.mtCategory}
            selectedTitle={categoryTitle}
            onClick={() => handleClick(data.mtCategory)}
          ></MySidebarCategory>,
        );
      });
    }

    return categoryListArr;
  };

  const handleClick = (title: string) => {
    setcategoryTitle(title);
  };

  return (
    <>
      <div className="z-50 p-3 pb-8 md:flex lg:hidden absolute h-full flex-col bg-white w-2/3 md:w-2/6 drop-shadow-lg right-0 flex justify-between">
        <div className="flex flex-col justify-between ">
          <div className="SCDream8 text-2xl  cursor-pointer" onClick={onClick}>
            x
          </div>
          <div className="relative flex justify-center w-full h-5 my-3">
            <div className="z-10 text-xl text-zinc-500 font-SCDream6 ">
              스토어
            </div>
            <div className="absolute w-24 h-2 top-[1.1rem]  md:w-[4rem] md:top-4 bg-mainOrange/40"></div>
          </div>
          <div className="grid w-full grid-cols-1 mt-5 text-sm lg:flex lg:flex-col h-fit lg:h-5/6 font-SCDream4">
            {renderNotices()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommerceSidebarToggle;
