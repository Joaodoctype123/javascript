function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    // var r = n1 + n2 - n3
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
    // res.innerHTML = `A soma entre ${n1} + ${n2} - ${n3} é igual a ${r}`

}
function multiplicar() {
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var resu = window.document.getElementById('resu')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value) // vai dizer que 0 n4 é número e dizer que o tn4 tem um valor com o 'tn4.value'
    var r = n3 - n4 
    resu.innerHTML = `A subtração de ${n3} e ${n4} é igual a ${r}`
    
    
}