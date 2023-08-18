// สมมุติว่าเราเกิด วัน1 เดือน1 ปี1998
// นับอายุ 31 เดือน 12 ปี 2020

// function age(params) {
    
// }

const age = (num) => {
    num = Number(num)
    yearToDay = 365
    years = 0
    day = 0
    years = 2020 - num
    day = years * yearToDay

    return day

}

console.log(age(1999))