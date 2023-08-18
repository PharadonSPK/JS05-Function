let name = 'John';
function sayHi() {
  alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); 
// เพราะกำค่าให้เนมใหม่  ทำให้เนม กลายเป็น pete
// Hi, Pete