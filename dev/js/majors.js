import {gsap} from "gsap";

console.log("gsap");
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);
import {CustomEase} from "gsap/CustomEase";
// import {GSDevTools} from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
gsap.registerPlugin(CustomEase, MotionPathPlugin, DrawSVGPlugin);

const majorsTL = gsap.timeline();

majorsTL.to("#ice-group", {x:-505, duration: 3, ease: "sine.inOut"})
.to("#skater", {
    duration: 6,
    ease:"none",
    motionPath: {
        path: "#majors-path",
    //     align: "#follow-path",
        autoRotate: 270,
        alignOrigin: [0.5, 0.5]
    }
   
}, "-=2.45") 

;     

export function majorsAnimation(){
    return majorsTL; 
}

const majorsTextTL = gsap.timeline();

var distanceSlide = -10 ;
var timeSlide = .5 ;
// majorsTextTL.from("#animation", {y: distanceSlide, alpha: 0, duration: timeSlide})
// .from("#architecture", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#art-history", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#art-admin", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#dance", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#d-m", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#desing-research", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#digital-media", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#eam", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#fashion", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#film", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#game", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#graphic", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#interactive", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#interior", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#interior-arch", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#music", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#performing", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#photo", {y:-distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#product", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#retail", {y:distanceSlide, alpha: 0, duration:timeSlide}, "-=.25")
// .from("#screenwriting", {y:distanceSlide, alpha: 0, duration:timeSlide}, "-=.25")
// .from("#television", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#urban", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
// .from("#virtual", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")

// ;   

majorsTextTL.from("#animation, #architecture", {y: distanceSlide, alpha: 0, duration: timeSlide})
.from("#art-history, #art-admin, #dance", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.25")
.from("#d-m, #design-research, #digital-media", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.27")
.from("#eam, #fashion, #film", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.29")
.from("#game, #graphic, #interactive", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.31")
.from("#interior, #interior-arch, #music", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.33")
.from("#performing, #photo, #product, #retail", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.35")
.from("#screenwriting, #television", {y:distanceSlide, alpha: 0, duration:timeSlide}, "-=.36")
.from("#urban, #virtual", {y:distanceSlide, alpha: 0, duration: timeSlide}, "-=.38")

;     

export function majorsTextAnimation(){
    return majorsTextTL; 
}
