// 각 컨테이너 변수

let con1 = document.querySelector(".con1"),
  con2 = document.querySelector(".con2"),
  con3 = document.querySelector(".con3"),
  con4 = document.querySelector(".con4"),
  con5 = document.querySelector(".con5");

// 헤더 클릭이벤트
let menuLi = document.querySelectorAll(".menu li");

for (let i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener("click", function () {
    if (i == 0) {
      window.scrollTo({ top: con1.offsetTop, behavior: "smooth" });
    } else if (i == 1) {
      window.scrollTo({ top: con2.offsetTop, behavior: "smooth" });
    } else if (i == 2) {
      window.scrollTo({ top: con3.offsetTop, behavior: "smooth" });
    } else if (i == 3) {
      window.scrollTo({ top: con4.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: con5.offsetTop, behavior: "smooth" });
    }
  });
}

// 모바일 메뉴 클릭 이벤트
$(".mo_menu li").click(function () {
  $(".mo_menu li").removeClass("on");
  $(this).addClass("on");
});

let mo_menuLi = document.querySelectorAll(".mo_menu li");

mo_menuLi[1].addEventListener("click", function () {
  window.scrollTo({ top: con1.offsetTop, behavior: "smooth" });
});
mo_menuLi[2].addEventListener("click", function () {
  window.scrollTo({ top: con2.offsetTop, behavior: "smooth" });
});
mo_menuLi[3].addEventListener("click", function () {
  window.scrollTo({ top: con3.offsetTop, behavior: "smooth" });
});
mo_menuLi[4].addEventListener("click", function () {
  window.scrollTo({ top: con4.offsetTop, behavior: "smooth" });
});
mo_menuLi[5].addEventListener("click", function () {
  window.scrollTo({ top: con5.offsetTop, behavior: "smooth" });
});

//모바일 메뉴바 클릭 이벤트
let toggle = 0;
$(".mo_menu_btn").click(function () {
  if (toggle == 0) {
    $(".mo_menu_btn").addClass("on");
    $(".mo_menu").addClass("on");
    toggle = 1;
  } else {
    $(".mo_menu_btn").removeClass("on");
    $(".mo_menu").removeClass("on");
    toggle = 0;
  }
});

// 비주얼 이벤트
$(function () {
  $(".visual_text p").addClass("on");
  $(".visual_text .puble").addClass("on");
  $(".comma").addClass("on");
});

//////////////////////////////////////////////////////////////

// 스크롤 이벤트 입니당
window.addEventListener("scroll", function () {
  //console.log(this.scrollY);

  // 헤더 스크롤 이벤트
  let headerMenu = document.querySelector(".menu_wrap");
  if (this.scrollY > 100) {
    headerMenu.classList.add("on");
  } else {
    headerMenu.classList.remove("on");
  }

  // 스크롤 시 헤더 메뉴 폰트색상 변화
  if (this.scrollY < con1.offsetTop) {
    for (let l = 0; l < menuLi.length; l++) {
      menuLi[l].classList.remove("on");
    }
  } else if (this.scrollY >= con1.offsetTop && this.scrollY < con2.offsetTop) {
    for (let l = 0; l < menuLi.length; l++) {
      menuLi[l].classList.remove("on");
      menuLi[0].classList.add("on");
    }
  } else if (this.scrollY >= con2.offsetTop && this.scrollY < con3.offsetTop) {
    for (let l = 0; l < menuLi.length; l++) {
      menuLi[l].classList.remove("on");
      menuLi[0].classList.remove("on");
      menuLi[1].classList.add("on");
    }
  } else if (this.scrollY >= con3.offsetTop && this.scrollY < con4.offsetTop) {
    for (let l = 0; l < menuLi.length; l++) {
      menuLi[l].classList.remove("on");
      menuLi[2].classList.add("on");
    }
  } else if (this.scrollY >= con4.offsetTop && this.scrollY < con5.offsetTop) {
    for (let l = 0; l < menuLi.length; l++) {
      menuLi[l].classList.remove("on");
      menuLi[3].classList.add("on");
    }
  } else if (this.scrollY >= con5.offsetTop) {
    for (let l = 0; l < menuLi.length; l++) {
      menuLi[l].classList.remove("on");
      menuLi[4].classList.add("on");
    }
  }

  //   컨테이너 1번(about) 스크롤 이벤트
  let svg = document.querySelectorAll(".cls-1");
  let commend = document.querySelector(".commend p");
  let intro = document.querySelectorAll(".intro span");
  let profile = document.querySelector(".profile");
  let h = con1.offsetTop;

  if (this.scrollY >= h - 500) {
    setTimeout(function () {
      commend.classList.add("on");
    }, 500);
    for (let i = 0; i < svg.length; i++) {
      setTimeout(function () {
        svg[i].classList.add("on");
      }, i * 150);
    }
    setTimeout(function () {
      for (let k = 0; k < intro.length; k++) {
        intro[k].classList.add("on");
      }
    }, 500);
    setTimeout(function () {
      profile.classList.add("on");
    }, 300);
  }

  //   컨테이너 2번(skill) 스크롤 이벤트
  let con2H2 = document.querySelector(".con2 h2");
  let Line1 = document.querySelectorAll(".line1 li");
  let Line2 = document.querySelectorAll(".line2 li");
  let e = con2.offsetTop;

  if (this.scrollY >= e - 500) {
    con2H2.classList.add("on");

    for (let g = 0; g < Line1.length; g++) {
      setTimeout(function () {
        Line1[g].classList.add("on");
      }, g * 150);
    }

    setTimeout(function () {
      for (let h = Line2.length - 1; h >= 0; h--) {
        setTimeout(function () {
          Line2[h].classList.add("on");
        }, (Line2.length - h) * 150);
      }
    }, 500);
  }

  // 컨테이너 3번(portfolio) 스크롤 이벤트
  let con3H2 = document.querySelector(".con3 h2");
  let web_slide = document.querySelectorAll(".web_slide");
  let j = con3.offsetTop;

  if (this.scrollY >= j - 500) {
    con3H2.classList.add("on");
    for (let i = 0; i < web_slide.length; i++) {
      web_slide[i].classList.add("on");
    }
  }

  // 컨테이너 4번 스크롤(design) 이벤트
  let d = con4.offsetTop;
  let con4H2 = document.querySelector(".con4 h2");
  let designLi = document.querySelectorAll(".con4 li");
  if (this.scrollY >= d - 500) {
    con4H2.classList.add("on");
    setTimeout(function () {
      for (let num1 = 0; num1 < designLi.length; num1++) {
        setTimeout(function () {
          designLi[num1].classList.add("on");
        }, num1 * 150);
      }
    }, 300);
  }

  // 컨테이너 5번(contact) 스크롤 이벤트
  let lastSpan = document.querySelectorAll(".last span");
  let i = con5.offsetTop;
  if (this.scrollY >= i - 500) {
    for (let span = 0; span < lastSpan.length; span++) {
      setTimeout(function () {
        lastSpan[span].classList.add("on");
      }, span * 200);
    }
  }
});

