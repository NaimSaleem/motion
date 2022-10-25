import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function scrollAnimation(){
    var tl = gsap.timeline();
    tl.to("#picture img", {
        duration: 2,
        scrollTrigger: {
            trigger: "#img1",
            start: "top 60%",
            markers: true,
            pin: true
            
        }
    })
    .to("#img1",{
        duration: 4,
        opacity: 0,
        scrollTrigger: {
            trigger: "#img2",
            start: "top 60%",
            end: "center -40%",
            markers: true,
            scrub: true,
            pin: "#img2"

    }
})
    .to("#img2",{
        duration: 4,
        scrollTrigger: {
            trigger: "#img2",
            start: "top 1%",
            markers: true,
            scrub: true,
            pin: true
        }

    })
    .to("#quote1", {
        duration: 1,
        opacity: '100%',
        x: 100,
        scrollTrigger: {
            trigger: "#quote1",
            start: "top 80%",
            end: "top 40%",
            markers: true,
            scrub: 1
        }
    })
    .from("#pastaintro", {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#pastaintro",
            start: "top 40%",
            end: "center 20%",
            markers: true,
            scrub: true
        }
        

    })
    .from("#pastatext", {
        duration: 1,
        opacity: 0,
        scrollTrigger:{
            trigger: "#pastaintro",
            start: "top 40%",
            end: "center 20%",
            markers: true,
            scrub: true
        }
    })
    .from("#title1",{
        duration: 0.5, 
        x: -100,
        alpha: 0,
        scrollTrigger:{
            trigger: "#title1",
            start: "top 40%",
            end: "center 20%",
            markers: true,
            scrub: true
        }
    })
    .from("#ingredientsteps",{
        duration: 0.5, 
        x: 100,
        alpha: 0,
        scrollTrigger:{
            trigger: "#ingredientsteps",
            start: "top 60%",
            end: "center 20%",
            markers: true,
            scrub: 2
        }
    })
    .from("#title2",{
        duration: 0.5, 
        x: -100,
        alpha: 0,
        scrollTrigger:{
            trigger: "#title2",
            start: "top 40%",
            end: "center 20%",
            markers: true,
            scrub: true
        }
    })
    .from("#pastasteps",{
        duration: 0.5, 
        x: 100,
        alpha: 0,
        scrollTrigger:{
            trigger: "#pastasteps",
            start: "top 60%",
            end: "center 20%",
            markers: true,
            scrub: 2
        }
    })
    .from("#title3",{
        duration: 0.5, 
        x: -100,
        alpha: 0,
        scrollTrigger:{
            trigger: "#title3",
            start: "top 40%",
            end: "center 20%",
            markers: true,
            scrub: true
        }
    })
    .from("#saucesteps",{
        duration: 0.5, 
        x: 100,
        alpha: 0,
        scrollTrigger:{
            trigger: "#saucesteps",
            start: "top 60%",
            end: "center 20%",
            markers: true,
            scrub: 2
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
// var pastaScroll = 1400;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

    heroSizeNumber = 1.2;
    // pastaScroll = 1500;

});

mm.add("(max-width: 767px)", () => {

    heroSizeNumber = 1.1;   
    // pastaScroll = 1450;


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

 