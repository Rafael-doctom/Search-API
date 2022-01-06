function clicar (){
    
    const cep = document.getElementById("cep").value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(endereco => {
        console.log(endereco.cep)
        console.log(endereco.logradouro)
        console.log(endereco.bairro)
        console.log(endereco.localidade)
        console.log(endereco.ddd)
    })
    .catch(error => {
        console.log("erro")
    }) 
}
