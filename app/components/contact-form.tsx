"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import emailjs from '@emailjs/browser'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
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
    <div className="relative">
      {/* Background animé */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      
      <Card className="p-8 backdrop-blur-sm bg-card/80 border-2 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Contactez-moi
            </h3>
            <p className="text-muted-foreground">Une question ? Un projet ? N'hésitez pas !</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                Nom
              </label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="transition-all duration-300 focus:scale-[1.02]"
                placeholder="Votre nom"
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-600" />
                Email
              </label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className="transition-all duration-300 focus:scale-[1.02]"
                placeholder="votre@email.com"
                required 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-pink-600" />
                Message
              </label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                className="transition-all duration-300 focus:scale-[1.02] min-h-[120px]"
                placeholder="Votre message..."
                required 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 group" 
              disabled={pending}
            >
              {pending ? (
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                  Envoi en cours...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Envoyer le message
                </span>
              )}
            </Button>
            {message && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-center mt-4 p-3 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
              >
                {message}
              </motion.p>
            )}
          </form>
        </motion.div>
      </Card>
    </div>
  )
}