// 컨테이너 3번, 포트폴리오 (자동)슬라이드, 클릭 이벤트
let total = $(".web_slide").length;
let wid = 100;
let index = 0;

$(function () {
  $("button").eq(index).addClass("on");
});

let autoSlide = setInterval(goToSlide, 7000);

// 자동, 버튼 앞으로가는 함수
function goToSlide() {
  index++;
  if (index == total - 1) {
    $(".web_slide_wrap")
      .stop()
      .animate({ marginLeft: "-500%" }, function () {
        $(".web_slide_wrap").css({ marginLeft: "0" });
      });
    index = 0;
  } else {
    $(".web_slide_wrap")
      .stop()
      .animate({ marginLeft: `${-index * wid}%` });
  }
  $("button").removeClass("on");
  $("button").eq(index).addClass("on");
}

//자동, 버튼 뒤로 가는 함수
function backToSlide() {
  index--;
  if (index < 0) {
    $(".web_slide_wrap").css({ marginLeft: "-500%" });
    $(".web_slide_wrap").stop().animate({ marginLeft: "-400%" });
    index = total - 2;
  } else {
    $(".web_slide_wrap")
      .stop()
      .animate({ marginLeft: `${-index * wid}%` });
  }
  $("button").removeClass("on");
  $("button").eq(index).addClass("on");
}

// 슬라이드 다음버튼
$(".next_wrap").on("click", function () {
  clearInterval(autoSlide);
  goToSlide();
  autoSlide = setInterval(goToSlide, 7000);
});

// 슬라이드 이전버튼
$(".prev_wrap").click(function () {
  clearInterval(autoSlide);
  backToSlide();
  autoSlide = setInterval(goToSlide, 7000);
});

// 네비바 버튼 클릭 이벤트
$("button").click(function () {
  clearInterval(autoSlide);
  i = $(this).index();
  $(".web_slide_wrap")
    .stop()
    .animate({ marginLeft: `${-i * wid}%` });
  $("button").removeClass("on");
  $("button").eq(i).addClass("on");
  autoSlide = setInterval(goToSlide, 7000);
  index = i;
});

// // 슬라이드 드래그 터치 이벤트
// let position = 0; //오른쪽, 왼쪽 방향
let start_x, end_x; // 시작지점, 끝지점
let slide = document.querySelector(".web_slide_wrap");

//드래그 이벤트
slide.addEventListener("mousedown", function (e) {
  clearInterval(autoSlide);
  start_x = e.pageX;
  // console.log(`터치 시작 ${start_x}`);
});

