import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clipboard,
  Star,
  DropletsIcon as DragDropLines,
  Trash2,
  Zap,
  Lock,
} from "lucide-react";
import { Carousel, CarouselItem } from "@/components/carousel";
import type React from "react";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";

export default function PasteItLanding() {
  const reviews = [
    {
      text: "This extension has completely transformed how I fill out job applications!",
      author: "John D.",
      rating: 5,
    },
    {
      text: "The drag and drop feature is a game changer. So intuitive!",
      author: "Sarah M.",
      rating: 5,
    },
    {
      text: "Best clipboard manager I've ever used. Simple yet powerful.",
      author: "Michael R.",
      rating: 5,
    },
    {
      text: "PasteIt has saved me hours of time on repetitive tasks!",
      author: "Emily L.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 backdrop-blur-sm text-lg">
              Coming Soon to Chrome Store 🚀
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-white">
              PasteIt - Your Ultimate Copy-Paste Manager
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Store multiple copied text snippets, autofill forms, and reorder
              your clipboard with drag & drop. Perfect for job applications,
              forms, and more!
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-white/90"
            >
              Get PasteIt Free
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Power Users
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clipboard className="w-6 h-6" />}
              title="Multi-Text Clipboard"
              description="Store multiple copied snippets for easy access, perfect for filling out forms and applications."
            />
            <FeatureCard
              icon={<DragDropLines className="w-6 h-6" />}
              title="Drag & Drop Reordering"
              description="Prioritize important snippets by dragging them to your preferred order."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Smart Autofill"
              description="Intelligently recognizes form fields for name, email, phone, and more."
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6" />}
              title="Persistent Storage"
              description="Your clipboard stays intact even after browser restart."
            />
            <FeatureCard
              icon={<Star className="w-6 h-6" />}
              title="Enhanced UI"
              description="Clean, modern design with a floating clipboard for easy access."
            />
            <FeatureCard
              icon={<Trash2 className="w-6 h-6" />}
              title="Easy Management"
              description="Delete individual items or clear all with one click."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            See PasteIt in Action
          </h2>
          <div className="max-w-5xl mx-auto">
            <Carousel options={{ loop: true, slidesToScroll: 1 }}>
              <CarouselItem>
                <div className="p-4">
                  <Image
                    src="/images/img1.png"
                    alt="PasteIt Promo"
                    width={1200}
                    height={675}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <Image
                    src="/images/img1.png"
                    alt="PasteIt Promo"
                    width={1200}
                    height={675}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <Image
                    src="/images/img2.png"
                    alt="PasteIt Promo"
                    width={1200}
                    height={675}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <Image
                    src="/images/img3.png"
                    alt="PasteIt Promo"
                    width={1200}
                    height={675}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4">
                  <Image
                    src="/images/img4.png"
                    alt="PasteIt Promo"
                    width={1200}
                    height={675}
                    className="rounded-3xl shadow-lg"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-4 aspect-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/idaaTVNOVr4?si=XbvRTr5MH3TQ58Ee"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="max-w-3xl mx-auto">
            <Carousel options={{ loop: true, slidesToScroll: 1 }}>
              {reviews.map((review, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-xl mb-4">{review.text}</p>
                        <p className="text-gray-600">{review.author}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="How does PasteIt work?"
              answer="PasteIt is a browser extension that enhances your clipboard functionality. It allows you to store multiple copied items, reorder them, and paste them easily into forms or documents."
            />
            <FAQItem
              question="Is PasteIt secure?"
              answer="Yes, PasteIt takes your privacy and security seriously. All clipboard data is stored locally on your device and is not transmitted to any external servers."
            />
            <FAQItem
              question="Can I use PasteIt on multiple devices?"
              answer="Currently, PasteIt is a browser-based extension, so it works on any device where you have the supported browser installed. We're working on cross-device synchronization for future releases."
            />
            <FAQItem
              question="How much does PasteIt cost?"
              answer="PasteIt offers a free version with core features. We also have a premium version with advanced features for power users. Check our pricing page for more details."
            />
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quick Installation
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <Step
                number={1}
                title="Open Chrome Web Store"
                description="Navigate to the Chrome Web Store"
              />
              <Step
                number={2}
                title="Search for PasteIt"
                description="Find our extension in the store"
              />
              <Step
                number={3}
                title="Add to Chrome"
                description="Click 'Add to Chrome' button"
              />
              <Step
                number={4}
                title="Start Using"
                description="Click any input field to see your clipboard!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Clipboard Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already improved their productivity
            with PasteIt.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-white/90"
          >
            Install PasteIt Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="text-gray-400 mt-4">
                Your Ultimate Copy-Paste Manager
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-gray-400">tushar18yadav@outlook.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.linkedin.com/in/tusharyadav1812/"
                    className="hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PasteIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
