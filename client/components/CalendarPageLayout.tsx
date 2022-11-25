import CalendarContainer from "./CalendarContainer";
import CalendarNav from "./CalendarNav";

const CalendarPageLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-bgGray">
        <section className="hidden w-1/6 h-full border-2">Sidebar</section>

        <div className="w-full p-4">
          <CalendarNav />
          <CalendarContainer></CalendarContainer>
        </div>
      </div>
    </>
  );
};

export default CalendarPageLayout;
