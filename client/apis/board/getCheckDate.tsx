import client from "../../client/client";

interface Props {
  realDay: number;
  realMonth: number;
  realYear: number;
}

const getCheckDate = async ({ realDay, realMonth, realYear }: Props) => {

  console.log(realDay, realMonth, realYear);
  return await client
    .get(`/boards/count?day=${realDay}&month=${realMonth}&year=${realYear}`)
    .catch(err => console.log(err));
};

export default getCheckDate;
