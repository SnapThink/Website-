'use client'

import { ArrowRight, Brain, Shield, Zap, Server, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScheduleDemoModal  from '@/components/ScheduleDemoModal'
import ContactSalesModal from '@/components/ContactSalesModal'
import Image from 'next/image'
import DownloadExeModal from '@/components/DownloadExeModal'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center space-x-2" href="/">
            <Image src="/icon.jpg" alt="Snapthink Logo" width={40} height={40} />
            <span className="text-2xl font-normal" style={{ fontFamily: 'Segoe UI' }}>Snapthink</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 text-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#models">
            Models
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Enterprise AI That Stays
                  <span className="text-primary"> Local</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Deploy powerful language models on your infrastructure. Complete privacy, zero latency, unlimited
                  usage.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Test Download</Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  No data leaves your servers
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  15+ integrated models
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  Enterprise ready
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Local AI?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the power of AI without compromising on privacy, performance, or cost.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 text-center">

        <Card>
            <CardHeader className="text-center">
            <Shield className="h-10 w-10 mb-2 text-primary mx-auto" />
            <CardTitle>Complete Privacy</CardTitle>
            <CardDescription>
             Your data never leaves your infrastructure. Full compliance with GDPR, HIPAA, and enterprise
                    security requirements.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Integrated Models</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our curated selection of state-of-the-art language models, optimized for local deployment.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 text-center">
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-wrap items-center justify-between gap-2 text-left">
                    <span>Llama 2 & Code Llama</span>
                    <Badge variant="secondary">Popular</Badge>
                  </CardTitle>
                  <CardDescription>
                    Meta's powerful open-source models for general tasks and code generation. Optimized for enterprise
                    use.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">7B</Badge>
                    <Badge variant="outline">13B</Badge>
                    <Badge variant="outline">70B</Badge>
                    <Badge variant="outline">Code</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Mistral & Mixtral
                    <Badge variant="secondary">High Performance</Badge>
                  </CardTitle>
                  <CardDescription>
                    Efficient and powerful models from Mistral AI, perfect for production workloads with excellent
                    performance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">7B</Badge>
                    <Badge variant="outline">8x7B</Badge>
                    <Badge variant="outline">Instruct</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Falcon & StarCoder</CardTitle>
                  <CardDescription>
                    Specialized models for specific use cases including code generation, analysis, and domain-specific
                    tasks.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">7B</Badge>
                    <Badge variant="outline">40B</Badge>
                    <Badge variant="outline">Code</Badge>
                    <Badge variant="outline">Instruct</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Custom Models</CardTitle>
                  <CardDescription>
                    Bring your own fine-tuned models or let us help you create custom solutions for your specific needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Fine-tuned</Badge>
                    <Badge variant="outline">Domain-specific</Badge>
                    <Badge variant="outline">Custom</Badge>
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
                   <Button variant="outline">Read Documentation</Button>
                 </div>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Trusted by 500+ Companies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      From startups to Fortune 500 companies, organizations trust us with their AI infrastructure.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Enterprise Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      SOC 2 Type II certified with comprehensive security controls and compliance frameworks.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Deploy Local AI?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of companies already using our platform. Get started with a free consultation.
                </p>
              </div>
              <div className="space-x-4">
                 <Button size="lg">
                     Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                    <ContactSalesModal />
               </div>
              <p className="text-xs text-muted-foreground">
                No credit card required • 30-day free trial • Enterprise support included
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t text-center">
        <p className="text-xs text-muted-foreground">© 2024 SnapThink. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
