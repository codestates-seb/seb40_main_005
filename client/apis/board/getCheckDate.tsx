import client from "../../client/client";

interface Props {
    day: string;
    month : string;
    year : string;
  }

const getCheckDate = async ({ day, month, year }: Props) => {

    let realDay = Number(day);
    let realMonth = Number(month);
    let realYear = Number(year);
  return await client
    .get(`/boards/count?day=${realDay}&month=${realMonth}&year=${realYear}`)
    .catch(err => console.log(err));
};

export default getCheckDate;
