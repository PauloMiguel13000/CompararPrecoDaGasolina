const msgResultado = document.querySelector("p");

function calcular(){
  const precoGasolina = parseFloat(document.getElementById("gasolina").value);
  const precoAlcool = parseFloat(document.getElementById("alcool").value);

  if(isNaN(precoGasolina)){
    msgResultado.innerHTML = "preço da gasosa invalida";
    return;

  }
  if(isNaN(precoAlcool)){
    msgResultado.innerHTML = "preço da alcool invalida";
    return;

  }
  console.log(precoAlcool/precoGasolina);
  if((precoAlcool/precoGasolina)>=0.7)
  msgResultado.innerHTML = "Abasteça com gasosa";
  else
  msgResultado.innerHTML = "Abasteça com alcool";
}