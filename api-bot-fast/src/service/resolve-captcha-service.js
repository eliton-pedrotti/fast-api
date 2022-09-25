const axios = require("axios");
const sleep = require("../utils/sleep");

const { API_KEY } = process.env

async function resolveCaptcha(siteKey, siteUrl) {
    return new Promise(async (resolve, reject) => {

        let url = `http://2captcha.com/in.php?key=${API_KEY}&json=true&method=userrecaptcha&googlekey=${siteKey}&pageurl=${siteUrl}`;
        let resposta = await axios.get(url);

        console.log(resposta.data)

        try {

            resposta = resposta.data
            console.log(resposta)
            if (resposta.status !== 1) {
                return reject("falha ao obter id do captcha");
            }

            let captchaId = resposta.request;
            console.log(`Captcha ID é ${captchaId}`)

            while (1) {

                await sleep(15)
                console.log("verificando se o captcha está pronto");

                let respostaDois = await axios({
                    url: `http://2captcha.com/res.php?key=${API_KEY}&action=get&id=${captchaId}&json=true`,
                    method: 'GET'
                })

                console.log(respostaDois.data)
                resposta = respostaDois.data

                if (respostaDois.data.status == 1) {
                    return resolve(respostaDois.data)
                }

                if (respostaDois.data.request !== 'CAPCHA_NOT_READY') {
                    return reject(respostaDois.request)
                }
            }

        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}

module.exports = resolveCaptcha;