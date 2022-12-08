import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MotionPathPlugin, CustomEase);


function ahoyAnimation(){
    var tl = gsap.timeline();
    tl.to(".ahoylogo",{
        duration: 0.002,
        x: 400, 
        rotate: 90,
        opacity: 0,
        scale: 1.5,
        transformOrigin: "center"
    })
    tl.from(".ahoylogo",{
        duration: 0.02,
        opacity: 0
    })

    tl.from(".ahoylogo",{
        duration: 1,
        drawSVG: 0
        
    })


    tl.to(".ahoylogo",{
        duration: 0.9,
        rotate: 0,
        x: "-=400",
        scale: 1,
        transformOrigin: "center",
        ease: "back.out(1.7)"
    },"lettermove")

        tl.from(".letters",{
            delay: 0.5,
            duration: 0.3,
            stagger: 0.03,
            x: "+=50",
            opacity: 0,
            ease: "back.out(0.6)"
        },"lettermove")
        tl.from(".letters",{
            delay: 0.5,
            duration: 0.3,
            scale: 1.5
            
        },"lettermove")


        tl.to(".whitemask",{
            duration: 1,
            ease: "power3.out",
            x: 3000
            
        })

        tl.to(".bluemask",{
            duration: 1,
            ease: "power3.out",
            x: 3000
        },"bluemove")
        // tl.to("#ahoylogo1",{
        //     x: 3000
        // },"bluemove")

        tl.to(".lastmask",{
            duration: 1,
            ease: "power3.out",
            x: 3000
        })

    return tl;
}



var mainTL = gsap.timeline();
mainTL.add(ahoyAnimation());


GSDevTools.create();
