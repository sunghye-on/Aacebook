console.log("events JS");
// 이벤트들을 처리해준다.
const ad_box = document.querySelector("#ad_box");
const ad_top = document.querySelector("#ad_top");
const contents_box = document.querySelector(".contents_box");
// 스크롤 이벤트에 관한 함수
function scroll() {
  let scrollHeghit = pageYOffset + window.innerHeight;
  let documentHeghit = document.body.scrollHeight;

  console.log(scrollHeghit, documentHeghit);

  if (pageYOffset >= 20) {
    ad_box.classList.add("on");
    ad_top.classList.add("on");
  } else {
    ad_box.classList.remove("on");
    ad_top.classList.remove("on");
  }

  if (scrollHeghit + 3 >= documentHeghit) {
    let page = document.querySelector("#page").value;
    document.querySelector("#page").value = parseInt(page) + 1;

    callPostAjax(page);

    if (page > 20) {
      return;
    }
  }
}
function callPostAjax(page) {
  if (page > 20) {
    return;
  }

  console.log("dmld");
  $.ajax({
    type: "post",
    url: "post.html",
    data: {
      page,
    },
    dataType: "html",
    success: addMorePost,
    onerror: function () {
      alert("error");
    },
  });
}
function addMorePost(data) {
  contents_box.insertAdjacentHTML("beforeend", data);
}
window.addEventListener("scroll", scroll);
