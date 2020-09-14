import { sendEmail } from '../../lib/sendEmail';

const contactEmail = async (req, res) => {
  console.log('incomming req', req, res)

  const { name, email } = req;
  await sendEmail({ name, email });
  res.statusCode = 200
  res.json({ name: 'John Doe' })

  // return res.status(404).json({
  //   error: {
  //     code: 'not_found',
  //     message: "The requested endpoint was not found or doesn't support this method."
  //   }
  // })
}

export default contactEmail;