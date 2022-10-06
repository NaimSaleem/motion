import { gsap } from "gsap";


gsap.from('#first-line', {duration: 2, x: -100, alpha: 0});
gsap.from('#second-line', {duration: 2, x: 100, alpha: 0, delay: 2});
gsap.from('button', {duration: 1, y: '-100%', alpha:0, ease: 'bounce', delay: 4});
