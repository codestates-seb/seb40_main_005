import BoardModalContainer from "./BoardModalContainer";
import Search from "./Search";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import useGetAllUsers from "../hooks/user/useGetAllUsers";

// interface UserTags {
//   id: string;
// }

interface idType {
  id: string;
}

const AddShareContainer = () => {
  const [input, setInput] = useState<string>("");

  const [categoryList, setCategoryList] = useState<Array<idType>>([]);

  const { data: allUsers, refetch: allUsersRefetch } = useGetAllUsers(input);
  useEffect(() => {
    allUsersRefetch();
    if (allUsers !== undefined) {
      const userData = allUsers.data;
      setCategoryList(userData);
    }
  }, []);
  console.log(categoryList);

  const [tagItem, setTagItem] = useState<string>("");
  const [tagList, setTagList] = useState<Array<idType>>([]);
  const [isNotEmpty, setisNotEmpty] = useState<boolean>(false);
  const [searchTag, setsearchTag] = useState<string>("");
  // const [tagDummy, settagDummy] = useState(allUsers.data);

  // const Tagging = (e: any) => {
  //   allUsersRefetch();

  //   setsearchTag(e.target.value);

  //   const newTagList = tagList;
  //   newTagList.push({ id: e.target.value });
  //   setTagList(newTagList);
  //   setTagItem("");
  // };

  // // // const submitTagItem = () => {
  // // //   let updatedTagList = tagList.map(data => ({ ...data, searchTag }));
  // // //   const uniqueArr = updatedTagList.filter((element, index) => {
  // // //     return updatedTagList.indexOf(element) === index;
  // // //   });
  // // //   setTagList(uniqueArr);
  // // //   setTagItem("");
  // // // };

  // // const deleteTagItem = (e: any) => {
  // //   // const deleteTagItem = e.target.parentElement.firstChild.innerText;
  // //   // const deleteTagItem = e.target.innerText;
  // //   // console.log(deleteTagItem);
  // //   const filteredTagList = tagList.filter(tag => tag.id !== tag.id);
  // //   // console.log(filteredTagList);
  // //   setTagList(filteredTagList);
  // //   // setTagList.pop();
  // //   // console.log(filteredTagList);
  // //   // setTagList(tagList.filter(tag => tag.categoryTitle !== tag.categoryTitle));

  // //   console.log("삭제");
  // // };

  // useEffect(() => {
  //   allUsersRefetch();
  //   if (allUsers !== undefined) {
  //     const userData = allUsers.data;

  //     setCategoryList(userData);

  //     if (tagItem !== "") {
  //       setisNotEmpty(true);
  //     } else {
  //       setisNotEmpty(false);
  //     }
  //     const filterdUserTags = userData.data.filter(
  //       (x: { id: string | string[] }) => x.id.includes(tagItem),
  //     );

  //     const filteredTagLists = filterdUserTags
  //       .map((el: any) => el.categoryTitle)
  //       .filter((el: any) => !tagList.map(el => el.id).includes(el))
  //       .map((el: any) => ({ categoryTitle: el }));

  //     // settagDummy(filteredTagLists);
  //   }
  // }, [tagItem]);

  const inputChange = () => {
    allUsersRefetch();
    if (allUsers !== undefined) {
      const userData = allUsers.data;
    }
  };

  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-row w-full h-fit justify-between items-center p-0.5">
          <div className=" w-full  inline-flex relative items-start">
            <div className="w-fit h-fit flex ">
              <Search />
            </div>
            <div className="pl-2 w-full h-full flex flex-col">
              <div className="w-full h-full flex  flex-row">
                {tagList.map(tagItem => {
                  return (
                    <div className="mr-5 text-white pr-3 pl-2 pm-3 cursor-pointer inline-flex justify-center w-fit h-full bg-btnOrange rounded-full">
                      <p>{tagItem.id}</p>
                      <button
                        // onClick={() => deleteTagItem(tagItem.id)}
                        className=" pl-2 text-lg"
                      >
                        x
                      </button>
                    </div>
                  );
                })}
              </div>
              <input
                type="text"
                placeholder="공유하고 싶은 사람을 검색하세요!"
                className="ml-1 mt-2 w-full font-SCDream3 text-left text-sm md:text-sm lg:text-sm p-1 rounded-md text-gray-700 outline-none"
                onChange={inputChange}
                value={tagItem}
              />
              <div
                className={`w-full ${isNotEmpty ? null : "hidden"}`}
                role="menu"
              >
                <div className=""></div>
                <div className="">
                  {/* {userData.map((el: { id: string }) => {
                    return (
                      <button
                        className="mr-5 text-white pr-3 pl-2 pm-3 cursor-pointer inline-flex justify-center w-fit h-full bg-btnOrange rounded-full "
                        onClick={Tagging}
                        value={el.id}
                      >
                        {el.id}
                      </button>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </BoardModalContainer>
    </>
  );
};

export default AddShareContainer;
