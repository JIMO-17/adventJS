const year = 2022
const holidays = ['01/06', '04/01', '12/25']

function countHours(year, holidays) {
    const validDays = [1, 2, 3, 4, 5];
    let hours = 0;
  
    holidays
      .map(holiday => new Date(`${year}/${holiday}`).getDay())
      .filter(hour => validDays.includes(hour))
      .map((c) => hours+=2)

    return hours
}

countHours(year, holidays) 