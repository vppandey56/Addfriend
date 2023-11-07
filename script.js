var statuss = document.querySelector("h5");
var bt = document.querySelector("#add");
var rem = document.querySelector("#remove");

bt.addEventListener("click", function () {
  statuss.innerHTML = "Friend";
  bt.innerHTML = "Message";
  statuss.style.color = "green";
});
rem.addEventListener("click", function () {
  statuss.innerHTML = "Stranger";
  bt.innerHTML = "Add Friend";
  statuss.style.color = "red";
});
