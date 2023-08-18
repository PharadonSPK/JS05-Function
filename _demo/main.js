
//ไม่รู้ๆ
// function soundofbird() {
//   console.log('เสียงงง นกกรงหัวจุกมันริก');
//   console.log('จุก');
//   console.log('กริ๊ก ๆๆๆๆๆๆ');
// }

// soundofbird();
// soundofbird();
// soundofbird();
  
// function isprime () {

// }

// การเขียนฟังก์ชั่นมี2 แบบ

// 1 Fuction Declaration / name function กำหนดชื่อ
// 1 Fuction Expression / มักจะถูกเขียนในรูแของ anonimous function

// function asy hi () {}

//****การใช้งาน
// 1ฟังก์ชั่นต้องปะกาศ => กำหนดชื่อ; input
// 2 เรียกใช้งาน
//  */
// Define
//ข้อ1
// function sayhi (name) {
//     console.log('Hello ${name} ${lastname}');
// }

// // call
// sayhi("John" , "weak");
// sayhi("Adam" , "Smith");

// // return ค่า 
// // add(5,6) คือ ผลลัพธ์ที่ได้จากการรันฟังชั่นจนเสร็จ,function result ,
// function add(x,y) {
//     let result = x + y;
//     return result;
// }

// // กำหนดตัวแปร
// let r = add(5,6);
// console.log(add(5,6));


//ข้อ2
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }else {
        return false;
        //ห้ามreturn หรือ console ซ้อนกัน หรือ อยู่ด้านหลัง
    }
}
console.log(isEven(5));

//function ทำไรได้
// Declare ปะกาศ
// Params รับ input
// Call กำหนด แล้วเรียก
//Return รับฟังก์ชั่น

// Function Expression คือการ assign ค่า function ให้กับ valable
// let a = 5 * 2 + 7;

// single valut 7 / พิมพ์แล้วคอมตอบกลับ 
// combine expression 7+2 / เครื่องหมายบวก
// FN result : <Expression> / ผลลัพธ์


//ข้อ3
let myfunction = add;
let z = console.log;
console.log(myfunction(5,2));
z('hi');

const sayhello = function (name) {
    console.log('hi' + 'name');
}
sayhello('expression');

// Declare // function add () {}
// expression /1 let add = function () {}
// expression /2 let add = () => {}


// ย่อ syntax
// แบบ1 / const minus = (a,b) => {
//     return a - b;
// }

// แบบ2 / const minus = (a,b) => a - b;

// แบบ3 / const minustwo = a => a - 2;