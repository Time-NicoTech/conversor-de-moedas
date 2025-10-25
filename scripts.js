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

document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        const btns = document.querySelectorAll(".btn");

        btns.forEach(btn=>{
            btn.classList.remove("active");
        })

        e.currentTarget.classList.add("active");
    })
})

document.querySelector(".converter-btn").addEventListener("click", ()=>{
    const input = document.querySelector(".input-valor");

    const btnAtivo = document.querySelector(".btn.active");
    
    const resultado = formatarValor(parseFloat(input.value) * parseFloat(btnAtivoValor.dataset.valor), btnAtivo.name);
    
    const display = document.querySelector(".display-valor");
    display.textContent = resultado;

    input.value = "";

})
