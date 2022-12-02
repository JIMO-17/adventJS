const year = 2022
const holidays = ['01/06', '04/01', '12/25']

function countHours(year, holidays) {
    const validDays = [1, 2, 3, 4, 5];
  
    return holidays
      .filter(holiday => validDays.includes(new Date(`${year}/${holiday}`).getDay()))
      .reduce((acc, cur) => acc + 2, 0)
}

countHours(year, holidays) 