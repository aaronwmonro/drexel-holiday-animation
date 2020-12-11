import {gsap} from "gsap";

import {CustomEase} from "gsap/CustomEase";
// import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin( CustomEase);

// GSDevTools.create();


const cloudTL = gsap.timeline();
cloudTL.fromTo("#clouds-zoom", {alpha:0, duration:.5}, {alpha:1, scale:1.2, duration:.8, ease: "none"})
.to("#cloud-1", {duration:1, scale:3,x:-100, ease: "power2.in"}, "-=.8 zoom")
.to("#cloud-2", {duration:1.25, scale:4, ease: "power2.in"}, "-=.8 zoom")
.to("#cloud-3", {duration:1.5, scale:3, ease: "power2.in"}, "-=.8 zoom")
.to("#cloud-4", {duration:1.75, scale:4, ease: "power2.in", y:100}, "-=.8 zoom")
.to("#cloud-5", {duration:2, scale:4, ease: "power3.in", x:-600, y:-500}, "-=.5 zoomTwo")
.to("#cloud-6", {duration:2.25, scale:4, ease: "power3.in"}, "-=.5 zoomTwo")
.to("#cloud-7", {duration:2.5, scale:4, ease: "power3.in"}, "-=.5 zoomTwo")
.to("#cloud-8", {duration:3, scale:3, ease: "power3.in"}, "-=.5 zoomTwo")

// .fromTo("#cloud-1", {x: -200, y:-200, duration: 2, scale:2}, {duration: 2, scale:7}, "cloudOne")
// .to("#cloud-1",  {duration: .5, alpha: 1, ease: "none"}, "cloudOne")
// .fromTo("#cloud-2", {x: 0, y:100, duration: 2, scale:2}, {duration: 2, scale:12, y:200}, "-=1.75")
// .to("#cloud-2",  {duration: .5, alpha: 1, ease: "none"}, "-=1.75")
// .fromTo("#cloud-3", { duration: 2, y:400, x:1300, scale:2}, {duration: 2, y:200, x:-280, scale:8}, "-=1.65")
// .to("#cloud-3",  {duration: .5, alpha: 1, ease: "none"}, "-=1.65")
// .fromTo("#cloud-4", { duration: 2, x:-500, scale:2}, {duration: 2, scale:8, x:400}, "-=1.55")
// .to("#cloud-4",  {duration: .5, alpha: 1, ease: "none"}, "-=1.55")
// .fromTo("#cloud-5", {x:200, y:600, duration: 2, scale:.8}, {duration: 2, scale:7, x:-100, y:-150}, "-=1.45")
// .to("#cloud-5",  {duration: .5, alpha: 1, ease: "none"}, "-=1.45")
// .fromTo("#cloud-6", {x: -700, y: -200, duration: 2, scale:2}, {duration: 2, scale:8, y: 170}, "-=1.45")
// .to("#cloud-6",  {duration: .5, alpha: 1, ease: "none"}, "-=1.45")
// .fromTo("#cloud-7", { duration: 2,scale:1, x: 400, y: -200}, {duration: 2, scale:8, x:-740, y: -300}, "-=1.35")
// .to("#cloud-7",  {duration: .5, alpha: 1, ease: "none"}, "-=1.35")
// .fromTo("#cloud-8", { duration: 2, x:-500, scale:2}, {duration: 2, scale:8, x:400}, "-=1.15")
// .to("#cloud-8",  {duration: .5, alpha: 1, ease: "none"}, "-=1.15")

  ;



        export function cloudAnimation(){
            return cloudTL; 
        }

        // gsap.set(".cloud-orgins-1", {transformOrigin: "right bottom"});
        // gsap.set(".cloud-orgins-2", {transformOrigin: "left top"});
        // gsap.set(".cloud-orgins-3", {transformOrigin: "left bottom"});
        // gsap.set(".cloud-orgins-4", {transformOrigin: "left bottom"});

        // gsap.set(".cloud-orgins-5", {transformOrigin: "right bottom"});
        // gsap.set(".cloud-orgins-6", {transformOrigin: "left top"});
        // gsap.set(".cloud-orgins-7", {transformOrigin: "right top"});
        // gsap.set(".cloud-orgins-8", {transformOrigin: "left bottom"});

        gsap.set("#clouds-zoom", {transformOrigin: "center"});
        gsap.set("#cloud-1", {transformOrigin: "center"});
        gsap.set("#cloud-2", {transformOrigin: "center"});
        gsap.set("#cloud-3", {transformOrigin: "0 center"});
        gsap.set("#cloud-4", {transformOrigin: "center"});
        gsap.set("#cloud-5", {transformOrigin: "center"});
        gsap.set("#cloud-6", {transformOrigin: "left center"});
        gsap.set("#cloud-7", {transformOrigin: "left center"});
        gsap.set("#cloud-8", {transformOrigin: "right center"});
        // gsap.set("#cloud-2", {transformOrigin: "right top"});
        // gsap.set("#cloud-3", {transformOrigin: "200 300"});
   