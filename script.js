// const first = () => {
//   console.log("first");
//   second();
// };

// const second = () => {
//   setTimeout(() => {
//     console.log("second");
//   }, 2000);

//   third();
// };

// const third = () => {
//   console.log("third");
// };

// first();
/* 
readyState :
0:request not initialized
1:server connection estabilished
2:request received
3:processing request
4:request finished and response is ready


status:
200:"OK"
403:"FORBIDDEN"
404:"NOT FOUND"

*/
var xhr = new XMLHttpRequest();

//console.log(xhr);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.onprogress = function () {
  console.log("on progress");
};
xhr.open("GET", "msg.txt", true); // eger burayi false yaparsak burda islem bloklanir.

// yani once msg.txt in icini gosterir sonra Hello yu gosterir
xhr.send();

console.log("Hello");
