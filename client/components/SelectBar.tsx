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
      console.log(category);
      setCategoryList(category);
    }
  };
  // useEffect(() => {
  //   categoryRefetch();
  //   if (categoryTitie !== undefined) {
  //     // console.log(categoryTitie.data);
  //     const category = categoryTitie.data;
  //     console.log(category);
  //     setCategoryList(category);
  //   }
  // }, []);
  // console.log(categoryTitie);
  // event: React.ChangeEvent<HTMLSelectElement>
  const selectChange = (event: any) => {
    const value = event.target.value;
    if (select) {
      isSelect("");
      setCategory(value);
    } else if (!select) {
      setCategory(value);
    }
    // isSelect(value);
    // console.log(value);
    // category(value);
    console.log(select);
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
      // isSelect(value);
      // category(value);
      console.log(select);
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
            className="h-6 bg-btnOrange hover:bg-lightOrange text-white font-bold py-0.5 px-4 rounded-md"
          >
            선택
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-end text-sm SCDream3">
          <select
            id="select-box"
            onClick={getCtategoryClick}
            onChange={selectChange}
            className=""
          >
            <option>개인 카테고리</option>
            {categoryList.map(option => (
              <option key={option.categoryTitle} value={option.categoryTitle}>
                {option.categoryTitle}
              </option>
            ))}
          </select>
          <button
            className="h-6 bg-btnOrange hover:bg-lightOrange text-white font-bold py-0.5 px-4 rounded-md"
            onClick={selectedControl}
          >
            직접입력
          </button>
        </div>
      )}
    </>
  );
};

export default SelectBar;
