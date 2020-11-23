import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools, CustomEase);

GSDevTools.create();


const earthZoomTL = gsap.timeline();
earthZoomTL.to("#start-zoom",  {duration: 4, scale:60, ease: "power3.in"}, "zoom")
// .to("#start-zoom",  {duration: 1, scale:67})
            // .from("#earth",  {duration: 5, scale:65, ease: "power3.in"}, "zoom")
            
  ;

        export function earthZoomAnimation(){
            return earthZoomTL; 
        }
        gsap.set("#start-zoom", {transformOrigin: "725 660 "});