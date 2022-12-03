import client from "../../client/client";

interface Props {
  curMonth: string;
  curYear: string;
}

const getBoards = async ({ curMonth, curYear }: Props) => {
  return await client
    .get(`/boards?category=&month=${curMonth}&year=${curYear}`)
    .catch(err => console.log(err));
};

export default getBoards;
