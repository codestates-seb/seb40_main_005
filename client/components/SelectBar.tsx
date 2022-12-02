import React, { useState, useEffect } from "react";
import useGetCategoryTitie from "../hooks/calendar/useGetCategory";

interface CategoryTitle {
  categoryTitle: string;
}

interface CategoryType {
  setCategory: (category: string) => void;
}

const SelectBar = ({ setCategory }: CategoryType) => {
  const [custom, setCustom] = useState<boolean>(false);
  const [select, isSelect] = useState<string>("");
  const [categoryList, setCategoryList] = useState<Array<CategoryTitle>>([]);

  const { data: categoryTitie, refetch: categoryRefetch } =
    useGetCategoryTitie();
  const getCtategoryClick = () => {
    categoryRefetch();
    if (categoryTitie !== undefined) {
      const category = categoryTitie.data;
      setCategoryList(category);
    }
  };
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCategory(value);
  };

  const selectedControl = (e: any) => {
    if (!custom) {
      setCustom(true);
    } else if (custom) {
      setCustom(false);
    }
  };
  const pressEnter = (e: any) => {
    if (e.keyCode == 13) {
      const value = e.target.value;
      setCategory(value);
    }
  };

  return (
    <>
      {custom ? (
        <div className="flex flex-row justify-end text-sm SCDream3">
          <input
            type="text"
            id="change"
            className=" w-4/6 lg:w-[9rem] "
            placeholder="입력 후 Enter"
            onKeyDown={pressEnter}
          ></input>
          <button
            onClick={selectedControl}
            className="h-6 px-1.5 bg-btnOrange SCDream7 text-[0.8rem]  lg:text-sm hover:bg-lightOrange text-white font-bold lg:py-0.5 lg:px-5 rounded-md"
          >
            선택
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-end text-sm ">
          <select
            id="select-box"
            onClick={getCtategoryClick}
            onChange={selectChange}
            className=""
          >
            <option className="SCDream3">나의 카테고리</option>
            {categoryList.map(option => (
              <option
                className="SCDream3"
                key={option.categoryTitle}
                value={option.categoryTitle}
              >
                {option.categoryTitle}
              </option>
            ))}
          </select>
          <button
            className="h-6 px-1.5 bg-btnOrange SCDream7 text-[0.8rem]  lg:text-sm hover:bg-lightOrange text-white font-bold lg:py-0.5 lg:px-4 rounded-md"
            onClick={selectedControl}
          >
            입력
          </button>
        </div>
      )}
    </>
  );
};

export default SelectBar;
