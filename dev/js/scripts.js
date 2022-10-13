import { gsap } from "gsap";


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

 