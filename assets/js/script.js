var btnClicar = document.getElementById("btn-clicar")

btnClicar.addEventListener("click", clicar)

function clicar (){
    const cep = document.getElementById("cep").value
    const px = document.getElementById("contador")
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(endereco => {
        px.innerHTML = `<div>
        CEP: ${endereco.cep} <br></br> 
        Logradouro: ${endereco.logradouro} <br></br>
        Bairro: ${endereco.bairro} <br></br>
        Localidade: ${endereco.localidade} <br></br>
        DDD: ${endereco.ddd}
        </div>`
        
        
        console.log("CEP", endereco.cep)
        console.log("Logradouro", endereco.logradouro)
        console.log("Bairro", endereco.bairro)
        console.log("Localidade", endereco.localidade)
        console.log("DDD", endereco.ddd)

    })
    .catch(error => {
        console.log("erro")
    }) 
}