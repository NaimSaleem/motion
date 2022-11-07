import { gsap } from "gsap";


import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function lineMotion(){
    var tl = gsap.timeline();

    tl.from("#Vector1",{
        duration: 2,
        drawSVG: "40 % 50%",
        stroke: "white",
        scale: 2
    })
    tl.from("#Vector2",{
        duration: 2,
        drawSVG: 0
    })

    return tl;
}


function patternMotion(){
    var tl = gsap.timeline();

        tl.from(".red",{
            duration: 0.5  ,
            drawSVG: "50% 50%",
            stroke: "white",
            strokeWidth: 30,
            rotate: 360,
            transformOrigin: "center",
            stagger: 0.1,
            scale: 2

        })
        .from(".orange",{
            duration: 0.5, 
            drawSVG: "50% 50%",
            stroke: "white",
            strokeWidth: 30,
            rotate: 360,
            transformOrigin: "center",
            stagger: 0.1,
            scale: 2
        })
        .to(".red",{
            duration: 0.2,
            fill: "red",
            stagger: 0.01
            
        })
        .to(".orange",{
            duration: 0.2,
            fill: "orange",
            stagger: 0.01

        })
    return tl;
}


function UIMotion(){
    var tl = gsap.timeline()
        tl.from("#Ellipse-1",{
            transformOrigin: "center",
            duration: 2,
            drawSVG: 0,
            scale: 2

        })
       
        tl.from("#Polygon-1",{
            duration: 0.5,
            drawSVG: 0

        },"triangle")
        
        tl.from("#Ellipse-2",{
            duration: 1.5,
            x: 100,
            delay: 1,
            opacity: 0
            
        },"mouseHover")
        tl.from(".sparkle",{
            duration: 0.1,
            opacity: 0,
            stroke: 0
        })
        tl.to(".sparkle",{
            duration: 0.4,
            opacity: 0,
            scale: 1,
            stroke: 0,
            rotate: -45,
            fill: "orange"

        },"sparkleLeave")
        tl.to("#Polygon-1",{
            duration: 0.2,
            fill: "white"
        },"sparkleLeave")
        tl.to("#Ellipse-1",{
            duration: 0.2,
            fill: "red"
        },"sparkleLeave")
        tl.to("#Polygon-1",{
            transformOrigin: "center",
            duration: 0.2,
            drawSVG: "50% 50%"
        },"sparkleLeave")
        tl.to("#Ellipse-1",{
            transformOrigin: "center",
            scale: 1.2
        },"sparkleLeave")
        tl.to("#Polygon-1",{
            transformOrigin: "center",
            scale: 1.2
        },"sparkleLeave")
        tl.to("#Ellipse-1",{
            transformOrigin: "center",
            duration: 0.2,
            drawSVG: "50% 50%"
        },"sparkleLeave")
        tl.to("#Ellipse-2",{
            duration:0.5,
            x: 200,
            delay: 1,
            opacity: 0

        }) 
    return tl;
}
var mainTL = gsap.timeline();
mainTL.add(lineMotion())
.add(patternMotion())
.add(UIMotion());

GSDevTools.create();
