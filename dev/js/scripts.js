import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, CustomEase, MorphSVGPlugin);



function riotAnimation(){
    var tl = gsap.timeline();


    tl.from("#riothand", {
        duration: 0.4 ,
        drawSVG: 0,
        stagger: 0.3
        
    })

    tl.to("#riothand",{
        duration: 1.5,
        fill: "#E4142C",
        stroke: "#E4142C"
    })

    tl.from("#riothand", {
        duration:0.9,
        x: 250,
        ease: "back.out(1.7)"
        
    })

    tl.from(".comedown",{
        duration: 0.2,
        y: "-=200",
        stagger: {
            from: "end",
            amount: 0.5
          },
        opacity: 0,
        ease: "power2.inOut"
    },"<+=0.5")

    tl.from(".comeup",{
        duration: 0.2,
        delay: 0.05,
        x: "+=200",
        stagger: {
            from: "end",
            amount: 0.5
          },
          opacity: 0,
          ease: "power2.inOut"
    },"<+=0.5")
    
    tl.from(".masker",{
        duration: 0.8,
        x: 3000

    })
    tl.to(".masker",{
        delay: 2,
        duration: 0.8,
        x: 3000

    })
     

    return tl;
}


GSDevTools.create();

var mainTL = gsap.timeline();
mainTL.add(riotAnimation());

