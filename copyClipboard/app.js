let copyBtn = document.querySelector(".copyBtn");

copyBtn.addEventListener("click", function () {
  let copyText = document.querySelector(".bootstrapLink").textContent;
  navigator.clipboard.writeText(copyText);
  this.textContent = "Copied";
  this.classList.add("copied");
  setTimeout(() => {
    this.textContent = "Copy";
    this.classList.remove("copied");
    this.blur()
  }, 2000);
});
