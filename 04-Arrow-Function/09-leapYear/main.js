// ปีหาร100 ลงตัว false ไม่ป็น leap years
// ปีหาร400 ลงตัว true เป็น leap years

// isleapyear : year => Boolean

// const isleapyear (year) => {
//     if (year % 4 === 0 && year % 100 != 0) {
//         return true;
//     } else if (year % 100 === 0 && year % 400 !=0) {
//         return false;
//     } else if (year % 400 == 0) {
//         return true;
//     }

//     }

// สอง
//     if (year % 400 == 0) {
//         return true;
//     } 
//     if  (year % 100 == 0) {
//         return false;
//     }
//     if (year % 4 === 0) {
//         return true;
//     }
//     return false;

แบบ4
    if (year % 400,4 ===0) {

        return true;
    }
if (year % 100 == 0) {
    return false;
}

