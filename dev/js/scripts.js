import {gsap} from "gsap";

console.log("gsap");
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// gsap.registerPlugin(DrawSVGPlugin);
import {CustomEase} from "gsap/CustomEase";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools, CustomEase);

GSDevTools.create();





import {starsAnimation, starsSpinAnimation} from "./start/stars.js";
starsAnimation();
starsSpinAnimation();

import {shadowsAnimation} from "./start/galaxy-shadows.js";
shadowsAnimation();

import {earthZoomAnimation} from "./start/earth-zoom.js";


const mainTL = gsap.timeline();

mainTL.add(earthZoomAnimation(), "+=.75")

        ;
