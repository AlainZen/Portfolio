"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import emailjs from "@emailjs/browser"

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
} else {
  console.warn(
    "[ContactForm] Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY env var; EmailJS will not be initialized."
  )
}

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error">("success")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const isEmailJsConfigured =
    Boolean(EMAILJS_PUBLIC_KEY) &&
    Boolean(EMAILJS_SERVICE_ID) &&
    Boolean(EMAILJS_TEMPLATE_ID)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      console.error("[ContactForm] Missing EmailJS configuration", {
        EMAILJS_PUBLIC_KEY,
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
      })
      setMessageType("error")
      setMessage(
        "Le service d'envoi d'email n'est pas configuré. Vérifiez vos variables d'environnement."
      )
      setPending(false)
      return
    }

    try {
      console.log("Tentative d'envoi d'email avec:", {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        data: formData,
      })

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      console.log("Réponse EmailJS:", response)

      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            templateParams
          )
        } catch (autoReplyError) {
          console.error("Erreur d'envoi de l'auto-reply:", autoReplyError)
        }
      }

      setMessageType("success")
      setMessage("Merci pour votre message ! Je vous répondrai bientôt.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      // EmailJS errors are often non-enumerable; stringify with property names to get details.
      console.error(
        "Erreur d'envoi:",
        error,
        JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      )

      const err = error as any
      const errorSnippet =
        err?.text || err?.message || err?.status || "(aucune info)"

      setMessageType("error")
      setMessage(
        `Une erreur s'est produite (${errorSnippet}). Veuillez réessayer.`
      )
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="relative">
      {/* Background animé */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-emerald-500/10 dark:from-teal-500/5 dark:via-cyan-500/5 dark:to-emerald-500/5" />
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
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
      
      <Card className="p-5 sm:p-8 backdrop-blur-sm bg-card/80 border-2 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent mb-2">
              Contactez-moi
            </h3>
            <p className="text-muted-foreground">Une question ? Un projet ? N'hésitez pas !</p>
          </div>
          
          {!isEmailJsConfigured && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-200">
              <p className="font-semibold">Le service d'envoi de mails n'est pas configuré.</p>
              <p className="mt-1">
                Ajoute les variables d'environnement <code className="rounded bg-slate-100 px-1 py-0.5 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
                </code> et redémarre le serveur.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4 text-teal-500" />
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
                disabled={!isEmailJsConfigured || pending}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500" />
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
                disabled={!isEmailJsConfigured || pending}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-500" />
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
                disabled={!isEmailJsConfigured || pending}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:from-teal-600 hover:via-cyan-600 hover:to-emerald-600 transition-all duration-300 group" 
              disabled={!isEmailJsConfigured || pending}
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
                className={`text-sm text-center mt-4 p-3 rounded-lg border ${
                  messageType === "error"
                    ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                    : "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                }`}
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

