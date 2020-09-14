import fetch from 'node-fetch'

const SENDGRID_API = 'https://sendgrid.api-docs.io'

const sendEmail = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: 'Demo success :)'
        }
      ],
      from: {
        email: 'ryandoyle@hey.com',
        name: 'Test SendGrid'
      },
      content: [
        {
          type: 'text/html',
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
        }
      ]
    })
  });
}

export { sendEmail };