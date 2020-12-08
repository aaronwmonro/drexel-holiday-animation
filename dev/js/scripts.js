import {gsap} from "gsap";

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

import {skaterLegsAnimation, scarfAnimation, skaterAnimation, snowFallAnimation} from "./skater.js";
skaterLegsAnimation();
scarfAnimation();
snowFallAnimation();

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
.add(cloudAnimation(), "-=.9")
.add(skaterAnimation(), "-=1.5")
.add(majorsAnimation())
.add(majorsTextAnimation(), "-=4.7")
.add(finalAnimation())
.add(finalTextAnimation(), "-=4.25")

        ;

