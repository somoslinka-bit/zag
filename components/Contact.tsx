'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

// Endpoint de Formspree (el ID se configura en .env.local y en Vercel)
const FORMSPREE_URL = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`

const Contact: React.FC = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '', website: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email, // Formspree lo usa como Reply-To
          message: form.mensaje,
          _subject: `Nuevo mensaje de ${form.nombre} — zagconsultora.com`,
          _gotcha: form.website, // honeypot: si viene con contenido, Formspree descarta el envío
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ nombre: '', email: '', mensaje: '', website: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
              ¡Trabajemos Juntos!
            </h2>
            <p className="text-lg text-gray-600 font-light mb-8">
              Agendemos una reunión y empecemos a trabajar en tus objetivos.
            </p>
            <a
              href="https://wa.me/5492494606868"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 font-medium transition-colors"
            >
              <MessageCircle size={20} />
              Hablemos
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10 max-w-2xl mx-auto border-t border-gray-100 pt-12"
          >
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-widest text-gray-500">O envíanos un mensaje directo</p>
            </div>

            {/* Honeypot antispam: invisible para personas, los bots lo completan */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 font-light"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 font-light"
              />
            </div>

            <textarea
              name="mensaje"
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto..."
              value={form.mensaje}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-gray-900 font-light"
            />

            {status === 'success' && (
              <div className="flex items-center gap-3 text-green-600 bg-green-50 px-5 py-4 rounded-xl">
                <CheckCircle size={20} />
                <span className="font-light">¡Mensaje enviado! Te contactamos pronto.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-3 text-red-500 bg-red-50 px-5 py-4 rounded-xl">
                <AlertCircle size={20} />
                <span className="font-light">Hubo un error. Intentá de nuevo o escribinos por WhatsApp.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-black text-white font-bold py-5 rounded-xl transition-all hover:opacity-90 disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
