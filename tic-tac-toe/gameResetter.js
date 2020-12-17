const gameResetter = () => {
  document.querySelector(".holder").innerHTML = `
    <div class="top d-flex">
    <div class="area d-flex justify-content-center align-items-center" id="box1"></div>
    <div class="area d-flex justify-content-center align-items-center" id="box2"></div>
    <div class="area d-flex justify-content-center align-items-center" id="box3"></div>
  </div>
  <div class="middle d-flex">
    <div class="area d-flex justify-content-center align-items-center" id="box4"></div>
    <div class="area d-flex justify-content-center align-items-center" id="box5"></div>
    <div class="area d-flex justify-content-center align-items-center" id="box6"></div>
  </div>
  <div class="bottom d-flex">
    <div class="area d-flex justify-content-center align-items-center" id="box7"></div>
    <div class="area d-flex justify-content-center align-items-center" id="box8"></div>
    <div class="area d-flex justify-content-center align-items-center" id="box9"></div>
  </div>
  `;
};

export { gameResetter };
