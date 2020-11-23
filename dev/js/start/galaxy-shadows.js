import {gsap} from "gsap";


const shadowsTL = gsap.timeline();
  shadowsTL.fromTo(".left-shadows", {duration: 4, x:-60, scale:1 }, {duration: 4, x:-20,  scale:1.1 }, "shadows")
  .fromTo(".right-shadows", {duration: 4, x:50,  scale:1  }, {duration: 4, x:-20,  scale:1.1 }, "shadows" )
  ;

        export function shadowsAnimation(){
            return shadowsTL; 
        }

