let selected = [];
let allBox = document.querySelectorAll(".cover");
let attempt = 0;

[...allBox].map((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.style.opacity === "0") return;
    attempt++;
    if (attempt % 2 === 0) {
      document.querySelector("#counter").textContent = `Attempt: ${
        attempt / 2
      }`;
    }
    //
    isOver();
    e.target.style.opacity = "0";
    selected.push({
      name: e.target.previousElementSibling.alt,
      id: e.target.previousElementSibling.id,
    });
    if (selected.length === 2) {
      if (selected[0].name === selected[1].name) {
        selected = [];
      } else {
        setTimeout(() => {
          let firstBoxId = selected[0].id;
          let secondBoxId = selected[1].id;
          document.getElementById(
            `${firstBoxId}`
          ).nextElementSibling.style.opacity = "1";
          document.getElementById(
            `${secondBoxId}`
          ).nextElementSibling.style.opacity = "1";
          selected = [];
        }, 500);
      }
    }
    //tez tez basilarsa
    if (selected.length > 2) {
      selected.map((el) => {
        document.getElementById(`${el.id}`).nextElementSibling.style.opacity =
          "1";
      });
      selected = [];
    }
  });
});

function isOver() {
  let count = 0;
  let allCover = document.querySelectorAll(".cover");
  [...allCover].map((cover) => {
    cover.style.opacity === "0" ? count++ : (count += 0);
  });
  if (count >= 23) {
    setTimeout(() => {
      alert("Oyun bitdi!");
      location.reload();
    }, 500);
  }
}

window.onerror = function (message, url, lineNumber) {
  // maybe some handling?
  return true; // prevents browser error messages
};
