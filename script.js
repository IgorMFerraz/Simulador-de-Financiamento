let valor = document.getElementById('valor')
let tempo = document.getElementById('tempo')
let juros = document.getElementById('taxa')
let res = document.getElementById('resultado')
let parcelas = document.getElementById('parcelas')
let totalJuros = document.getElementById('totalJuros')
let btn = document.getElementById('calcular')

btn.addEventListener('click',calcular)
function calcular(){
    let C = valor.value
    let T = tempo.value
    let taxa = juros.value
    if(C == "" || T == "" || taxa == ""){
        alert('Insira todos os valores')
    } else {
    let I = taxa/100
    let totalFinanciado = C*(1+I)**T
    let parc = totalFinanciado / T
    let jurosTotal = totalFinanciado - C
    res.innerHTML ="Total finaciado: " + "R$ " + totalFinanciado.toFixed(2)
    parcelas.innerHTML = 'Valor da parcela: ' + "R$ " + parc.toFixed(2)
    totalJuros.innerHTML = 'Valor de juros: ' + "R$ " + jurosTotal.toFixed(2)
}
}