function calcular(){
    let adultos_in = document.getElementById("adultos").value
    let criancas_in = document.getElementById("criancas").value
    let duracao_in = document.getElementById("duracao").value
    let resultado = document.getElementById("resultado")

    console.log("Adultos: " + adultos_in)
    console.log("Crianças: " + criancas_in)
    console.log("Duração: " + duracao_in)

    if (duracao_in <= 0){
        console.log("Favor fornecer um valor de duração válido")
        alert("Favor fornecer um valor de duração válido!")
    } else if (adultos_in <= 0 && criancas_in <= 0 ){
        console.log("Favor entrar com um numero para adultos e/ou crianças")
        alert("Favor entrar com um numero para adultos e/ou crianças")
    } else{

        if (duracao_in > 6){
            var carneppessoa = 650
            var cervejappessoa = 2000
            var refrippessoa = 1500
        }
        else{
            var carneppessoa = 400
            var cervejappessoa = 1200
            var refrippessoa = 1000
        }

        let carnetotal = ((carneppessoa * adultos_in) + (carneppessoa * criancas_in * 0.5)) / 1000
        let cervejatotal = (cervejappessoa * adultos_in)
        let refritotal = ((refrippessoa * adultos_in) + (refrippessoa * criancas_in * 0.5)) / 1000

        console.log("Carne total: " + carnetotal)
        console.log("Cerveja total: " + cervejatotal)
        console.log("Refri total: " + refritotal)

        resultado.innerHTML = `<p class="output">Você irá precisar de: `
        resultado.innerHTML += `<p class="output bold"><img src="./images/meat.png" width="30px">${carnetotal} Kg de carne`
        resultado.innerHTML += `<p class="output bold"><img src="./images/beer.png" width="30px">${Math.ceil(cervejatotal/355)} Latas de Cerveja`
        resultado.innerHTML += `<p class="output bold"><img src="./images/soda.png" width="30px">${Math.ceil(refritotal/2)} Garrafas de bebida`

    }
}