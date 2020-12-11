import {gsap} from "gsap";
import $ from "jquery";

console.log("gsap");
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);
import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, CustomEase, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin );

GSDevTools.create();

import {skaterLegsAnimation, scarfAnimation, skaterAnimation} from "./skater.js";
skaterLegsAnimation();
scarfAnimation();
// snowFallAnimation();

import {majorsAnimation, majorsTextAnimation} from "./majors.js";
import {finalAnimation, finalTextAnimation} from "./final.js";

import {starsAnimation, starsSpinAnimation} from "./start/stars.js";
starsAnimation();
starsSpinAnimation();

import {shadowsAnimation} from "./start/galaxy-shadows.js";
shadowsAnimation();

import {earthZoomAnimation} from "./start/earth-zoom.js";

import {cloudAnimation} from "./clouds/clouds.js";

const mainTL = gsap.timeline();

mainTL.add(earthZoomAnimation())
.add(cloudAnimation(), "-=1.1")
.to("#snowflakes", {onComplete: startTimer }, "-=3.3")
.add(skaterAnimation(), "-=1.5")
.add(majorsAnimation())
.add(majorsTextAnimation(), "-=4.7")
.add(finalAnimation())
.add(finalTextAnimation(), "-=4.6");

function makeItSnow(){
    for( var i = 0; i <= 40; i++){
        // create snowflake
        const newDiv = document.createElement("span");
        // give snowflake css styling 
        $(newDiv).addClass("snow-flakes");
    
        var randomPos = gsap.utils.random(-800, 800,1);
        var randomPos2 = gsap.utils.random(-1200, 800,1);
        var randomFall = gsap.utils.random(-100, 100,1);
        var randomFall2 = gsap.utils.random(-100, 100,1);
        var randomSize = gsap.utils.random(0.75, 1.5);
        var randomTime = gsap.utils.random(1, 6,1);
        var randomAlpha = gsap.utils.random(0.55, 0.75);
        
        document.getElementById("snowflakes").appendChild(newDiv); 
        // place the snowflake randomly on the stage
        gsap.set(newDiv, {x: randomPos, y: randomPos2, scale:randomSize});

        const snowTL = gsap.timeline();
        snowTL.fromTo(newDiv,{alpha:0},{duration:randomTime, scale:0, y: randomDirection(randomFall) + randomFall, x: randomDirection(randomFall2)+ randomFall2, alpha:randomAlpha})
        .to(newDiv,{alpha:0, scale:0,duration:0.25});

        console.log(randomFall +" 1");
        // console.log(randomFall2 +" 2");
    }
}

function randomDirection(directionNum){

    // console.log(directionNum);

    if(directionNum > 0){
        return "+=";
    }
    else{
        return "-=";
    }
}

// makeItSnow();

var timeLength = 0;
function startTimer(){
    window.setInterval(function(){
        timeLength++;
        if(timeLength <= 16){
            makeItSnow()
        }
      }, 1000);
}
