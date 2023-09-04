export interface DaySchedule {
  time: string;
  name: string;
  trainer: string;
}

export interface ISchedule {
  monday: DaySchedule[]
  tuesday: DaySchedule[]
  wednesday: DaySchedule[]
  thursday: DaySchedule[]
  friday: DaySchedule[]
  saturday: DaySchedule[]
  sunday: DaySchedule[]
}

export const scheduleDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const schedules:ISchedule = {
  monday: [
    {
      time: "9:00am - 10:00am",
      name: "Cycling",
      trainer: "Marco",
    },
    {
      time: "10:00am - 11:00am",
      name: "Body Building",
      trainer: "Tony",
    },
    {
      time: "11:00am - 12:00am",
      name: "Running",
      trainer: "Tony",
    },
    {
      time: "16:00am - 17:00pm",
      name: "Fitness",
      trainer: "Fanto",
    }
  ],
  tuesday: [
    {
      time: "9:00am - 10:00am",
      name: "Fitness",
      trainer: "Fanto",
    },
    {
      time: "10:00am - 11:00am",
      name: "Body Building",
      trainer: "Tony",
    },
    {
      time: "11:00am - 12:00am",
      name: "Running",
      trainer: "Tony",
    }
  ],
  wednesday: [
    {
      time: "9:00am - 10:00am",
      name: "Cycling",
      trainer: "Marco",
    },
    {
      time: "10:00am - 11:00am",
      name: "Body Building",
      trainer: "Tony",
    },
  ],
  thursday: [
    {
      time: "11:00am - 12:00am",
      name: "Running",
      trainer: "Tony",
    },
    {
      time: "16:00am - 17:00pm",
      name: "Fitness",
      trainer: "Fanto",
    }
  ],
  friday: [
    {
      time: "10:00am - 11:00am",
      name: "Body Building",
      trainer: "Tony",
    },
    {
      time: "11:00am - 12:00am",
      name: "Running",
      trainer: "Tony",
    },
    {
      time: "16:00am - 17:00pm",
      name: "Fitness",
      trainer: "Fanto",
    }
  ],
  saturday: [
    {
      time: "10:00am - 11:00am",
      name: "Body Building",
      trainer: "Tony",
    },
    {
      time: "11:00am - 12:00am",
      name: "Running",
      trainer: "Tony",
    },
  ],
  sunday: [
    {
      time: "10:00am - 11:00am",
      name: "Body Building",
      trainer: "Tony",
    },
  ],
};
