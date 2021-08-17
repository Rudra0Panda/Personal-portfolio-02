$("#menu_trigger").click(function() {
    $(".menu").toggleClass("is-active");
    $("#menu_trigger").toggleClass("clicked");
    $(".logo , #social").toggleClass("hidden");
    $("html , body").toggleClass("overflow-hidden");
});
var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
// let Ccursor = document.querySelector(".cursor");
// window.addEventListener("mousemove", cursor);
// // 
// // function cursor(e) {
// //     Ccursor.style.top = e.pageY + "px";
// //     Ccursor.style.left = e.pageX + "px";
// // }
$("a , button , .underline  ,.link").mouseover(function() {
    $(".cursor").addClass("grow");
    $(".cursor>svg").show();
    $(".cursor>a").html("click");
});
$("a , button , .underline , .link ").mouseleave(function() {
    $(".cursor").removeClass("grow");
    $(".cursor>svg").hide();
});

$('.button-bg , .toggle ').click(function() {
    $('.button-bg').toggleClass('is-active');
});
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
});

scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".scrollContainer", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});
ScrollTrigger.create({
    trigger: ".horizontal-scroll",
    start: "top 500px",
    scroller: ".scrollContainer",

    onEnter: () => gsap.to(".contact-section", { duration: 1.5, color: "#fff", backgroundColor: "#000" }),
    onEnterBack: () => gsap.to(".contact-section", { duration: 1.5, color: "#fff", backgroundColor: "#000" }),
    onLeave: () => gsap.to(".contact-section", { duration: 1.5, color: "#000", backgroundColor: "#fff" }),
    onLeave: () => gsap.to(".contact-section", { duration: 1.5, color: "#000", backgroundColor: "#fff" }),
})