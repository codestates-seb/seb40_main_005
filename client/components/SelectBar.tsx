import React, { useState, useEffect } from "react";
import useGetCategoryTitie from "../hooks/calendar/useGetCategory";

interface CategoryTitle {
  categoryTitle: string;
}

interface CategoryType {
  category: string;
  setCategory: (category: string) => void;
  keyCode: (keyCode: Number) => void;
}

const SelectBar = ({ category, setCategory, keyCode }: CategoryType) => {
  const [custom, setCustom] = useState<boolean>(false);
  const [select, isSelect] = useState<string>("");
  const [categoryList, setCategoryList] = useState<Array<CategoryTitle>>([]);
  const [text, setText] = useState<string>("");

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
  // 키다운 시 넘겨주는 형태
  // const pressEnter = (e: any) => {
  //   const value = e.target.value;
  //   if (e.keyCode == 13) {
  //     setCategory(value);
  //     keyCode(e.keyCode);
  //     setText("");
  //   } else if (e.keyCode == 9) {
  //     setCategory(value);
  //     keyCode(e.keyCode);
  //     setText("");
  //   }
  // };
  const focusInput = (e: any) => {
    keyCode(e.keyCode);
  };
  const saveNewCategory = (e: any) => {
    const value = e.target.value;
    setCategory(value);
  };

  return (
    <>
      {custom ? (
        <div className="flex flex-row justify-end text-sm SCDream3">
          <button onClick={selectedControl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 mx-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </button>
          <input
            type="text"
            id="change"
            className=" w-3/6 text-right "
            placeholder="입력 후 Enter"
            // onKeyDown={pressEnter}
            value={category}
            onKeyDown={focusInput}
            onChange={saveNewCategory}
          ></input>
        </div>
      ) : (
        <div className="flex flex-row justify-end text-sm SCDream3">
          <button onClick={selectedControl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>

          <select
            id="select-box"
            onClick={getCtategoryClick}
            onChange={selectChange}
            className="w-5/6 "
          >
            <option className="SCDream3" selected>
              카테고리 선택
            </option>
            <option className="SCDream3" selected>
              전체
            </option>
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
        </div>
      )}
    </>
  );
};

export default SelectBar;
