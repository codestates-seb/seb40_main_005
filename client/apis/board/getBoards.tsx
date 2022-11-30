import client from "../../client/client";

interface Props {
  currMonth: number;
  currYear: number;
}

const getBoards = async ({ currMonth, currYear }: Props) => {
  return await client
    .get(`/boards?category=&month=${currMonth}&year=${currYear}`)
    .catch(err => console.log(err));
};

export default getBoards;
