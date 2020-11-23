import {gsap} from "gsap";


const starsTL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
    ease: "none"
  }});
starsTL.fromTo(".stars", {duration: 1, scale: .8,yoyo: "true"}, {duration: 1, scale: 1, yoyo: "true"});

        export function starsAnimation(){
            return starsTL; 
        }

const starsSpinTL = gsap.timeline();
starsSpinTL.to("#stars", {duration: 15, rotate: 90, ease: "none"});

        export function starsSpinAnimation(){
            return starsSpinTL; 
        }

gsap.set("#stars", {transformOrigin: "center "});