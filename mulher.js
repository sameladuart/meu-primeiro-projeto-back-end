const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333 

function mostraMulher(request,response) {
    response.json({
        nome: "Taylor Swift",
        imagem: "https://uploads.spacemoney.com.br/2024/10/taylor-swift-performs-on-stage-during-during-taylor-swift-the-eras-tour-at-anfield-on-june-13-2024-in-liverpool-england.webp",
        minibio: "cantora americana bilionária que já vendeu mais de 50 milhões de discos"
    })
}

function mostraPorta()
{
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)