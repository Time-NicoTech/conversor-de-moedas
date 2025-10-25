document.querySelector(".converter-btn").addEventListener("click", ()=>{
    const valorInput = document.querySelector(".input-valor").value;

    const btnAtivo = document.querySelector(".btn.active");
    
    const resultado = parseFloat(valorInput) * parseFloat(btnAtivoValor.dataset.valor);

    const simboloMap = {
        dolar: "$",
        euro: "€",
        libra: "£"
    }

    const display = document.querySelector(".display-valor");
    display.textContent = ``;

})

const calcularValor = (valor)=>{
    
}