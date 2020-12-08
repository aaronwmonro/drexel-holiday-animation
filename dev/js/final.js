import {gsap} from "gsap";
import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, CustomEase, MotionPathPlugin, DrawSVGPlugin);


const finalTL = gsap.timeline();

finalTL.to("#ice-group", {x:-1024, duration: 3, ease: "sine.inOut"})
.to("#skater", {
    duration: 7,
    ease:"none",
    motionPath: {
        path: "#final-path",
    //     align: "#follow-path",
        autoRotate: 270,
        alignOrigin: [0.5, 0.5]
    }
   
}, "-=3") 

;     

export function finalAnimation(){
    return finalTL; 
}

const finalTextTL = gsap.timeline();

finalTextTL.from("#peace-on-earth", {y:-20, duration: .5, alpha:0})
.from("#wishing-line-one", {y:-20, duration: .5, alpha:0}, "-=.2")
.from("#wishing-line-two", {y:-20, duration: .5, alpha:0}, "-=.25")
.from("#your-friends", {y:-20, duration: .5, alpha:0}, "-=.2")
.from("#drexel-logo", {y:220, duration: .5, alpha:0}, "-=.2")
.from("#dragon-logo", {xPercent:-30, duration: 1.5, alpha: 0}, "+=.5")
.from("#text-logo", {xPercent:30, duration: 1.5, alpha: 0}, "-=1.5")


;     

export function finalTextAnimation(){
    return finalTextTL; 
}