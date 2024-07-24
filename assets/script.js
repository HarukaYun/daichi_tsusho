
$(document).ready(function(){


//-------------------------------------- 
//下層ページSPヘッダー
//メニューが開いている時に、ヘッダーの文字色を白に
$(document).ready(function() {
  // ハンバーガーメニュー開閉とリンククリック時のナビゲーション制御

  // JavaScriptで#navが.activeの時に#nav_fix_icon内のli要素の色を変更する
  function updateNavFixIconVisibility() {
      var nav = document.getElementById("nav_sp");
      var navFixIconItems = document.querySelectorAll(".nav_fix_icon_sp .li");

      if (nav && nav.classList.contains("active")) {
          navFixIconItems.forEach(item => item.classList.add("active-color"));
      } else {
          navFixIconItems.forEach(item => item.classList.remove("active-color"));
      }
  }

  $("#hamb_sp, #menu_text").on("click", function() {
      $("#hamb_sp span").toggleClass("active");
      $("#nav_sp").toggleClass("active");

      if ($("#nav_sp").hasClass("active")) {
          $("#menu_text").text("閉じる");
      } else {
          $("#menu_text").text("メニュー");
      }

      updateNavFixIconVisibility(); // メニュー状態が変わったら非表示を更新
  });

  $('a[href*="#"]').on('click', function() {
      $('#nav_sp').removeClass('active');
      $("#hamb_sp span").removeClass("active");
      $("#menu_text").text("メニュー");
      updateNavFixIconVisibility(); // メニュー状態が変わったら非表示を更新
  });
});



//-------------------------------------- 

//about iamge
$('.about_slide').slick({
  fade:true,
  arrows:false,//左右に出る矢印を非表示
  dots:false,
  slidesToShow: 1,
  pauseOnHover: false,//hoverしても止めない
  pauseOnFocus: false, // フォーカスで一時停止OFF
  speed: 2000,
  infinite: true,
  autoplay: true, //自動再生
  autoplaySpeed: 1000
});

});




$(document).ready(function() {
//itemページの商品スライド
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  focusOnSelect: true
});



AOS.init({
    duration: 1000,
    easing: 'ease',
  });


  var moreNum = 3;

  if (moreNum <= 3) {
    $('.button').hide();
} else {
$('.item-list li:nth-child(n + ' + (moreNum + 1) + ')').addClass('hidden');
$('.button').on('click', function() {
    $('.item-list li.hidden').slice(0, moreNum).removeClass('hidden');
    if ($('.item-list li.hidden').length == 0) {
        $('.button').fadeOut();
    }
});

}


var rellax = new Rellax('.rellax', {
});




    // アコーディオンをクリックした時の動作
    $('.title, .ibox').on('click', function() {
      var parent = $(this).closest('.faq_box'); // 親要素を取得
      var findElm = parent.find(".box"); // 親要素内の .box を取得
      var titleElm = parent.find('.title'); // 親要素内の .title を取得
      var ibox = parent.find('.ibox'); // 親要素内の .ibox を取得

      // すべてのアコーディオンを閉じる
      $('.box').not(findElm).slideUp(500);
      $('.title').not(titleElm).removeClass('close'); // 他のすべてのタイトルからクラス名 close を除去
      $('.ibox').removeClass('minus'); // すべての .ibox から minus クラスを削除
      // 現在のアコーディオンを開く/閉じる
      if (titleElm.hasClass('close')) {
          titleElm.removeClass('close'); // クラス名を除去
          findElm.slideUp(500); // アコーディオンを閉じる
          findElm.siblings('.ibox').removeClass('minus'); // .ibox の兄弟要素の .minus を追加

      } else {
          titleElm.addClass('close'); // クリックしたタイトルにクラス名 close を付与
          findElm.slideDown(500); // アコーディオンを開く
          findElm.siblings('.ibox').addClass('minus'); // .ibox の兄弟要素の .minus を削除
      }
    });


  });


