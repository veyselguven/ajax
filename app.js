console.log("naber");

// request
// response

/* 
// readyState                          readyStatus
0 istek yapilmadi     
1 baglanti basarili                =>       0
2 istek alindi                     =>       200
3 istek alindi ve islenmeye baslandi   =>  200
4 response hazir                       =>  200
*/
// onreadystatechange -> yukaridaki her bir deger degistiginde calisir

//onload sadece 4 numara degistiginde calisir

document.querySelector("button").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  //console.log(xhr); // XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
  //console.log(xhr.readyState);
  // burda  post kullanicaksak send(data) ile birlikte bir veri gondermemiz lazim
  // const data = { name: "veysel", surname: "basbaydar" };
  // xhr.open("POST", url);

  // xhr.onreadystatechange = function () {
  //   console.log(`${this.readyState} =>  ${this.status}`);
  // };
  xhr.onload = function () {
    // console.log(`${this.readyState} =>  ${this.status}`);
    // console.log(this.readyState); // 4
    if (this.status === 200) {
      //console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
      data.forEach((element) => {
        console.log(element);
      });
    }
  };
  //xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.open("GET", "./data.json");
  xhr.send();
});
