import client from "../../client/client";

/**
 * @author yeowool
 * @description 아이디, 년도, 월, 일을 props로 받아서 태그 가능 여부를 boolean으로 return
 **/

interface Props {
  id: string;
  year: string;
  month: string;
  day: string;
}

const getTagState = async ({ id, year, month, day }: Props) => {
  return await client
    .get(`/tags/count/${id}/${year}/${month}/${day}`)
    .catch(err => console.log(err));
};

export default getTagState;
