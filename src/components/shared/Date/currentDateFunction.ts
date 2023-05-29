
export const GetCurrentDate = () => {
    const today: Date = new Date(); 

    const day: number = today.getDate();
    const month: string = today.toLocaleString("en", {month:"long"})

    return {day, month}
}
