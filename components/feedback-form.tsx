"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Send } from "lucide-react"

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feedback submitted:", formData)
    setFormData({ name: "", email: "", rating: 0, feedback: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRating = (rating: number) => {
    setFormData({ ...formData, rating })
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Deixe seu <span className="text-purple-400">Feedback</span>
          </h2>
          <p className="text-gray-400">Sua opinião é muito importante para nós. Compartilhe sua experiência!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Nome</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="bg-gray-700/50 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="bg-gray-700/50 border-gray-600 text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Avaliação</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" onClick={() => handleRating(star)} className="transition-colors">
                  <Star
                    className={`w-8 h-8 ${star <= formData.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Seu Feedback</label>
            <Textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Conte-nos sobre sua experiência..."
              rows={5}
              className="bg-gray-700/50 border-gray-600 text-white"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar Feedback
          </Button>
        </form>
      </div>
    </section>
  )
}
