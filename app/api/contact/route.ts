import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nombre, email, mensaje } = await req.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Zag Consultora <onboarding@resend.dev>',
    to: 'Zagconsultora@gmail.com',
    subject: `Nuevo mensaje de ${nombre}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
        <h2 style="color: #FF4500; margin-bottom: 24px;">Nuevo mensaje desde zagconsultora.com</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #888; width: 80px;">Nombre</td>
            <td style="padding: 8px 0; color: #111; font-weight: 500;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888;">Email</td>
            <td style="padding: 8px 0; color: #111; font-weight: 500;">${email}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 8px; color: #333; line-height: 1.6;">
          ${mensaje.replace(/\n/g, '<br/>')}
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #aaa;">Respondé directamente a ${email}</p>
      </div>
    `,
    replyTo: email,
  })

  if (error) {
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
