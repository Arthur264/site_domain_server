// $("#slick-icon").slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     dots: false,
//     arrows: false
// });
// $("#main_check").change(function(even) {
// 	console.log(this);
// 	console.log(even);
//     console.log('this');
//     // body...
// });
// console.log($("#main_check"))

var cont = 5;
$(window).resize(function() {
    if ($(window).width() < 768) {
        cont = 3;
        console.log(cont);
    } else {}
});
$(".main-slick").slick({
    slidesToShow: cont,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false
});
