import dateFns from "date-fns";

const Workshop = () => {
  const list = [
    {
      id: "1001",
      title: "UX/UI Design Introduction",
      speaker: "Ms Julia",
      date: 4,
      time: "02pm - 04pm",
      startTime: "14:00"
    },
    {
      id: "1002",
      title: "UX Beginners: Ideation & Discovery",
      speaker: "Mr John Smith",
      date: 19,
      time: "1pm to 4pm",
      startTime: "13:00"
    }
  ];

  return list;
};

const Talk = () => {
  const list = [
    {
      id: "1003",
      title: "Welcome to GovTech design team",
      speaker: "Mr Frank",
      date: 4,
      time: "10am - 12pm",
      startTime: "10:00"
    },
    {
      id: "1004",
      title: "UX Sharing: Devising a strategy",
      speaker: "Edison Chen, Gov Tech",
      date: 19,
      time: "5pm to 7pm",
      startTime: "17:00"
    }
  ];

  return list;
};

export const calendarDate = daysLength => {
  const days = [daysLength];
  for (let i = 0; i < daysLength; i++) {
    days[i] = {
      selected: false,
      workshop: [],
      talk: []
    };
  }

  return days;
};

export const generateSelectedDate = (currMonth, selectedDate) => {
  if (currMonth === selectedDate) {
    return dateFns.format(selectedDate, "DD");
  } else {
    return null;
  }
};

export const generateEventDates = calendarDates => {
  let Workshops = Workshop();
  let Talks = Talk();

  // find all workshop/talk events and map using the id to the relavant dates
  for (let i = 0; i < Workshops.length; i++) {
    for (let j = 0; j < calendarDates.length; j++) {
      if (Workshops[i].date === j + 1) {
        calendarDates[j].workshop.push(Workshops[i].id);
      }
    }
  }

  for (let i = 0; i < Talks.length; i++) {
    for (let j = 0; j < calendarDates.length; j++) {
      if (Talks[i].date === j + 1) {
        calendarDates[j].talk.push(Talks[i].id);
      }
    }
  }

  return calendarDates;
};

export const generateDates = currentMonth => {
  // use the date-fns module to reduce the lines of code to generate the dates for the calendar component
  const currMonthStart = dateFns.startOfMonth(currentMonth);
  const dates = [];
  const dateFormat = "DD";
  const currMonthEnd = dateFns.endOfMonth(currMonthStart);
  const startDate = dateFns.startOfWeek(currMonthStart);
  const endDate = dateFns.endOfWeek(currMonthEnd);

  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    formattedDate = dateFns.format(day, dateFormat);
    dates.push(formattedDate);
    day = dateFns.addDays(day, 1);
  }

  return dates;
};

const compare = (a, b) => {
  const scoreA = a.startTime;
  const scoreB = b.startTime;

  let comparison = 0;
  if (scoreA > scoreB) {
    comparison = 1;
  } else if (scoreA < scoreB) {
    comparison = -1;
  }
  return comparison;
};

const miliseconds = (hrs, min) => {
  return (hrs * 60 * 60 + min * 60) * 1000;
};

const getWorkshopDetails = id => {
  const workshops = Workshop();
  const details = {
    short: null,
    title: null,
    startTime: null,
    type: "workshop",
    time: null,
    speaker: null
  };
  let store = null;

  console.log("id", id);
  for (let i = 0; i < workshops.length; i++) {
    console.log("id2", workshops[i].id);
    if (workshops[i].id === id) {
      store = workshops[i].title.substring(0, 12);
      details.short = store;
      details.startTime = workshops[i].startTime;
      details.time = workshops[i].time;
      details.title = workshops[i].title;
      details.speaker = workshops[i].speaker;
      console.log("getWorkshop", details);
      return details;
    }
  }
};

const getTalkDetails = id => {
  const talks = Talk();
  const details = {
    short: null,
    title: null,
    startTime: null,
    type: "talk",
    time: null,
    speaker: null
  };
  let store = null;

  console.log("id", id);
  for (let i = 0; i < talks.length; i++) {
    if (talks[i].id === id) {
      console.log("id2", talks[i].id);
      store = talks[i].title.substring(0, 10);
      details.short = store;
      details.startTime = talks[i].startTime;
      details.time = talks[i].time;
      details.title = talks[i].title;
      details.speaker = talks[i].speaker;
      console.log("getTalk", details);
      return details;
    }
  }
};

const getWorkshop = workshopIds => {
  if (workshopIds.length === 0) {
    //console.log("Workshop", workshopIds.length);
    return null;
  }
  const workshop = [];
  for (let i = 0; i < workshopIds.length; i++) {
    workshop.push(getWorkshopDetails(workshopIds[i]));
  }
  return workshop;
};

const getTalk = talkIds => {
  if (talkIds.length === 0) {
    //console.log("Talk", talkIds.length);
    return null;
  }
  const talk = [];
  for (let i = 0; i < talkIds.length; i++) {
    talk.push(getTalkDetails(talkIds[i]));
  }
  return talk;
};

export const sortEvent = (workshopIds, talkIds) => {
  const workshops = getWorkshop(workshopIds);
  const talks = getTalk(talkIds);
  console.log(workshops);
  console.log(talks);
  if (workshops !== null || talks !== null) {
    let events = [...workshops, ...talks];
    let time, hour, minit;

    for (let i = 0; i < events.length; i++) {
      time = events[i].startTime.split(":");
      hour = time[0];
      minit = time[1];
      events[i].startTime = miliseconds(hour, minit);
    }
    events.sort(compare);
    return events;
  } else {
    return null;
  }
};
