$(function () {
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");

    let target = $(href == "#" || href == "" ? "html" : href);

    let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 600, "swing");

    return false;
  });

  $(".toggle_btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  $(".menu-bar a").on("click", function () {
    $("header").toggleClass("open");
  });

  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
