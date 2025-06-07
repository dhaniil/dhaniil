"use client";
import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const fontShowcase = [
  {
    name: "Antonio",
    className: "font-antonio",
    description: "A refined and elegant sans-serif with variable weight capabilities. Antonio provides excellent versatility for both headers and body text with its clean geometric structure.",
    weights: ["100", "200", "300", "400", "500", "600", "700"],
    category: "Sans-serif",
    characteristics: "Geometric, Variable, Clean",
    bestFor: "Headings, UI Text, Body Text"
  },
  {
    name: "Geist",
    className: "font-geist-sans",
    description: "A modern sans-serif typeface designed for optimal readability across digital interfaces. Geist combines clean geometry with subtle humanist touches, making it perfect for both UI elements and body text.",
    weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    category: "Sans-serif",
    characteristics: "Modern, Readable, Versatile",
    bestFor: "UI Text, Body Text, Interface"
  },
  {
    name: "Fjalla One",
    className: "font-fjalla",
    description: "A medium contrast display sans serif. Fjalla One has been carefully adjusted to the restrictions of the screen, making it a perfect fit for digital interfaces and web typography.",
    weights: ["400"],
    category: "Display",
    characteristics: "Medium Contrast, Screen-optimized",
    bestFor: "Display Text, Interface Elements"
  }
];

const headingTexts = [
  "The Quick Brown Fox",
  "Typography Matters",
  "Beautiful Design",
  "Modern Typography",
  "Font Showcase"
];

export default function FontPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const heroSplit = SplitText.create(heroRef.current, { type: "chars" });
      gsap.from(heroSplit.chars, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.03,
      });
    }

    // Cards animation with stagger
    gsap.from(cardsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 
          ref={heroRef}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4"
        >
          Font Showcase
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our carefully curated collection of Google Fonts. Each typeface has been selected for its unique character and versatility in modern web design.
        </p>
      </div>

      {/* Font Showcase Grid */}
      <div className="grid gap-8 max-w-7xl mx-auto px-4">
        {fontShowcase.map((font, index) => (
          <Card key={font.name} ref={addToRefs} className="overflow-hidden border-2 hover:border-primary/20 transition-colors duration-300">
            <CardHeader className="bg-gradient-to-r from-muted/50 to-transparent">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl font-semibold">{font.name}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">{font.category}</Badge>
                    <Badge variant="outline">{font.weights.length} Weight{font.weights.length > 1 ? 's' : ''}</Badge>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Best for:</strong> {font.bestFor}</p>
                  <p><strong>Style:</strong> {font.characteristics}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6 p-6">
              {/* Large Display Text */}
              <div className="space-y-4">
                <h2 className={`text-5xl md:text-7xl ${font.className} leading-tight`}>
                  {headingTexts[index % headingTexts.length]}
                </h2>
                
                {/* Size Variations */}
                <div className="space-y-3">
                  <h3 className={`text-3xl ${font.className}`}>
                    Heading Level 1 - Large Display
                  </h3>
                  <h4 className={`text-2xl ${font.className}`}>
                    Heading Level 2 - Medium Display
                  </h4>
                  <h5 className={`text-xl ${font.className}`}>
                    Heading Level 3 - Small Display
                  </h5>
                </div>
              </div>

              <Separator />

              {/* Description and Paragraph Text */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Font Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {font.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Sample Text with {font.name}</h4>
                  <div className={`${font.className} space-y-2`}>
                    <p className="text-lg">
                      "Typography is the craft of endowing human language with a durable visual form."
                    </p>
                    <p className="text-base text-muted-foreground">
                      — Robert Bringhurst
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Weight Variations */}
              {font.weights.length > 1 && (
                <div>
                  <h4 className="text-lg font-semibold mb-4">Available Weights</h4>
                  <div className="grid gap-3">
                    {font.weights.map((weight) => (
                      <div key={weight} className="flex items-center gap-4">
                        <Badge variant="outline" className="w-16 justify-center">
                          {weight}
                        </Badge>
                        <span 
                          className={`${font.className} text-lg`}
                          style={{ fontWeight: weight }}
                        >
                          The quick brown fox jumps over the lazy dog
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}              {/* Character Set Preview */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Character Set</h4>
                <div className={`${font.className} space-y-2`}>
                  <p className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p className="text-sm">abcdefghijklmnopqrstuvwxyz</p>
                  <p className="text-sm">0123456789 !@#$%^&amp;*()_+-=[]{}|;:&apos;&quot;,./{'>'}?</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-16 mb-8">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">            <h3 className="text-2xl font-semibold mb-4">Typography Guidelines</h3>
            <div className="text-muted-foreground space-y-2">
              <p>• Use Fjalla One for headlines and attention-grabbing display elements</p>
              <p>• Antonio works well for both headings and body text with its variable weights</p>
              <p>• Geist is perfect for UI elements, interface text, and readable body content</p>
              <p>• Consider font pairing: combine Fjalla One with Antonio or Geist for contrast</p>
              <p>• Always test readability at different screen sizes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
