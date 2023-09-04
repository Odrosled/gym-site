import { DaySchedule } from "../utils/schedule";
import ButtonBlack from "./ButtonBlack";

const ScheduleRow = ({ name, time, trainer }: DaySchedule) => {
  return (
    <div className="p-8 bg-gray-200 grid grid-cols-4 max-lg:flex max-lg:flex-col max-lg:text-center">
      <div className="flex flex-col gap-2">
        <p className="text-xs">Class Name</p>
        <div className="font-bold text-xl">{name}</div>
      </div>
      <div className="text-center flex flex-col gap-2">
        <p className="text-xs">Time</p>
        <div className="font-bold text-xl">{time}</div>
      </div>
      <div className="text-center flex flex-col gap-2">
        <p className="text-xs">Trainer</p>
        <div className="font-bold text-xl max-lg:mb-5">{trainer}</div>
      </div>
      <div className="flex justify-end items-center max-lg:mx-auto">
        <ButtonBlack text="Join Now" />
      </div>
    </div>
  );
};

export default ScheduleRow;
