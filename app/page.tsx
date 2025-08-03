'use client'

import { ArrowRight, Brain, Shield, Zap, Server, Users, CheckCircle, Search, Clock, Wrench, TrendingUp, RotateCcw, Play } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScheduleDemoModal  from '@/components/ScheduleDemoModal'
import ContactSalesModal from '@/components/ContactSalesModal'
import Image from 'next/image'
import DownloadExeModal from '@/components/DownloadExeModal'
import DownloadMacModal from '@/components/DownloadMacModal'
import { Apple } from "lucide-react"
import { Book } from "lucide-react";
import { Bot } from "lucide-react";
import { Video } from "lucide-react"
import Script from 'next/script'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navigation */}
      <Script
        src="https://buttons.github.io/buttons.js"
        strategy="afterInteractive"
        />
      
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        {/* Logo */}
        <Link className="flex items-center space-x-2 flex-shrink-0" href="/">
          <Image src="/icon.jpg" alt="Snapthink Logo" width={32} height={32} className="rounded-md" />
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hidden sm:block">
            SnapThink
          </span>
        </Link>

        {/* Center nav and GitHub together */}
       <div className="flex items-center gap-4">
       
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 lg:gap-6 text-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#models">
              Models
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 px-2 py-1" href="#contact">
              Contact
            </Link>
          </nav>
          

          {/* GitHub Stars Button */}
          <div className="hidden sm:block">
                <a
                  className="github-button"
                  href="https://github.com/snapthinkllm/snapthinkllm"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star SnapThink on GitHub"
                >
                  Star
                </a>
              </div>

              
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Mobile Dropdown Nav */}
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg z-40 px-4 py-4 border-b">
              <nav className="flex flex-col gap-3 text-sm">
                <Link onClick={() => setMenuOpen(false)} href="#features" className="hover:underline">Features</Link>
                <Link onClick={() => setMenuOpen(false)} href="#models" className="hover:underline">Models</Link>
                <Link onClick={() => setMenuOpen(false)} href="#about" className="hover:underline">About</Link>
                <Link onClick={() => setMenuOpen(false)} href="#contact" className="hover:underline">Contact</Link>
                      </nav>
                    </div>
              )
            }

            </div>
            </header>
          {/* GitHub Stars Button 
          <div className="hidden sm:block">
            <a
                className="github-button"
                href="https://github.com/snapthinkllm/snapthinkllm"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star SnapThink on GitHub"
                >
                Star
             </a>
          </div>
        </div>
      </header>*/}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight lg:text-6xl flex items-center justify-center gap-2">
                    <span className="text-sky-400">SnapThink</span>
                        <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-sm">
                        Beta
                        </span>
                </h1>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build, Simulate, and Control Robots - Faster Than Ever.
                  {/* <span className="text-primary"> Local</span> */}
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Natural language to working simulation in seconds. Powered by AI. Designed for robotics.
                </p>
              </div>
              
                <section id="download" className="scroll-target space-x-4">
                <div className="space-x-2">
                  <DownloadExeModal />
                  <DownloadMacModal />
                  </div>
                </section>
              
              {/* GitHub Link with Icon */}
              <div className="pt-2">
                <a
                  href="https://github.com/snapthinkllm/snapthinkllm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors border border-gray-900 rounded px-5 py-1.5"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.94c.58.11.79-.25.79-.56v-2.01c-3.26.71-3.95-1.57-3.95-1.57a3.11 3.11 0 00-1.3-1.71c-1.06-.72.08-.71.08-.71a2.47 2.47 0 011.79 1.21 2.51 2.51 0 003.43.98 2.52 2.52 0 01.75-1.58c-2.6-.3-5.33-1.3-5.33-5.79A4.53 4.53 0 015.7 6.63a4.22 4.22 0 01.11-3.13s.98-.31 3.2 1.2a11 11 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2a4.22 4.22 0 01.11 3.13 4.52 4.52 0 011.2 3.13c0 4.5-2.74 5.49-5.34 5.78a2.83 2.83 0 01.81 2.2v3.27c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
                    />
                  </svg>
                  GitHub
                </a>
              </div>


              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  Natural language to robot control
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  Physics simulation environments
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  Real robot deployment ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Robotics Development Shouldn't Be This Hard
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-sm md:text-base">
              We've experienced the pain firsthand: countless hours wasted on tool setup, environment configuration, and manual iteration between code and simulation. The steep learning curve and fragmented toolchain creates a nightmare for knowledge transfer and auditing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-10 w-10 mb-2 text-red-500 mx-auto" />
                  <CardTitle className="text-lg">Painfully Slow</CardTitle>
                  <CardDescription>
                    Hours wasted on setup and configuration instead of building
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Wrench className="h-10 w-10 mb-2 text-orange-500 mx-auto" />
                  <CardTitle className="text-lg">Tool Fragmentation</CardTitle>
                  <CardDescription>
                    Disparate tools that don't work well together
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 mb-2 text-yellow-500 mx-auto" />
                  <CardTitle className="text-lg">High Barrier to Entry</CardTitle>
                  <CardDescription>
                    Deep robotics knowledge required to get started
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <RotateCcw className="h-10 w-10 mb-2 text-purple-500 mx-auto" />
                  <CardTitle className="text-lg">Manual Iteration</CardTitle>
                  <CardDescription>
                    Slow feedback loops between code and simulation
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                SnapThink Solves These Problems
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                One platform that unifies natural language commands, instant simulation, and seamless iteration. From prototype to production, without the complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-20 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                See SnapThink In Action
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
                Watch how natural language commands transform into working robot simulations in seconds. From simple requests to complex behaviors, see the power of AI-driven robotics development.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border bg-zinc-100 dark:bg-zinc-800">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HGA4uKR6GF0"
                  title="SnapThink Demo - Natural Language Robot Control"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Optional: Add a play button overlay for custom styling */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-primary/10 backdrop-blur-sm rounded-full p-4">
                  <Play className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                2-minute demo showing natural language to robot simulation workflow
              </p>
            </div>
          </div>
        </section>

        {/* Features and Plugins added*/}

        <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              One Platform. Infinite Possibilities.
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm md:text-base">
              Snapthink combines large language models with physics-based simulation, giving you an interactive loop to build and test robotic behavior—without writing low-level code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Book className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Natural Language to Code</CardTitle>
                  <CardDescription>
                    Notebooks embedded in SnapThink for Deep Research and experimentation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Bot className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Robot Simulation Plugin</CardTitle>
                  <CardDescription>
                    Chat-based interface that understands and controls robot functions with LLMs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Search className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Predictive Analytics on Robotics Data</CardTitle>
                  <CardDescription>
                    Explore Robotics data with built-in 2D/3D plots and analytical tools — no external tools needed.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Video className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Screen Recording + Training</CardTitle>
                  <CardDescription>
                    Record demos or training sessions from within SnapThink — simple, built-in, and shareable.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <ArrowRight className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Instant Code-to-Sim Loop</CardTitle>
                  <CardDescription>
                    Test, refine, and optimize robot behavior in seconds, not hours. Seamless natural language workflow.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Multi-Physics Engine Support</CardTitle>
                  <CardDescription>
                    PyBullet, MuJoCo, and Isaac Sim environments integrated. Switch between physics engines based on your needs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Zap className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Real-Time Visualization</CardTitle>
                  <CardDescription>
                    Watch your robots move in real-time with built-in 3D visualization and physics debugging tools.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Brain className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>AI-Powered Code Generation</CardTitle>
                  <CardDescription>
                    From "pick up the red cube" to optimized control algorithms - AI writes the robot code for you.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CheckCircle className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Test & Validate Behaviors</CardTitle>
                  <CardDescription>
                    Run comprehensive tests on robot behaviors with built-in validation tools and performance metrics.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">From Simulation to Reality</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Develop robot behaviors in simulation with confidence, knowing they'll work on real hardware. Complete privacy options available.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3 lg:gap-12 text-center">

          <Card>
            <CardHeader className="text-center">
            <Shield className="h-10 w-10 mb-2 text-primary mx-auto" />
            <CardTitle>Complete Privacy</CardTitle>
            <CardDescription>
             Your data never leaves your infrastructure. GDPR Ready, HIPAA, and enterprise
                    security requirements.
            </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
            <Brain className="h-10 w-10 mb-2 text-primary mx-auto" />
            <CardTitle>RAG Features</CardTitle>
            <CardDescription>
             Deliver accurate, context-aware responses grounded in your private data - all processed securely on your 
            infrastructure.
            </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="text-center">
            <Search className="h-10 w-10 mb-2 text-primary mx-auto" />
            <CardTitle>Semantic Search</CardTitle>
            <CardDescription>
             Upload your local documents and get intelligent search capabilities within chat sessions. Find relevant information instantly.
            </CardDescription>
            </CardHeader>
          </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Zero Latency</CardTitle>
                  <CardDescription>
                    Lightning-fast responses with local processing. No network delays or API rate limits to slow you
                    down.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Server className="h-10 w-10 mb-2 text-primary mx-auto" />
                  <CardTitle>Your Infrastructure</CardTitle>
                  <CardDescription>
                    Deploy on your existing servers, cloud, or edge devices. Full control over scaling and resource
                    allocation.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section id="models" className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Models for Robotics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our curated set of large language models, optimized for generating robot control code, sim behavior, and domain-specific logic—available both locally and in the cloud.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 text-center">
              <Card>
                <CardHeader>
                  <CardTitle>OpenAI Models</CardTitle>
                  <CardDescription>
                     GPT-4, GPT-4 Turbo, and GPT-3.5 with cloud-based processing for maximum performance in robotics code generation and complex reasoning tasks.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">GPT-4</Badge>
                        <Badge variant="outline">GPT-4 Turbo</Badge>
                        <Badge variant="outline">GPT-3.5</Badge>
                        <Badge variant="outline">Cloud</Badge>
                     </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Llama 3 & Code Llama</CardTitle>
                  <CardDescription>
                     Meta’s open-source models adapted for robot control tasks, Python generation, and simulation logic. Lightweight and fine-tunable.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">8B</Badge>
                    <Badge variant="outline">70B</Badge>
                    <Badge variant="outline">Code</Badge>
                    <Badge variant="outline">On-device</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gemma 3</CardTitle>
                  <CardDescription>
                    Task-specialized models with strong performance in control synthesis, reinforcement learning scaffolding, and planning logic.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">7B</Badge>
                    <Badge variant="outline">40B</Badge>
                    <Badge variant="outline">Control Logic</Badge>
                    <Badge variant="outline">RL Tasks</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Custom & Fine-Tuned</CardTitle>
                  <CardDescription>
                    Bring your own LLMs or let us help you fine-tune models for your robot hardware, simulation stack, or domain-specific workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Fine-tuned</Badge>
                    <Badge variant="outline">Robot-Specific</Badge>
                    <Badge variant="outline">Custom Control</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 text-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Enterprise</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We understand the unique challenges of deploying AI in enterprise environments. Our platform is
                    designed from the ground up for security, scalability, and reliability.
                  </p>
                </div>
                <div className="flex justify-center mt-6 space-x-4">
                   <ScheduleDemoModal />
                   <a
                    href="https://github.com/SnapThink/Documentations"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">Read Documentation</Button>
                  </a>
                 </div>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Built for Modern Teams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Designed for forward-thinking organizations ready to embrace the future of AI infrastructure.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Privacy-First Architecture
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Local LLM deployment ensures your sensitive data never leaves your infrastructure, maintaining complete privacy and control.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Building Robots with Natural Language Today</h2>
                <p className="max-w-[1000px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Join researchers and engineers already using SnapThink to accelerate their robotics development. Download now and experience the future of robot control.
                </p>
              </div>
              <div className="space-x-4">
                 <a href="#download">
                  <Button size="lg">
                    Download SnapThink
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                    <ContactSalesModal />
               </div>
              <p className="text-xs text-muted-foreground">
                Free to download • Windows & Mac supported • Open source
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-muted-foreground">© 2024 SnapThink. All rights reserved.</p>
      </footer>
    </div>
  )
}
