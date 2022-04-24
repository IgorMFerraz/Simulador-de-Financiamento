let valor = document.getElementById('valor')
let tempo = document.getElementById('tempo')
let juros = document.getElementById('taxa')
let res = document.getElementById('resultado')
let parcelas = document.getElementById('parcelas')
let totalJuros = document.getElementById('totalJuros')
let btn = document.getElementById('calcular')
let info = document.querySelector('.info')
btn.addEventListener('click',calcular)
function calcular(){
    let C = valor.value
    let T = tempo.value
    let taxa = juros.value
    let I = taxa/100
    if(C == "" || T == "" || taxa == ""){
        alert('Insira todos os valores')
    } else {
    let formulaCF = 1-(1+I)**-T
    let CF = I/formulaCF
    let valorParcelas = CF.toFixed(6) * C
    let valorTotalFinanciado = valorParcelas * T
    let jurosDoFinanciamento = valorTotalFinanciado - C

    res.innerHTML = `O valor pago de juros foi de R$ ${jurosDoFinanciamento.toFixed(2)}`
    parcelas.innerHTML= `O valor da parcela é de R$ ${valorParcelas.toFixed(2)}`
    totalJuros.innerHTML = `O valor total do financiamento é de R$ ${valorTotalFinanciado.toFixed(2)}` 
    info.style.display = 'block'

}
}