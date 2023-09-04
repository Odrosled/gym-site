import { Link, useLocation } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import { DaySchedule, scheduleDays, schedules } from "../utils/schedule";
import ScheduleRow from "../components/ScheduleRow";
import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const selectedDay = location.pathname.split("/").reverse()[0];
  // @ts-expect-error
  const daySchedule = schedules[selectedDay] as DaySchedule[];

  return (
    <>
      <TopBanner title="Schedule" />
      <div className="w-3/5 mx-auto my-32 flex flex-col gap-10 max-lg:my-10">
        <section className="flex justify-between max-lg:flex-col max-lg:text-center max-lg:gap-3">
          {scheduleDays.map((day) => {
            const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
            return (
              <Link to={`/schedule/${day}`}>
                <button className="border-2 px-8 py-2 rounded-full font-semibold text-sm hover:bg-[#f97316] hover:text-white focus:bg-[#f97316] focus:text-white duration-200">
                  {formattedDay}
                </button>
              </Link>
            );
          })}
        </section>
        <section className="flex flex-col gap-3">
          {daySchedule.map((schedule) => (
            <ScheduleRow {...schedule} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Schedule;
