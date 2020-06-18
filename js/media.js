console.log("media JS");
// 현재 사용자의 윈도우 크기를 알아낸 뒤 높이값을 지정함
const friend_box = document.getElementById("friend_box");
function funcThisSize() {
  $("#friend_box").height(window.innerHeight);
}

$(function () {
  $(window).resize(funcThisSize);
  funcThisSize();
});
