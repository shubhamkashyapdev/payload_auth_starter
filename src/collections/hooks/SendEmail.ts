import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendEmail = ({ to, subject, html }) => {
    const msg = {
        to,
        from: 'saffron.shubham@gmail.com',
        subject,
        html,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent successfully!')
        })
        .catch((error) => {
            console.error(error)
        })
}

export default sendEmail;