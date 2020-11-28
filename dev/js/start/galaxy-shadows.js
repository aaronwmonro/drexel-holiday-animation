import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools, CustomEase);

GSDevTools.create();



const shadowsTL = gsap.timeline();
  shadowsTL.fromTo(".first-shadows-1", {duration: 2,  x:-370, y:-400, scale:2}, {duration: 5,  x:700, y: -600, scale:3, ease: "none"}, "shadows")
  .fromTo(".first-shadows-2", {duration: 2,  x:-450, y:-700, scale:2}, {duration: 5,  x:-1800, scale:3 , ease: "none"}, "shadows")
  .fromTo(".second-shadows-1", {duration: 2,  x:-100, y:-100, scale:1.25}, {duration: 3.5, y:-400,  x:500, scale:2.25, ease: "sine.in"}, "-=4.95")
  .fromTo(".second-shadows-2", {duration: 2,  x:-10, y:-300, scale:1.5}, {duration: 3.5, x:-900, y:-800, scale:2.25, ease: "sine.in"}, "-=4.95")
  // .fromTo(".first-shadows-2", {duration: 2,  x:-1000}, {duration: 2, x:0, scale:2.5 }, "shadows")
  // .to(".second-shadows-1", {duration: 5,  x:-100,   scale:1.5 }, "shadows")
  // .fromTo(".first-shadows-2", {duration: 4, scale:1 }, {duration: 4, scale:1.5 }, "shadows")
  // .fromTo(".second-shadows", {duration: 4, x:50,  scale:1  }, {duration: 4, x:-20,  scale:1.1 },"-=3.75" )
  ;

        export function shadowsAnimation(){
            return shadowsTL; 
        }

