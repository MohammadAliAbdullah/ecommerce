const mail = require('../config/MailConfig');
const mailgun = require('mailgun-js')({ apiKey: mail.apiKey, domain: mail.domain });

exports.mailSend = (to) => {
    const data = {
        from: `Abdullah Mailgun Test <${mail.from}>`,
        to: to,
        subject: 'Islami Flow Account Create Successfully',
        text: 'Testing some Mailgun awesomenesThe Tide and Flow of Islam” (Madd-o-Jazr-i Islām), Alt̤āf Ḥusayn Ḥālī’s main  poem, articulates the poet’s political views and expresses his aesthetic aspi-rations.'
    };
    try {
        mailgun.messages().send(data, function (error, body) {
            return body.message;
        });
    } catch (error) {
        console.log(error);
    }
}
