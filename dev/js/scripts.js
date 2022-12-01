import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, CustomEase);

// var wiggles = 10; //tweak this to whatever number you want. 

// //create the custom eases..
// CustomWiggle.create("Wiggle.easeOut", {wiggles:wiggles, type:"easeOut"});
// CustomWiggle.create("Wiggle.easeInOut", {wiggles:wiggles, type:"easeInOut"});
// CustomWiggle.create("Wiggle.anticipate", {wiggles:wiggles, type:"anticipate"});
// CustomWiggle.create("Wiggle.uniform", {wiggles:wiggles, type:"uniform"});
// CustomWiggle.create("Wiggle.random", {wiggles:wiggles, type:"random"});

function ahoyAnimation(){
    var tl = gsap.timeline();
    tl.to("#ahoylogo",{
        duration: 0.002,
        x: 400, 
        rotate: 90,
        opacity: 0,
        scale: 2,
        transformOrigin: "center"
    })
    tl.from("#ahoylogo",{
        duration: 0.02,
        opacity: 0
        
        

    })
    tl.from("#Vector1",{
        duration: 1,
        drawSVG: 0
        
    })
    tl.to("#Vector1",{
        duration: 0.9,
        rotate: -90,
        y: 200,
        scale: 0.5,
        transformOrigin: "center"
    },"lettermove")

        tl.from(".letters",{
            duration: 0.6,
            stagger: 0.05,
            x: "+=50",
            opacity: 0

        },"lettermove")
        tl.from(".letters",{
            duration: 1,
            scale: 2
        },"lettermove")

        
        tl.to("#Rectangle_1",{
            delay: 2,
            duration: 1,
            x: "+=1400"
        },"colorchange")

        tl.to("#Rectangle_2",{
            delay: 2,
            duration: 1,
            x: "+=1400"
        },"colorchange2")

        tl.to("#Rectangle_3",{
            delay: 2,
            duration: 1,
            x: "+=1400"
        },"colorchange3")

        tl.to(".letters",{
            delay: 2,
            fill: "#24323E",
            stagger: 0.02
        },"colorchange")

        tl.to(".letters",{
            delay:2,
            fill: "#FFFFFF",
            stagger: 0.02
        },"colorchange3")
        
        tl.to("#Vector1",{
            delay: 2,
            stroke: "#24323E"
        },"colorchange2")

        tl.to("#Vector1",{
            delay: 2,
            stroke: "#E0B562"
        },"colorchange3")

        tl.to(".letters",{
            duration: 4,
            opacity: 100
        })

    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(ahoyAnimation());


GSDevTools.create();
