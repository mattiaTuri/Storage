export const GetCurrentDate = () => {
    const today: Date = new Date(); 

    const day: number = today.getDate();
    const dayOfTheWeek: string = today.toLocaleString("en", {weekday:"long"})
    const month: string = today.toLocaleString("en", {month:"long"})

    return {day, dayOfTheWeek, month}
}
