// Enhanced by AI on 2025-08-13T02:18:56.836Z
// Section: about
// Category: about

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Home() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to helping businesses achieve their goals through strategic consulting and innovative solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description: "Our team of experts constantly explores new ideas and technologies to deliver cutting-edge strategies for our clients."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our top priority. We build long-term partnerships and tailor our services to your unique needs."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With offices around the world, we're able to support businesses of all sizes, from startups to enterprises."
    }
  ]

  const stats = [
    { value: "2015", label: "Founded", icon: Award },
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "99.9%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "10+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "JD",
      bio: "Former management consultant at McKinsey. 20+ years of experience leading successful business transformations."
    },
    {
      name: "Jane Smith",
      role: "Chief Strategy Officer",
      image: "JS",
      bio: "Ex-Bain consultant. Passionate about helping companies develop and execute winning strategies."
    },
    {
      name: "Michael Johnson",
      role: "Head of Operations",
      image: "MJ",
      bio: "Seasoned operations expert with a track record of driving efficiency and scalability for global enterprises."
    },
    {
      name: "Emily Chen",
      role: "Chief Innovation Officer",
      image: "EC",
      bio: "Award-winning innovator with a deep understanding of emerging technologies and their business applications."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Our Firm
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Businesses
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Through Strategic Consulting
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a team of experienced consultants dedicated to helping organizations
            achieve their goals and unlock their full potential.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, our consulting firm was born out of a desire to
                provide businesses with a more personalized, strategic approach
                to achieving their objectives.
              </p>
              <p>
                After years of working at large, impersonal consulting firms, we
                knew there had to be a better way to support our clients. So we
                built a team of experts dedicated to delivering tailored
                solutions and building long-term partnerships.
              </p>
              <p>
                Today, we're proud to have served over 500 clients across a
                variety of industries, helping them transform their operations,
                unlock new growth opportunities, and stay ahead of the curve.
              </p>
            </div>
            <Button className="group">
              Learn More About Our Firm
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "We believe great consulting should be accessible to businesses of all sizes, not just the Fortune 500."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              The talented individuals behind our success, working together to transform businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "The team at this consulting firm has been an invaluable partner in helping us navigate complex business challenges and unlock new growth opportunities."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jessica Davis</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStartup Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}