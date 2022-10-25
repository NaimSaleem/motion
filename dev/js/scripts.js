import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function scrollAnimation(){
    var tl = gsap.timeline();
    tl.to("#picture img", {
        duration: 1,
        y: 700,
        scrollTrigger: {
            trigger: "#picture",
            start: "top 50%",
            end: "center 20%",
            markers: true,
            scrub: 1.15
        }
    })
    .to("#img1",{
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#picture",
            start: "top 40%",
            end: "center 20%",
            markers: true,
            scrub: true


    }
})
    .to("#quote1", {
        duration: 1,
        x: 100,
        scrollTrigger: {
            trigger: "#quote1",
            start: "top 80%",
            end: "top 40%",
            markers: true,
            scrub: 1
        }
    })
    
    ;
    return tl;
}

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from('#first-line', {duration: 0.5, x: -100, alpha: 0})
        .from('#second-line', {duration: 0.5, x: 100, alpha: 0})
        .from('button', {duration: 0.5, y: '-100%', alpha:0, ease: 'bounce'})
        .from('button i', {duration: 0.5, y: '-100%', alpha:0 });
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(heroAnimation());
mainTL.add(scrollAnimation());
var heroSizeNumber = 1;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

    heroSizeNumber = 1.2;

});

mm.add("(max-width: 767px)", () => {

    heroSizeNumber = 1.1;   

});

let trailBtn = document.querySelector('button');



var buttonAnimation = gsap.timeline({paused:true});
trailBtn.addEventListener("mouseover",function(){
    buttonAnimation.play()
    buttonAnimation.to("button",{duration:0.2, scale:heroSizeNumber})
        .to('button i',{duration: 0.25, rotateX:180})
        .to("#first-line",{duration: 0.25, alpha:0, y:50})
        .to("#second-line",{duration: 0.25, alpha:0, y:20});
});

trailBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
    buttonAnimation.to("#first-line",{duration: 0.25, alpha:0, y:0})
    .to("#second-line",{duration: 0.25, alpha:0, y:0})
    .to('button i',{duration: 0.25, rotateX:0})
    .to('button',{duration:0.2, scale:heroSizeNumber});
});

 