import axios from "axios";
import client from "../../client/client";
import formClient from "../../client/formClient";
// import { boardItemState } from "../../recoil/calendarAtom";
// import { useRecoilState } from "recoil";

interface boardData {
  category: string;
  content: string;
  created: string;
  music: string;
  photo: any;
  tags: any;
  title: string;
  url: string;
  boardId: number | null;
}

const PatchBoardData = async ({
  category,
  content,
  created,
  music,
  photo,
  tags,
  title,
  url,
  boardId,
}: boardData) => {
  // const data = {
  //   category: category,
  //   content: content,
  //   created: created,
  //   music: music,
  //   photo: photo,
  //   tags: tags,
  //   title: title,
  //   url: url
  // };
  // const [boardData, setBoardData] = useRecoilState(boardItemState);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("music", music);
  formData.append("photo", photo);
  formData.append("tags", tags);
  formData.append("categoryTitle", category);
  formData.append("created", created);
  formData.append("url", url);

  //   const JsonData = JSON.stringify(data);
  //   const formValue = new FormData();
  //   formValue.append("file", JsonData);

  console.log(category);
  console.log(boardId);
  return await axios.patch(`/boards/${boardId}`, formData, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export default PatchBoardData;
