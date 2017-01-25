import $ from 'jquery';

const $buttons = $(".buttons button");
$buttons.on("click", (e) => {
    const $btn = $(e.target);
    console.log();

    const audio = new Audio($btn.attr("data-src"));
    audio.play();
})
const $win = $(window);
const vclass = "vertical"
$win.on("resize", () => {
    if ($win.height() > $win.width) {
        $(".wrapper").addClass(vclass);
    } else {
        $(".wrapper").removeClass(vclass);
    }
})
