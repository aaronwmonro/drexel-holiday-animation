import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
// import {GSDevTools} from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
gsap.registerPlugin(CustomEase, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

const skaterLegsTL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
    ease: "none"
  }});
  skaterLegsTL.from("#left-leg", {duration: .9})
  .from("#left-leg", {yPercent:100, duration: .2, scaleY:0}, "leftLeg")
  .fromTo("#ice-mark-right", {duration: 1, drawSVG:"0%"}, {duration: .2, drawSVG:"100%"}, "leftLeg")
  .to("#right-leg", {yPercent:100, duration: .2, scaleY:-0}, "-=.2")
  .to("#ice-mark-left", {duration: 1, drawSVG:"0%"}, "-=.2")

  .from("#left-leg", {duration: .9})
  ;

        export function skaterLegsAnimation(){
            return skaterLegsTL; 
        }


gsap.set(".ice-marks",{xPercent: 50, yPercent: 10, transformOrigin: "50% 50%"});

const scarfTL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
    ease: "none"
  }});
  
  scarfTL.fromTo("#scarf", {scaleY:1, scaleX:1, yPercent:100, duration: 1, rotate: 160}, {scaleY:.7, scaleX:.9, yPercent:100, duration: 1.5, rotate: 190, ease: "none"})
  ;

export function scarfAnimation(){ return scarfTL; }

const skaterTL = gsap.timeline();

skaterTL.to("#skater", {
                duration: 3.5,
                ease:"none",
                motionPath: {
                    path: "#dragon-path",
                //     align: "#follow-path",
                    autoRotate: 270,
                    alignOrigin: [0.5, 0.5]
                }
               
            }) 
.fromTo("#dragon-path-finish",{drawSVG:"0%"}, {duration: .8, drawSVG:"100%"}, "-=3.1")
// .fromTo("#dragon",{alpha:1}, {duration: 1.5, alpha:1}, "-=2.5")
// .fromTo("#dragon-path-finish",{alpha:1}, {duration: 1.5, alpha:1}, "-=2.5")
// .to("#dragon-path-cover", {duration: 0, alpha: 0})
// .to("#dragon-path-finish", {duration: 0, alpha: 0})
// .to("#dragon", {duration: .25, fill:"#FFC600", stroke: "#FFC600"}, "dragonGold")
// .fromTo("#dragon-shadow", {alpha:0}, {duration: 1, alpha:1})

;     

export function skaterAnimation(){
    return skaterTL; 
}

gsap.set("#skater",{xPercent: 50, yPercent: -50, transformOrigin: "50% 50%"});
gsap.set("#dragon",{ transformOrigin: "center"});
// gsap.set("#left-leg",{scaleY:0, transformOrigin: "center top"});      

// const snowFallTL = gsap.timeline({repeat: -1, defaults: { 
//     ease: "none"
//   }});
  
//   snowFallTL.fromTo(".snow-1, .snow-11, .snow-21, .snow-31, .snow-41, .snow-51", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8})
//   .to(".snow-1, .snow-11, .snow-21, .snow-31, .snow-41, .snow-51",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-2, .snow-12, .snow-22, .snow-32, .snow-42, .snow-52", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-2, .snow-12, .snow-22, .snow-32, .snow-42, .snow-52",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-3, .snow-13, .snow-23, .snow-33, .snow-43, .snow-53", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-3, .snow-13, .snow-23, .snow-33, .snow-43, .snow-53",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-4, .snow-14, .snow-24, .snow-34, .snow-44, .snow-54", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-4, .snow-14, .snow-24, .snow-34, .snow-44, .snow-54",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-5, .snow-15, .snow-25, .snow-35, .snow-45, .snow-55, .snow-50", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-5, .snow-15, .snow-25, .snow-35, .snow-45, .snow-55, .snow-50",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-6, .snow-16, .snow-26, .snow-36, .snow-46, .snow-10", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-6, .snow-16, .snow-26, .snow-36, .snow-46, .snow-10",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-7, .snow-17, .snow-27, .snow-37, .snow-47, .snow-20", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-7, .snow-17, .snow-27, .snow-37, .snow-47, .snow-20",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-8, .snow-18, .snow-28, .snow-38, .snow-48, .snow-30", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-8, .snow-18, .snow-28, .snow-38, .snow-48, .snow-30",{duration: 1, alpha: 0, scale: .2})
//   .fromTo(".snow-9, .snow-19, .snow-29, .snow-39, .snow-49, .snow-40", {scale:1.5,  duration: 1, alpha: 0}, {scale:.5,  duration: 1, alpha: .8}, "-=.9")
//   .to(".snow-9, .snow-19, .snow-29, .snow-39, .snow-49, .snow-40",{duration: 1, alpha: 0, scale: .2})
 
//   ;

//   gsap.set(".snow-flake",{ transformOrigin: "center"});

// export function snowFallAnimation(){ return snowFallTL; }




