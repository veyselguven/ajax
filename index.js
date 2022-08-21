document.getElementById("index").addEventListener("click", () => {
  const data = {
    userId: 10,
    title: "yeni guncellenmis title",
    body: "lorin upsim",
  };
  //   const xhr = new XMLHttpRequest();
  //   // console.log(xhr);
  //   xhr.onload = function () {
  //     if (this.status === 201) {
  //       console.log(this.responseText);
  //     }
  //   };
  //   xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  //   xhr.setRequestHeader("Content-type", "application/json");
  //   xhr.send(JSON.stringify(data));
  //   const xhr = new XMLHttpRequest();
  //   // console.log(xhr);
  //   xhr.onload = function () {
  //     if (this.status === 200) {
  //       console.log(this.responseText);
  //     }
  //   };
  //   xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/93");
  //   xhr.setRequestHeader("Content-type", "application/json");
  //   xhr.send(JSON.stringify(data));
  const xhr = new XMLHttpRequest();
  // console.log(xhr);
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/195");
  //xhr.setRequestHeader("Content-type", "application/json"); // bunuda silebilirz bisey yollamiyoruz
  xhr.send(); // Data yollamaya gerek yok
});
