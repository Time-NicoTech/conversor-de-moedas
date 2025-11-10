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
    const display = document.querySelector(".display-valor");

    if(!(input.value.trim() === "")){
        const btnAtivo = document.querySelector(".btn.active");
        let resultado;
        try{
            resultado = formatarValor(parseFloat(input.value) * parseFloat(btnAtivo.dataset.valor), btnAtivo.name);
            display.textContent = resultado;
        }
        catch (erro){
            display.textContent = "Valor inválido";
        }
        input.value = "";
    }else{
        display.textContent = "Digite alguma coisa";
    }
})

function trocarCor(btn){
    document.querySelector("body").style.background = "green";
}

document.querySelector("#btnCor").addEventListener("click", (e)=>{
    trocarCor(e.currentTarget);
});