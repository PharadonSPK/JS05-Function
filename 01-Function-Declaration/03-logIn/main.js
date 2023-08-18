//Define
function login(username, password) {
    if (username === 'admin' && password === 'P@ssw0rd')
    alert ('login สำเร็จ');
 else {
    alert ('login ไม่สำเร็จ')
 }
}

let username = prompt('enter username')
let password = prompt('enter P@ssw0rd')

   //call 
   login("admin", "P@ssw0rd" ) 
