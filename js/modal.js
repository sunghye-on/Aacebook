console.log("modal JS");
// 모달을 클릭하면 해당 모달을 켜고 꺼준다.
function openModal(modalname) {
  console.log(modalname);
  document.get;
  $("#modal_content").fadeIn(150);
  $("." + modalname).fadeIn(150);

  let header = document.getElementById("header");
  header.style.display = "none";
}

$("#modal_content, .close").on("click", function () {
  $("#modal_content").fadeOut(150);
  $(".modal_content").fadeOut(150);

  let header = document.getElementById("header");
  header.style.display = "block";
});
