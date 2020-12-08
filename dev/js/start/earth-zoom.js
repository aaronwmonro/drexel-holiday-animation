import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools, CustomEase);

GSDevTools.create();


const earthZoomTL = gsap.timeline();
earthZoomTL.to("#clip-earth", {duration: 5.5, scale:70, ease: "power3.in"}, "zoom")
.to("#clouds", {duration: 5.5, scale:5, x:-500, y:-350, ease: "power3.in"}, "zoom")
.from("#land-move", {duration: 5, y:-20, x:80, ease: "none"}, "zoom")
.to("#background", {duration: 0.1, alpha: 0, ease: "none"}, "-=2")
.to("#earth-group", {duration: 0.1, alpha: 0, ease: "none"})



// .to("#start-zoom",  {duration: 1, scale:67})
            // .from("#earth",  {duration: 5, scale:65, ease: "power3.in"}, "zoom")
            
  ;

        export function earthZoomAnimation(){
            return earthZoomTL; 
        }
        gsap.set("#clip-earth", {transformOrigin: "250 150"});