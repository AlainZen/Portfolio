"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

// Initialiser EmailJS (À ajouter)
emailjs.init("aL9Er_sw1ayqfy3DG") // Remplace par ta clé publique

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    
    if (!formRef.current) return
    
    try {
      // Configuration EmailJS
      const serviceId = "service_temw44h" // Remplace par ton ID de service
      const templateId = "template_x4t5pry" // Remplace par ton ID de template
      
      // Envoi de l'email via EmailJS avec la référence du formulaire directement
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        "YOUR_PUBLIC_KEY" // Remplace par ta clé publique
      )
      
      if (response.status === 200) {
        setMessage("Merci pour votre message ! Je vous répondrai bientôt.")
        formRef.current.reset()
      } else {
        throw new Error("Échec de l'envoi de l'email")
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error)
      setMessage("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}