import React, { useState, useEffect } from "react";
import useGetCategoryTitie from "../hooks/calendar/useGetCategory";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../recoil/calendarAtom";

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
  const [open, setOpen] = useRecoilState(modalOpenState);
  const [categoryList, setCategoryList] = useState<Array<CategoryTitle>>([]);

  const [user, setUser] = useState<string | null>("");

  useEffect(() => {
    if (window.localStorage) {
      const userId = localStorage?.getItem("memberId");
      setUser(userId);
    }
  }, [user]);

  const { data: categoryTitie, refetch: categoryRefetch } =
    useGetCategoryTitie();

  const getCtategoryClick = () => {
    categoryRefetch();

    const checkCategoryList = categoryTitie?.data;
    // console.log(checkCategoryList);
    // for (let i = 0; i < checkCategoryList.length; i++) {
    //   if (checkCategoryList[i].categoryTitle === user) {
    //     const userOptionTag = document.getElementById("option");
    //     userOptionTag!.innerHTML = "";
    //   }
    // }

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

  const focusInput = (e: any) => {
    keyCode(e.keyCode);
  };

  const saveNewCategory = (e: any) => {
    const value = e.target.value;
    if (value !== user) {
      setCategory(value);
    }
  };

  useEffect(() => {
    if (open === false) {
      setCustom(true);
    } else {
      setCustom(false);
    }
  }, [open]);

  return (
    <>
      {custom ? (
        <div className="flex flex-row justify-end text-sm SCDream3">
          <button onClick={selectedControl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </button>
          <input
            type="text"
            id="change"
            className=" w-[6.5rem]  text-right outline-none SCDream3"
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>

          <select
            id="select-box"
            onClick={getCtategoryClick}
            onChange={selectChange}
            className="bg-white px-1.5 outline-none SCDream3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full    "
          >
            <option
              id="selectOption"
              className="SCDream3 pr-1"
              defaultValue="카테고리 선택"
            >
              카테고리 선택
            </option>

            <option id="userOptionTag" className="SCDream3">
              {user}
            </option>
            {categoryList.map(option => (
              <option
                className="SCDream3 outline-none"
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
