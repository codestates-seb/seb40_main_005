import BoardModalContainer from "./BoardModalContainer";
import Search from "./Search";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../recoil/calendarAtom";
import useGetAllUsers from "../hooks/user/useGetAllUsers";
import ShareNoticeContainer from "./ShareNoticeContainer";

// import useGetTagState from "../hooks/calendar/useGetTagState";

interface idType {
  id: string;
}

interface ShareProps {
  changeShare: (share: string) => void;
}
// interface TagState {
//   id: string;
//   year: string;
//   month: string;
//   day: string;
// }

const AddShareContainer = ({ changeShare }: ShareProps) => {
  const [open, setOpen] = useRecoilState(modalOpenState);

  const [input, setInput] = useState<string>("");
  const [categoryList, setCategoryList] = useState<Array<idType>>([]);

  const [tagList, setTagList] = useState<Array<idType>>([]);
  const [isNotEmpty, setisNotEmpty] = useState<boolean>(false);
  const [searchTag, setsearchTag] = useState<string>("");

  const { data: allUsers, refetch: allUsersRefetch } = useGetAllUsers(input);

  const Tagging = (e: any) => {
    allUsersRefetch();

    const userId = e.target.value;

    setsearchTag(userId);

    const newTagList = tagList;
    newTagList.push({ id: e.target.value });
    setTagList(newTagList);

    setInput("");
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

    let sendtags: string = "";

    for (let i = 0; i < tagList.length; i++) {
      if (i === tagList.length - 1) {
        sendtags += tagList[i].id;
      } else {
        sendtags += tagList[i].id + ",";
      }
    }

    changeShare(sendtags);
  }, [allUsers]);

  const inputChange = async (e: any) => {
    const inputValue = e.target.value;
    if (inputValue !== "") {
      await setInput(inputValue);
      await allUsersRefetch();
    } else {
      setisNotEmpty(false);
      setInput("");
    }
  };

  useEffect(() => {
    if (open === false) {
      setTagList([]);
      changeShare("");
      setInput("");
    }
  }, [open]);

  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-row w-full h-fit justify-between items-center p-0.5">
          <div className="relative inline-flex items-start w-full h-fit flex-rap">
            <div className="flex w-fit h-fit ">
              <Search />
            </div>
            <div className="flex flex-col w-full pl-2 h-fit flex-rapo ">
              <input
                type="text"
                value={input}
                placeholder="공유하고 싶은 사람을 검색하세요!"
                className="w-full p-1 ml-1 text-sm text-left text-gray-700 rounded-md outline-none font-SCDream3 md:text-sm lg:text-sm"
                onChange={inputChange}
              />

              <div className="flex flex-row flex-wrap items-baseline w-full h-full">
                {tagList.map((tagItem, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => deleteTagItem(tagItem.id)}
                      className="inline-flex justify-center h-full pl-2 pr-3 mb-2 mr-2 text-white rounded-full cursor-pointer pm-2 w-fit hover:bg-red-400 bg-btnOrange"
                    >
                      <p className="pb-1">{tagItem.id}</p>
                      <button className="text-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  );
                })}
                {tagList.length !== 0 ? (
                  <p className="text-xs text-gray-700 font-SCDream3 min-w-fit">
                    님과 함께합니다
                  </p>
                ) : null}
              </div>

              <div
                className={`w-full ${isNotEmpty && input ? null : "hidden"}`}
                // className={`pl-2 w-full h-fit max-h-28 flex flex-col flex-rap ${
                //   tagList.length === 0 ? null : "overflow-x-auto "
                // }`}
                role="menu"
              >
                <div className="flex flex-row flex-wrap items-baseline w-full h-full flex-rap ">
                  {categoryList.map((el: { id: string }) => {
                    return (
                      <button
                        key={el.id}
                        className="inline-flex justify-center h-full pb-1 pl-2 pr-3 my-1 mr-5 text-white rounded-full cursor-pointer pm-3 w-fit hover:bg-btnOrange bg-underbar "
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
