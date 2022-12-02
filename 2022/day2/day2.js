const year = 2022
const holidays = ['01/06', '04/01', '12/25']

function countHours(year, holidays) {
    const validDays = [1, 2, 3, 4, 5];
    let hours_ = holidays.map(holiday => new Date(`${year}/${holiday}`).getDay());

    const hours = hours_.filter(hour => validDays.includes(hour));
    return hours.reduce((acc, cur) => acc + 2, 0);
}

countHours(year, holidays) 