import $ from 'jquery';

const $buttons = $(".buttons button");
let audios = [];
$.each($buttons,(index,dom)=>{
  const $btn = $(dom);
  audios[index] = new Audio($btn.attr("data-src"));
  audios[index].autoplay = false;

  $btn.on("click", (e) => {
    audios[index].play();
  })
})

const $win = $(window);
const vclass = "vertical"
$win.on("resize", () => {
    if ($win.height() > $win.width()) {
        $(".wrapper").addClass(vclass);
    } else {
        $(".wrapper").removeClass(vclass);
    }
}).trigger("resize");
