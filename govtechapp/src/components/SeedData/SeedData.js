import uuidv4 from "uuid/v4";

export const Workshop = () => {
    const list = [
        {id: uuidv4(), title: "UX/UI Design Introduction", speaker: "Ms Julia", date: 4, time: "02pm - 04pm", startTime: "14:00"},
        {id: uuidv4(), title: "UX Beginners: Ideation & Discovery", speaker: "Mr John Smith", date: 19, time: "1pm to 4pm", startTime: "13:00"}
    ]; 

    return list;
}

export const Talk = () => {
    const list = [
        {id: uuidv4(), title: "Welcome to GovTech design team", speaker: "Mr Frank", date: 4, time: "10am - 12pm", startTime: "10:00"},
        {id: uuidv4(), title: "UX Sharing: Devising a strategy", speaker: "Edison Chen, Gov Tech", date: 19, time: "5pm to 7pm", startTime: "17:00"}
    ];

    return list;
}

export const calendarDate = daysLength => {
    const days = [daysLength];
    for(let i = 0; i < daysLength; i++){
       days[i] = {empty: false, active: false, selected: false, workshop: [], talk: []}; 
    }

    return days;
}