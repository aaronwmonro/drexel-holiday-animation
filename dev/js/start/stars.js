import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools, CustomEase);

GSDevTools.create();

const starsTL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
    ease: "none"
  }});
starsTL.fromTo(".stars", {duration: 1, scale: .8,yoyo: "true"}, {duration: 1, scale: 1, yoyo: "true"});

        export function starsAnimation(){
            return starsTL; 
        }

const starsSpinTL = gsap.timeline();
starsSpinTL.to("#stars", {duration: 4, rotate: -90, scale: 9, y:-100, ease: "sine.in"}, "+=.25");

        export function starsSpinAnimation(){
            return starsSpinTL; 
        }

gsap.set("#stars", {transformOrigin: "center "});