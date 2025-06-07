"use client";
import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const animationExamples = [
  {
    title: "Fade In Animation",
    description: "Basic opacity animation from 0 to 1",
    code: `gsap.fromTo(element, 
  { opacity: 0 }, 
  { opacity: 1, duration: 1 }
)`,
    category: "Basic"
  },
  {
    title: "Slide In From Left",
    description: "Element slides in from the left side",
    code: `gsap.fromTo(element, 
  { x: -100, opacity: 0 }, 
  { x: 0, opacity: 1, duration: 0.8 }
)`,
    category: "Movement"
  },
  {
    title: "Scale Up Animation",
    description: "Element scales from small to normal size",
    code: `gsap.fromTo(element, 
  { scale: 0.5, opacity: 0 }, 
  { scale: 1, opacity: 1, duration: 0.6 }
)`,
    category: "Transform"
  },
  {
    title: "Rotate and Fade",
    description: "Combines rotation with fade effect",
    code: `gsap.fromTo(element, 
  { rotation: -180, opacity: 0 }, 
  { rotation: 0, opacity: 1, duration: 1.2 }
)`,
    category: "Transform"
  },
  {
    title: "Stagger Animation",
    description: "Animates multiple elements with delay",
    code: `gsap.fromTo(elements, 
  { y: 50, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
)`,
    category: "Advanced"
  },
  {
    title: "Timeline Animation",
    description: "Sequential animations using timeline",
    code: `const tl = gsap.timeline();
tl.fromTo(element1, { opacity: 0 }, { opacity: 1, duration: 0.5 })
  .fromTo(element2, { x: -50 }, { x: 0, duration: 0.3 })
  .fromTo(element3, { scale: 0 }, { scale: 1, duration: 0.4 });`,
    category: "Advanced"
  },
  {
    title: "Text Split Animation",
    description: "Animates text character by character",
    code: `const split = new SplitText(element, { type: "chars" });
gsap.fromTo(split.chars, 
  { opacity: 0, y: 20 }, 
  { opacity: 1, y: 0, duration: 0.05, stagger: 0.02 }
)`,
    category: "Text"
  },
  {
    title: "Scroll Trigger",
    description: "Animation triggered by scroll position",
    code: `gsap.fromTo(element, 
  { opacity: 0, y: 100 }, 
  { 
    opacity: 1, 
    y: 0, 
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%"
    }
  }
)`,
    category: "Scroll"
  },
  {
    title: "Morphing Path",
    description: "SVG path morphing animation",
    code: `gsap.to(path, {
  morphSVG: newPath,
  duration: 2,
  ease: "power2.inOut"
})`,
    category: "SVG"
  },
  {
    title: "Parallax Effect",
    description: "Creates parallax scrolling effect",
    code: `gsap.to(element, {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger: element,
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
})`,
    category: "Scroll"
  },
  {
    title: "Elastic Bounce",
    description: "Bouncy animation with elastic easing",
    code: `gsap.fromTo(element, 
  { scale: 0 }, 
  { scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" }
)`,
    category: "Easing"
  },
  {
    title: "Infinite Rotation",
    description: "Continuous rotation animation",
    code: `gsap.to(element, {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: "none"
})`,
    category: "Loop"
  }
];

const easingTypes = [
  "none", "power1.out", "power2.out", "power3.out", "power4.out",
  "back.out(1.7)", "elastic.out(1, 0.3)", "bounce.out", "circ.out",
  "expo.out", "sine.out"
];

