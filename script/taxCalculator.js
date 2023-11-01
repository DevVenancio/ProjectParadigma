document.getElementById("calculateTax").addEventListener("click", function(){
    const capitalValue = document.getElementById("capitalValue").value;
    const feeValue = (document.getElementById("feeValue").value) /100 ;
    const periodValue = document.getElementById("periodValue").value;

    const typeTax = document.querySelector('input[name="tipoJuros"]:checked').value;

    if(typeTax === "1"){
        const simpleTotal = capitalValue * (1 + feeValue * periodValue);
        document.getElementById("montanteValue").value = ("R$ " + simpleTotal.toFixed(2)).toString();
    }else if(typeTax === "2"){
        const compostTotal = capitalValue * (1 + feeValue) ** periodValue;
        document.getElementById("montanteValue").value = ("R$ " + compostTotal.toFixed(2)).toString();
    }
});

