function formatarValor(valor, moeda){
    const moeadaMap = {
        dolar: {
            locale: "en-US",
            currency: "USD"
        },
        euro: {
            locale: "de-DE",
            currency: "EUR"
        },
        libra: {
            locale: "en-GB",
            currency: "GPB"
        }
    }

    return valor.toLocaleString(moeadaMap[moeda].locale, {
        style: "currency",
        currency: moeadaMap[moeda].currency
    })
}

document.querySelector(".converter-btn").addEventListener("click", ()=>{
    const valorInput = document.querySelector(".input-valor").value;

    const btnAtivo = document.querySelector(".btn.active");
    
    const resultado = formatarValor(parseFloat(valorInput) * parseFloat(btnAtivoValor.dataset.valor), btnAtivo.name);

   
    
    const display = document.querySelector(".display-valor");
    display.textContent = resultado;

})

const calcularValor = (valor)=>{
    
}