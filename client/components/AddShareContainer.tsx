import BoardModalContainer from "./BoardModalContainer";
import Search from "./Search";
import React, { useEffect, useState } from "react";
import { constSelector, useRecoilState } from "recoil";
import { pickDayState } from "../recoil/calendarAtom";
import useGetAllUsers from "../hooks/user/useGetAllUsers";

import useGetTagState from "../hooks/calendar/useGetTagState";

interface idType {
  id: string;
}

interface ShareProps {
  changeShare: (share: string) => void;
  share: string;
}
// interface TagState {
//   id: string;
//   year: string;
//   month: string;
//   day: string;
// }

const AddShareContainer = ({ share, changeShare }: ShareProps) => {
  const [date, setDate] = useRecoilState(pickDayState);

  const [input, setInput] = useState<string>("");
  const [categoryList, setCategoryList] = useState<Array<idType>>([]);
  const [tagItem, setTagItem] = useState<string>("");
  const [tagList, setTagList] = useState<Array<idType>>([]);
  const [isNotEmpty, setisNotEmpty] = useState<boolean>(false);
  const [searchTag, setsearchTag] = useState<string>("");
  const [tagDummy, settagDummy] = useState(categoryList);

  const { data: allUsers, refetch: allUsersRefetch } = useGetAllUsers(input);

  // const { data: tagState, refetch: tagStateRefetch } = useGetTagState();

  const Tagging = (e: any) => {
    allUsersRefetch();

    const userId = e.target.value;

    // if(searchTag in userId) {
    //   //인풋 들어왔을 때 유저아이디 있는지 확인 된 경우에만 api쏘가기
    //   tagStateRefetch()
    //   // let today = setDate.split("-")
    //   // let [today[0], today[1],today[2]] = [year, month, day]

    // } else if(!(searchTag in userId)) {

    // }

    setsearchTag(userId);
    // console.log("검색태그" + searchTag);
    const newTagList = tagList;
    newTagList.push({ id: e.target.value });
    setTagList(newTagList);

    if (allUsers !== undefined) {
      const userData = allUsers.data;

      if (tagItem !== "") {
        setisNotEmpty(true);
      } else {
        setisNotEmpty(false);
      }
      const filterdUserTags = userData.filter((x: { id: string }) =>
        x.id.includes(tagItem),
      );

      const filteredTagLists = filterdUserTags
        .map((el: any) => el.id)
        .filter((el: any) => !tagList.map(el => el.id).includes(el))
        .map((el: any) => ({ id: el }));

      settagDummy(filteredTagLists);
      // console.log(tagDummy);
    }
  };

  const deleteTagItem = (id: string) => {
    for (let i = 0; i < tagList.length; i++) {
      if (tagList[i].id === id) {
        setTagList(
          tagList.filter((element, index) => {
            return element.id !== id;
          }),
        );
      }
    }
  };

  useEffect(() => {
    if (allUsers !== undefined) {
      const userSearch = allUsers.data;

      const filterdUserTags = userSearch.filter((x: { id: string }) =>
        x.id.includes(input),
      );

      const filteredTagLists = filterdUserTags
        .map((el: any) => el.id)
        .filter((el: any) => !tagList.map(el => el.id).includes(el))
        .map((el: any) => ({ id: el }));

      setisNotEmpty(true);
      setCategoryList(filteredTagLists);
    }
  }, [allUsers]);

  const inputChange = async (e: any) => {
    const inputValue = e.target.value;
    if (inputValue !== "") {
      await setInput(inputValue);
      await allUsersRefetch();
    } else {
      setisNotEmpty(false);
    }
  };

  // const chekedTagState = () => {};

  let sendtags: string = "";
  for (let i = 0; i < tagList.length; i++) {
    sendtags += tagList[i].id + ",";
  }
  sendtags.replace(/,\s*$/, "");
  changeShare(sendtags);

  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-row w-full h-fit justify-between items-center p-0.5">
          <div className=" w-full  inline-flex relative items-start">
            <div className="w-fit h-fit flex ">
              <Search />
            </div>
            <div className="pl-2 w-full h-full max-h-28 flex flex-col overflow-auto">
              <input
                type="text"
                // value={share}
                placeholder="공유하고 싶은 사람을 검색하세요!"
                className="ml-1 w-full font-SCDream3 text-left text-sm md:text-sm lg:text-sm p-1 rounded-md text-gray-700 outline-none"
                onChange={inputChange}
              />

              <div className="w-full h-full flex  flex-row">
                {tagList.map(tagItem => {
                  return (
                    <div
                      onClick={() => deleteTagItem(tagItem.id)}
                      className="mr-5 text-white pr-3 pl-2 pm-3 cursor-pointer inline-flex justify-center w-fit h-full hover:bg-red-400 bg-btnOrange rounded-full"
                    >
                      <p>{tagItem.id}</p>
                      <button className=" pl-2 text-lg">x</button>
                    </div>
                  );
                })}
              </div>

              <div
                className={`w-full  ${isNotEmpty ? null : "hidden"}`}
                role="menu"
              >
                <div>
                  {categoryList.map((el: { id: string }) => {
                    return (
                      <button
                        key={el.id}
                        className="my-1 mr-5 text-white pr-3 pl-2 pm-3 cursor-pointer inline-flex justify-center w-fit h-full  hover:bg-btnOrange bg-underbar rounded-full "
                        onClick={Tagging}
                        value={el.id}
                      >
                        {el.id}
                      </button>
                    );
                  })}
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
