// UTF-8

/*----------------------------------------------
 *
 * globalNaviInspector
 *
 * ssi でグローバルナビ部分を読み込むサイトのためのjs。
 * ページのパスとグローバルナビのリンク先を比較して、
 * 該当ページのナビのボタン画像をactiveにする。
 * jquery 1.11 以上 で確認済み。
 *
 ----------------------------------------------*/


(function ($) {
  $.fn.globalNaviInspector = function () {

    // ナビ画像のそれぞれの幅
    var imgW = [];

    // ナビ画像高さ
    var imgH = 54;

    // ナビのjquery オブジェクト
    var naviLink = $('.globalNavi > li > a');

    // on画像のそれぞれのパス
    // 画像のプリロード用。
    var paths = [
      'btn_navi_01_on.png',
      'btn_navi_02_on.png',
      'btn_navi_03_on.png',
      'btn_navi_04_on.png',
      'btn_navi_05_on.png',
      'btn_navi_06_on.png'
    ];

    var imgs = [];

    // 画像読み込み
    $.each(paths, function (i) {
      imgs[i] = new Image(imgW[i], imgH);
      imgs[i].src = paths[i];
    });

    var urlCheck = function () {
      var n;
      var url = location.pathname;
      naviLink.each(function (i) {
        if ($(this).attr('href') == url || $(this).attr('href') == url.replace('index.html', '')) {
          n = i;
        }
      });
      return n;
    };

    var naviChanger = function () {
      var parent = naviLink.eq(urlCheck()).parent();
      naviLink.eq(urlCheck()).remove();
      parent.append(imgs[urlCheck()]);
    }

    naviChanger();

  };
})
(jQuery);
