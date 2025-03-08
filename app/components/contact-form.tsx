"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from '@emailjs/browser'

emailjs.init("aL9Er_sw1ayqfy3DG");

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    
    try {
      console.log("Tentative d'envoi d'email avec:", {
        serviceId: "service_temw44h",
        templateId: "template_zuj6j5f",
        data: formData
      });
      
      const response = await emailjs.send(
        "service_temw44h", 
        "template_zuj6j5f",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );
      
      console.log("Réponse EmailJS:", response);
      setMessage("Merci pour votre message ! Je vous répondrai bientôt.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setMessage("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}

