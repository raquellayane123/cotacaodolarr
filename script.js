//conectar com API do dólar simulando 

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)

    document.getElementById('valordolar').innerHTML = "R$ " + economia.USDBRL.bid
})