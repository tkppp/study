// UTF-8

/*----------------------------------------------
 *
 * googleMap
 *
 * googleMap API を叩くとき用のメモ。
 * マーカーを別画像に。
 *
 ----------------------------------------------*/


(function ($) {

  googleMap = function () {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: new google.maps.LatLng(1111, 1111),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker01 = new google.maps.Marker({
      position: new google.maps.LatLng(1111, 1111),
      map: map,
      icon: "icon_map.png"
    });
  };


})(jQuery);
