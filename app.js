let grandParent = document.getElementById("grandParent");
// let parent = document.getElementById("parent");
// let child = document.getElementById("child");
grandParent.addEventListener("click", (event) => {
  if (event.target.id === "child") {
    console.log("child clicked");
  } else if (event.target.id === "parent") {
    console.log("parent clicked");
  }
  if (event.target.id === "grandParent") {
    console.log("grandParent clicked");
  }
});

let sam = "Sumit Dattatray Patil";

let resp = {};
for (i of sam) {
  resp[i] = resp[i] ? resp[i] + 1 : 1;
}
// console.log(resp["a"])

let s = 0;
for (let i = 0; i < sam.length; i++) {
  if (sam[i] === "a") {
    s++;
  }
}
console.log(s)
