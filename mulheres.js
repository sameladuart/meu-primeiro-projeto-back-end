const express = require ("express")
const router = express.Router()


const app = express()
const porta = 3333 

const mulheres = [
    {
        nome: "Taylor Swift",
        imagem: "https://uploads.spacemoney.com.br/2024/10/taylor-swift-performs-on-stage-during-during-taylor-swift-the-eras-tour-at-anfield-on-june-13-2024-in-liverpool-england.webp",
        minibio: "Cantora Americana"
    },
    {
        nome: "Iana Chan",
        imagem: "https://www.infomoney.com.br/wp-content/uploads/2021/02/iana_chan-e1615560698977.jpg?fit=402%2C287&quality=50&strip=all",
        minibio: "fundadora da programaria"
    },
    {
        nome: "Billie Eilish",
        imagem: "https://imagenes.elpais.com/resizer/v2/NWFSHZYFO5EHVBUYSIWTVXR6MI.aspx?auth=e3dfa52f0ceb53433948cadf50ee71cb1c692ba72d81a58f99724bf8bd3f54f4&width=980&height=980&smart=true",
        minibio: "cantora de 19 anos"
    }
]

function mostraMulheres(request,response) {
    response.json(mulheres)
}

function mostraPorta()
{
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)
