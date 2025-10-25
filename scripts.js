document.querySelector(".converter-btn").addEventListener("click", ()=>{
    const valorInput = document.querySelector(".input-valor").value;

    const btnAtivo = document.querySelector(".btn.active");
    
    const resultado = (parseFloat(valorInput) * parseFloat(btnAtivoValor.dataset.valor)).toLocaleString(
        'pt-br',
        {
            style:"currency",
            currency:"BRL"
        }
    );

    const simboloMap = {
        dolar: "$",
        euro: "€",
        libra: "£"
    }
    
    const display = document.querySelector(".display-valor");
    display.textContent = `${simboloMap[btnAtivo.getAttribute("name")]} ${resultado}`;

})

const calcularValor = (valor)=>{
    
}