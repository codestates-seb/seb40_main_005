import CalendarContainer from "./CalendarContainer";
import CalendarNav from "./CalendarNav";

const CalendarPageLayout = () => {
  return (
    <>
      <div className="flex flex-col-reverse h-screen lg:flex-row bg-bgGray">
        <section className="w-1/6 h-full border-2 lg:block">Sidebar</section>

        <div className="w-full p-4 lg:pr-20">
          <CalendarNav />
          <CalendarContainer></CalendarContainer>
        </div>
      </div>
    </>
  );
};

export default CalendarPageLayout;