slide.addEventListener("mouseup", function (e) {
  end_x = e.pageX;
  // console.log(`터치 끝 ${end_x}`);

  if (start_x < end_x && start_x !== end_x && end_x - start_x >= 50) {
    backToSlide();
  } //이전으로 가는 것

  if (start_x > end_x && start_x !== end_x && start_x - end_x >= 50) {
    goToSlide();
  } //다음으로 가는 것

  autoSlide = setInterval(goToSlide, 7000);
});

// 터치 이벤트
slide.addEventListener("touchstart", function (e) {
  clearInterval(autoSlide);
  start_x = e.touches[0].pageX;
  // console.log(`터치 시작 ${start_x}`);
});

slide.addEventListener("touchend", function (e) {
  end_x = e.changedTouches[0].pageX;
  // console.log(`터치 끝 ${end_x}`);

  if (start_x < end_x && start_x !== end_x && end_x - start_x >= 50) {
    backToSlide();
  }
  if (start_x > end_x && start_x !== end_x && start_x - end_x >= 50) {
    goToSlide();
  }

  autoSlide = setInterval(goToSlide, 7000);
});

// 컨테이너 3번 기획서
$(".sketch").on("click", function () {
  let sketch_index = $(this).index(".sketch");
  console.log(sketch_index);
  $(".popor_modal").eq(sketch_index).css({ display: "flex" });
});

// 컨테이너 3번 기획서 이전, 다음버튼
// 기획서 모달창 첫번째(개인포폴)
let popor_index1 = 0;
$(".popor_modal1 .popor_modal_next").on("click", function () {
  if (popor_index1 !== $(".popor_modal1 ul li").length - 1) {
    popor_index1++;
  } else {
    popor_index1 = 0;
  }
  $(".popor_modal1 ul li").css({ display: "none" });
  $(".popor_modal1 ul li").eq(popor_index1).css({ display: "block" });
});
$(".popor_modal1 .popor_modal_prev").on("click", function () {
  if (popor_index1 !== 0) {
    popor_index1--;
  } else {
    popor_index1 = $(".popor_modal1 ul li").length - 1;
  }
  $(".popor_modal1 ul li").css({ display: "none" });
  $(".popor_modal1 ul li").eq(popor_index1).css({ display: "block" });
});

// 기획서 모달창 두번째(그린피스)
let popor_index2 = 0;
$(".popor_modal2 .popor_modal_next").on("click", function () {
  if (popor_index2 !== $(".popor_modal2 ul li").length - 1) {
    popor_index2++;
  } else {
    popor_index2 = 0;
  }
  $(".popor_modal2 ul li").css({ display: "none" });
  $(".popor_modal2 ul li").eq(popor_index2).css({ display: "block" });
});
$(".popor_modal2 .popor_modal_prev").on("click", function () {
  if (popor_index2 !== 0) {
    popor_index2--;
  } else {
    popor_index2 = $(".popor_modal2 ul li").length - 1;
  }
  $(".popor_modal2 ul li").css({ display: "none" });
  $(".popor_modal2 ul li").eq(popor_index2).css({ display: "block" });
});

// 기획서 모달창 세번째(JYP)
let popor_index3 = 0;
$(".popor_modal3 .popor_modal_next").on("click", function () {
  if (popor_index3 !== $(".popor_modal3 ul li").length - 1) {
    popor_index3++;
  } else {
    popor_index3 = 0;
  }
  $(".popor_modal3 ul li").css({ display: "none" });
  $(".popor_modal3 ul li").eq(popor_index3).css({ display: "block" });
});
$(".popor_modal3 .popor_modal_prev").on("click", function () {
  if (popor_index3 !== 0) {
    popor_index3--;
  } else {
    popor_index3 = $(".popor_modal3 ul li").length - 1;
  }
  $(".popor_modal3 ul li").css({ display: "none" });
  $(".popor_modal3 ul li").eq(popor_index3).css({ display: "block" });
});

// 포폴 모달 닫기 버튼
$(".popor_delate").on("click", function () {
  $(".popor_modal").css({ display: "none" });
  $(".popor_modal1 ul li").css({ display: "none" });
  $(".popor_modal2 ul li").css({ display: "none" });
  $(".popor_modal3 ul li").css({ display: "none" });
  $(".popor_modal1 ul li").eq(0).css({ display: "block" });
  $(".popor_modal2 ul li").eq(0).css({ display: "block" });
  $(".popor_modal3 ul li").eq(0).css({ display: "block" });
  popor_index1 = 0;
  popor_index2 = 0;
  popor_index3 = 0;
});

// 컨테이너 4번 클릭 이벤트
$(".front").click(function () {
  let a = $(this).index(".front");
  $(".front").parent().removeClass("on");
  $(this).parent().addClass("on");
});

$(".back").click(function () {
  $(this).parent().removeClass("on");
});

$(".card_btn").click(function () {
  let b = $(this).index(".card_btn");
  $(".design_card").removeClass("on");
  $(".design_modal").removeClass("on");
  $(".design_modal").eq(b).addClass("on");
});

$(".delate").click(function () {
  $(".design_modal").removeClass("on");
});
