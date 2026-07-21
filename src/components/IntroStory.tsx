import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
const introImages = import.meta.glob('../assests/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>;
const mistyForest = introImages['../assests/misty_forest.jpeg'];
const forestPath = introImages['../assests/forest_path.jpeg'];
const lakeSunset = introImages['../assests/lake_sunset.jpeg'];
const waterRipples = introImages['../assests/water_ripples.jpeg'];

interface IntroStoryProps {
  onComplete: () => void;
}

export default function IntroStory({ onComplete }: IntroStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into native scroll for fluid, hardware-accelerated animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the progress with spring-physics for cinematic/liquid motion feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 75,
    mass: 0.5,
    restDelta: 0.0005
  });

  // Track state for indicator updates and fallback click highlights
  const [activeStage, setActiveStage] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
      
      // Determine current active stage based on scroll percent
      if (latest < 0.25) {
        setActiveStage(1);
      } else if (latest >= 0.25 && latest < 0.5) {
        setActiveStage(2);
      } else if (latest >= 0.5 && latest < 0.75) {
        setActiveStage(3);
      } else {
        setActiveStage(4);
      }

      // Auto-complete intro when they scroll to the very bottom of the fourth stage
      if (latest >= 0.985) {
        onComplete();
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, onComplete]);

  // Opacity transitions for blending background stages
  const opacityStage1 = useTransform(smoothProgress, [0, 0.23, 0.28], [1, 1, 0]);
  const opacityStage2 = useTransform(smoothProgress, [0.22, 0.27, 0.48, 0.53], [0, 1, 1, 0]);
  const opacityStage3 = useTransform(smoothProgress, [0.47, 0.52, 0.73, 0.78], [0, 1, 1, 0]);
  const opacityStage4 = useTransform(smoothProgress, [0.72, 0.77, 1.0], [0, 1, 1]);

  // Text transitions (fade & slight slide-up)
  const textY1 = useTransform(smoothProgress, [0, 0.18, 0.25], [0, -30, -80]);
  const textOpacity1 = useTransform(smoothProgress, [0, 0.18, 0.25], [1, 0.8, 0]);

  const textY2 = useTransform(smoothProgress, [0.22, 0.27, 0.43, 0.5], [40, 0, -30, -80]);
  const textOpacity2 = useTransform(smoothProgress, [0.22, 0.27, 0.43, 0.5], [0, 1, 0.8, 0]);

  const textY3 = useTransform(smoothProgress, [0.47, 0.52, 0.68, 0.75], [40, 0, -30, -80]);
  const textOpacity3 = useTransform(smoothProgress, [0.47, 0.52, 0.68, 0.75], [0, 1, 0.8, 0]);

  const textY4 = useTransform(smoothProgress, [0.72, 0.77, 0.95], [40, 0, 0]);
  const textOpacity4 = useTransform(smoothProgress, [0.72, 0.77, 0.95], [0, 1, 1]);

  // Programmatic scroll-to-stage utility
  const scrollToStage = (stageNum: number) => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    const totalHeight = element.scrollHeight - window.innerHeight;
    const targetScroll = totalHeight * ((stageNum - 1) / 3);
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full bg-stone-950 text-stone-100 font-sans selection:bg-amber-100 selection:text-stone-900"
      style={{ height: '400vh' }}
    >
      {/* Fixed Sticky Frame containing the viewport assets */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10">
        
        {/* Background Canvas Layer 1: Misty Forest (Aerial) */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(12,18,14,0.3) 0%, rgba(12,18,14,0.6) 100%), url('${mistyForest}')`,
            opacity: opacityStage1
          }} 
        />

        {/* Background Canvas Layer 2: Forest Path */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(12,18,14,0.4) 0%, rgba(12,18,14,0.7) 100%), url('${forestPath}')`,
            opacity: opacityStage2
          }} 
        />

        {/* Background Canvas Layer 3: Pristine Lake */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(12,18,14,0.3) 0%, rgba(12,18,14,0.6) 100%), url('${lakeSunset}')`,
            opacity: opacityStage3
          }} 
        />

        {/* Background Canvas Layer 4: Water Ripples */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(12,18,14,0.4) 0%, rgba(12,18,14,0.8) 100%), url('${waterRipples}')`,
            opacity: opacityStage4
          }} 
        />



        {/* Cinematic Content Stages overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between items-center px-6 py-20 md:py-24 max-w-5xl mx-auto text-center">
          
          {/* Top spacer to balance the content */}
          <div className="h-12" />

          {/* ACTIVE CONTENT OVERLAYS */}
          <div className="relative w-full flex items-center justify-center min-h-[35vh]">
            
            {/* STAGE 1 Overlay Content */}
            <motion.div 
              className="absolute w-full flex flex-col items-center justify-center space-y-6"
              style={{ opacity: textOpacity1, y: textY1, pointerEvents: activeStage === 1 ? 'auto' : 'none' }}
            >
              {/* Official Aranya Organic Logo */}
              <Logo className="w-20 h-20" />

              <div className="space-y-3">
                <h2 className="font-serif text-4xl md:text-6xl font-light tracking-[0.15em] text-white">
                  ARANYA
                </h2>
                <p className="text-xs tracking-[0.4em] font-mono text-amber-300 font-medium uppercase">
                  ORGANIC
                </p>
              </div>

              <p className="font-serif text-lg md:text-2xl italic text-stone-200 font-light max-w-xl leading-relaxed">
                "Rooted in Nature, Crafted for You."
              </p>
            </motion.div>

            {/* STAGE 2 Overlay Content */}
            <motion.div 
              className="absolute w-full flex flex-col items-center justify-center space-y-6"
              style={{ opacity: textOpacity2, y: textY2, pointerEvents: activeStage === 2 ? 'auto' : 'none' }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-amber-300 bg-black/30 px-3.5 py-1.5 rounded-full border border-amber-300/15 backdrop-blur-sm">
                Stage 02 • Wisdom of the Forest
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-snug text-white max-w-2xl">
                Inspired by the ancient, sun-dappled path.
              </h2>
            </motion.div>

            {/* STAGE 3 Overlay Content */}
            <motion.div 
              className="absolute w-full flex flex-col items-center justify-center space-y-6"
              style={{ opacity: textOpacity3, y: textY3, pointerEvents: activeStage === 3 ? 'auto' : 'none' }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-amber-300 bg-black/30 px-3.5 py-1.5 rounded-full border border-amber-300/15 backdrop-blur-sm">
                Stage 03 • Tranquil Lake
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-snug text-white max-w-2xl tracking-wide">
                Gaze upon the stillness of pristine lakes.
              </h2>
            </motion.div>

            {/* STAGE 4 Overlay Content */}
            <motion.div 
              className="absolute w-full flex flex-col items-center justify-center space-y-6"
              style={{ opacity: textOpacity4, y: textY4, pointerEvents: activeStage === 4 ? 'auto' : 'none' }}
            >
              {/* Elegant Metallic Shimmer Gold Logo on reflection */}
              <div className="space-y-4">
                <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-[0.2em] bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[pulse_6s_ease-in-out_infinite] select-none filter drop-shadow-[0_2px_15px_rgba(245,158,11,0.2)]">
                  ARANYA
                </h2>
                <p className="text-xs tracking-[0.5em] font-mono text-amber-300 font-bold uppercase select-none">
                  ORGANIC
                </p>
              </div>

              <p className="font-serif text-sm md:text-lg italic text-stone-200 max-w-md leading-relaxed select-none">
                Experience the pure botanical wisdom.
              </p>


            </motion.div>

          </div>

          {/* Bottom Dynamic Scroll Indicator */}
          <div className="w-full flex flex-col items-center gap-8 relative z-20">
            
            {/* Scroll Down Instruction Indicator */}
            <div className="flex flex-col items-center gap-2 pointer-events-none select-none">
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/25 backdrop-blur-md"
              >
                <ChevronDown className="h-4 w-4 text-amber-300" />
              </motion.div>
              
              <span className="text-[10px] tracking-[0.25em] font-mono text-stone-300 uppercase">
                {activeStage === 1 && "Scroll down to begin your journey"}
                {activeStage === 2 && "Scroll down to continue"}
                {activeStage === 3 && "Scroll down to discover more"}
                {activeStage === 4 && "Scroll down to enter Aranya Organic"}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