export default function AnimationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const demoBoxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const heroSplit = new SplitText(heroRef.current, { type: "chars,words" });
      gsap.fromTo(heroSplit.chars, 
        { opacity: 0, y: 50, rotateX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 0.8, 
          stagger: 0.02,
          ease: "back.out(1.7)"
        }
      );
    }

    // Cards stagger animation
    gsap.fromTo(cardsRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5
      }
    );

    // Demo boxes hover animations
    demoBoxesRef.current.forEach((box, index) => {
      if (box) {
        gsap.set(box, { 
          background: `hsl(${index * 30}, 70%, 50%)`,
          scale: 1
        });

        box.addEventListener('mouseenter', () => {
          gsap.to(box, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        box.addEventListener('mouseleave', () => {
          gsap.to(box, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const runAnimation = (type: string, index: number) => {
    const box = demoBoxesRef.current[index];
    if (!box) return;

    gsap.killTweensOf(box);

    switch (type) {
      case 'fadeIn':
        gsap.fromTo(box, { opacity: 0 }, { opacity: 1, duration: 1 });
        break;
      case 'slideLeft':
        gsap.fromTo(box, { x: -100 }, { x: 0, duration: 0.8 });
        break;
      case 'scaleUp':
        gsap.fromTo(box, { scale: 0 }, { scale: 1, duration: 0.6, ease: "back.out(1.7)" });
        break;
      case 'rotate':
        gsap.to(box, { rotation: 360, duration: 1, ease: "power2.inOut" });
        break;
      case 'bounce':
        gsap.fromTo(box, { y: -50 }, { y: 0, duration: 1, ease: "bounce.out" });
        break;
      case 'elastic':
        gsap.fromTo(box, { scale: 0 }, { scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" });
        break;
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 
          ref={heroRef}
          className="text-4xl md:text-6xl font-bold font-antonio text-foreground"
        >
          GSAP Animation Gallery
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive collection of GSAP animation examples and techniques for modern web development
        </p>
      </div>

      {/* Interactive Demo Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">Interactive</Badge>
            Live Animation Demos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['fadeIn', 'slideLeft', 'scaleUp', 'rotate', 'bounce', 'elastic'].map((type, index) => (
              <div key={type} className="text-center space-y-2">                <div
                  ref={el => { if (el) demoBoxesRef.current[index] = el; }}
                  className="w-16 h-16 mx-auto rounded-lg cursor-pointer"
                  onClick={() => runAnimation(type, index)}
                />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => runAnimation(type, index)}
                  className="w-full"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Click the boxes or buttons to see animations in action
          </p>
        </CardContent>
      </Card>

      {/* Animation Examples Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {animationExamples.map((example, index) => (          <Card 
            key={index}
            ref={el => { if (el) cardsRef.current[index] = el; }}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="font-antonio">{example.title}</span>
                <Badge variant="outline">{example.category}</Badge>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {example.description}
              </p>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{example.code}</code>
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Easing Functions Reference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">Reference</Badge>
            Common Easing Functions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {easingTypes.map((easing, index) => (
              <Badge key={index} variant="outline" className="justify-center p-2">
                {easing}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">Tips</Badge>
            Performance Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">✅ Do&apos;s</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Use transform properties (x, y, scale, rotation)</li>
                <li>• Batch DOM reads and writes</li>
                <li>• Use will-change CSS property sparingly</li>
                <li>• Prefer GSAP over CSS transitions for complex animations</li>
                <li>• Use invalidateOnRefresh for responsive animations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">❌ Don&apos;ts</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Avoid animating layout properties (width, height)</li>
                <li>• Don&apos;t animate too many elements simultaneously</li>
                <li>• Avoid long-running infinite animations</li>
                <li>• Don&apos;t forget to kill tweens on unmount</li>
                <li>• Avoid animating on every scroll event</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">Advanced</Badge>
            Advanced GSAP Techniques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Custom Ease Creation</h4>
              <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                <code>{`// Create custom ease using SVG path
const customEase = "M0,0 C0.14,0 0.242,0.438 0.272,0.561 0.313,0.728 0.354,0.963 1,1";
gsap.to(element, { x: 100, duration: 2, ease: customEase });`}</code>
              </pre>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">2. Motion Path Animation</h4>
              <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                <code>{`// Animate along SVG path
gsap.to(element, {
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
  },
  duration: 3,
  ease: "power2.inOut"
});`}</code>
              </pre>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">3. Physics-based Animation</h4>
              <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                <code>{`// Simulate physics with momentum
gsap.to(element, {
  x: 300,
  rotation: 360,
  duration: 2,
  ease: "power2.out",
  physics2D: {
    velocity: 200,
    angle: 45,
    gravity: 500
  }
});`}</code>
              </pre>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">4. Responsive Animations</h4>
              <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                <code>{`// Use matchMedia for responsive animations
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  gsap.to(element, { x: 100, duration: 1 });
});

mm.add("(max-width: 767px)", () => {
  gsap.to(element, { y: 100, duration: 1 });
});`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge variant="secondary">Resources</Badge>
            Useful Links &amp; Documentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-semibold">Official Resources</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <span className="font-medium">GSAP Documentation:</span> greensock.com/docs</li>
                <li>• <span className="font-medium">CodePen Examples:</span> codepen.io/GreenSock</li>
                <li>• <span className="font-medium">Learning Center:</span> greensock.com/learning</li>
                <li>• <span className="font-medium">Forums:</span> greensock.com/forums</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Community Tools</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <span className="font-medium">Ease Visualizer:</span> greensock.com/ease-visualizer</li>
                <li>• <span className="font-medium">SVG Path Editor:</span> yqnn.github.io/svg-path-editor</li>
                <li>• <span className="font-medium">CSS to GSAP:</span> css-to-gsap.com</li>
                <li>• <span className="font-medium">Animation Inspector:</span> Chrome DevTools</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
