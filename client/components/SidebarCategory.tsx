import React, { useEffect } from "react";
// import dummy from "../dummy";

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  // dummy: Array<0>;
  // category: string;
  // setCatecory: string;
}

useEffect;

const handleTagClick = () => {
  console.log("카테고리클릭");
  const pointTag = document.getElementById("point");
  // pointTag.style.display = "none";
};

// const SidebarCategory = ({ onClick, children }: Props) => {
const SidebarCategory = ({ children }: Props) => {
  return (
    <>
      <div
        className="flex mb-3 lg:mb-5 rounded-md justify-between w-full h-10  cursor-pointer bg-white"
        onClick={handleTagClick}
      >
        <div className="w-3 h-full bg-btnOrange rounded-l-md"></div>
        <div className="w-4/6 p-2 h-fit mt-1">{children}</div>
        <div className="flex pr-5 justify-center items-center w-1/6 h-full">
          <div
            id="point"
            className="w-4 h-4 justify-items-end bg-btnOrange aspect-square rounded-full"
          ></div>
        </div>
      </div>
    </>
  );
};

export default SidebarCategory;

// const CategoryFilter = ({ dummy, category, setCatecory }) => {
//   const makeCategories = () => {
//     if (dummy.length === 0) return;

//     return dummy.map((item: any, idx: Number) => (
//       <div
//         key={idx}
//         className={
//           item.value === category ? "category-child selected" : "category-child"
//         }
//         onClick={() => {
//           setCatecory(item.value);
//           localStorage.setItem(LS_KEY_CATEGORY, item.value);
//         }}
//       >
//         {item.name}
//       </div>
//     ));
//   };

// const SidebarCategory = ({
//   onClick,
//   children,
//   dummy,
//   category,
//   setCatecory,
// }: Props) => {
//   const makeCategories = () => {
//     if (dummy.length === 0) return;

//     return dummy.map((item: any, idx: Number) => (
//       <div
//         key={idx}
//         className={item.value === category ? "bg-red" : "bg-block"}
//         onClick={() => {
//           setCatecory(item.value);
//           localStorage.setItem(LS_KEY_CATEGORY, item.value);
//         }}
//       >
//         {item.name}
//       </div>
//     ));
//   };

//   return (
//     <>
//       <div>
//         <div className="category-set">{makeCategories()}</div>
//       </div>
//     </>
//   );
// };

// export default SidebarCategory;
