const nodemailer = require('nodemailer')

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const formatDate = (date: string) => {
  if (!date) return '-'

  return new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  })
}

    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: 'alenovaistraveloficial@gmail.com',
        pass: 'khej tddo xusc fmsg',
      },
    })

    await transporter.sendMail({
      from: 'SEUEMAIL@gmail.com',

      to: 'alenovaistraveloficial@gmail.com',
      subject: `${body.name} • ${body.destination}`,
      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>Nova solicitação recebida</h2>

          <hr />

          <p><strong>Destino:</strong> ${body.destination}</p>

          ${formatDate(body.departure)}
          ${formatDate(body.returnDate)}
          <p><strong>Adultos:</strong> ${body.adults}</p>

          <p><strong>Crianças:</strong> ${body.children}</p>

          <p><strong>Bebês:</strong> ${body.babies}</p>

          <p><strong>Estilo:</strong> ${body.tripStyle}</p>

          <hr />

          <h3>Serviços</h3>

          <p>Hotel: ${body.hotel ? 'Sim' : 'Não'}</p>

          <p>Roteiro personalizado: ${body.itinerary ? 'Sim' : 'Não'}</p>

          <p>Ingressos: ${body.tickets ? 'Sim' : 'Não'}</p>

          <p>Seguro viagem: ${body.insurance ? 'Sim' : 'Não'}</p>

          <p>Transfer: ${body.transfer ? 'Sim' : 'Não'}</p>

          <hr />

          <h3>Contato</h3>

          <p><strong>Nome:</strong> ${body.name}</p>

          <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>

          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Instagram:</strong> ${body.instagram}</p>

          <hr />

          <p><strong>Observações:</strong></p>

          <p>${body.notes}</p>
        </div>
      `,
    })

    return Response.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}
