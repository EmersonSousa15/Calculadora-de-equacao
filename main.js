let n1 = document.querySelector('input#txtn1')
let n2 = document.querySelector('input#txtn2')
let n3 = document.querySelector('input#txtn3')
let n = 0
let res = [document.querySelector('div#res')]
let explic = document.createElement('p')

function eNumero(n) {
  
  if (n1.value.length == 0|| n2.value.length == 0|| n3.value.length == 0 || n == 0) {
    return true
  } else {
    return false
  }
}

function resultado(n) {
  
  let delta = n.b ** 2 - 4 * n.a * n.c
  let raizD = Math.sqrt(delta)
  let bascara = { x1 : (-n.b +raizD) / (2 * n.a), x2: (-n.b -raizD) / (2 * n.a), d: delta, rD: raizD }
  return bascara
}


function calc() {
  if (eNumero()) {
    alert('[ERRO] Verifique os valores!')
  } else{
    n = {a: Number(n1.value), b: Number(n2.value), c: Number(n3.value)}
    let result = resultado(n)
     explic.innerHTML = `<p>O resultado da equação é <br><strong> &Delta; = ${result.d} / x' = ${result.x1.toFixed(2)} / x" = ${result.x2.toFixed(2)}</strong></p>`
    res.appendChild(explic)
  }
}

function explicacao() {
  if (eNumero(n)) {
    alert('[ERRO] Verifique os valores e calcule! ')
  } else {
  let valor = resultado(n)
  let nBaskara = {mult: - 4 * n.a, mult2: 2 * n.a, soma: -n.b + valor.rD, subt: -n.b - valor.rD}
  
    explic.innerHTML += '<h3>Explicação Delta</h3><br>'
    explic.innerHTML += `<strong>&Delta; = b² - 4ac</strong><br> 
    &Delta; = ${n.b}² -4 × ${n.a} × ${n.c}<br>
    &Delta; = ${n.b**2} -4 × ${n.a} × ${n.c}<br> 
    &Delta; = ${n.b**2} ${nBaskara.mult} × ${n.c}<br> 
    &Delta; = ${n.b**2} ${nBaskara.mult * n.c}<br> &Delta; = ${valor.d}<br>`
    if (valor.d > 0 && Number.isInteger(valor.rD)) {
    explic.innerHTML += `<h3>Explicação Baskara</h3> 
    <strong> -b +- &radic;&Delta;</strong><br> <strong>X = ------------------------</strong><br> <strong>2a<br> &darr; </strong> <br>
    ${-n.b} +- &radic;${valor.d}<br>
   X = ----------------------<br>
   2 * ${n.a}<br><strong> &darr; </strong><br>

    ${-n.b} +- ${valor.rD.toFixed(2)}<br>
   X = ----------------------<br>
    ${nBaskara.mult2}<br> <strong> &darr; </strong> <br>

   ${-n.b} + ${valor.rD.toFixed(2)}<br>
   X' = ----------------------<br>
    ${nBaskara.mult2}<br> <strong> &darr; </strong> <br>

  ${nBaskara.soma.toFixed(2)}<br>
   X' = -------------- = ${nBaskara.soma.toFixed(2) / nBaskara.mult2.toFixed(2)}<br>
    ${nBaskara.mult2}<br> <strong> &darr; </strong> <br> 

      ${-n.b} - ${valor.rD.toFixed(2)}<br>
   X" = ----------------------<br>
    ${nBaskara.mult2}<br> <strong> &darr; </strong> <br>

      ${nBaskara.subt.toFixed(2)}<br>
   X" = ----------------------<br>
    ${nBaskara.mult2}<br> <strong> &darr; </strong> <br>

    ${nBaskara.subt.toFixed(2)} <br>
   X" = -------------- = ${nBaskara.subt.toFixed(2) / nBaskara.mult2.toFixed(2)}<br>
    ${nBaskara.mult2}<br>`
    res.appendChild(explic)
    } else {
      explic.innerHTML += '<p>O resultado de delta não tem raiz</p>'
    }
  }
}

function limpar() {
  res = ''
  res = document.querySelector('div#res')
}
