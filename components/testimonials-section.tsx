"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Sales Director",
    company: "TechCorp",
    content: "CRMFlow transformed our sales process. We've seen a 40% increase in conversion rates since switching.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "The automation features saved us countless hours. Our team can now focus on building relationships instead of data entry.",
    rating: 5,
    avatar: "/professional-man-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Sales",
    company: "GrowthCo",
    content: "Best CRM we've ever used. The insights and analytics help us make data-driven decisions every day.",
    rating: 5,
    avatar: "/professional-woman-headshot-hispanic.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
            Loved by sales teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {"See what our customers have to say about their experience with CRMFlow."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium mb-6 text-pretty">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
