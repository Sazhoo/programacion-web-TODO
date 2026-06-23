document
.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    const tipo =
    document.getElementById("tipoVehiculo").value;

    const placa =
    document.getElementById("placa")
    .value
    .toUpperCase()
    .trim();

    const ingreso =
    new Date(
        document.getElementById("ingreso").value
    );

    const salida =
    new Date(
        document.getElementById("salida").value
    );

    const picoPlaca =
    document.getElementById("picoPlaca").value;

    const pago =
    Number(
        document.getElementById("pago").value
    );

    let placaValida = false;

    if(tipo === "Automovil"){
        placaValida =
        /^[A-Z]{3}[0-9]{3}$/.test(placa);
    }else{
        placaValida =
        /^[A-Z]{3}[0-9]{2}[A-Z]$/.test(placa);
    }

    if(!placaValida){
        alert(
            "Por favor ingrese una placa válida."
        );
        return;
    }

    if(salida <= ingreso){
        alert(
            "La fecha de salida debe ser posterior al ingreso."
        );
        return;
    }

    const horaIngreso =
    ingreso.getHours();

    const horaSalida =
    salida.getHours();

    if(
        horaIngreso < 5 ||
        horaIngreso >= 12 ||
        horaSalida < 5 ||
        horaSalida >= 12
    ){
        alert(
            "El horario permitido es de 5:00 AM a 12:00 PM."
        );
        return;
    }

    const minutos =
    Math.ceil(
        (salida - ingreso)
        / (1000 * 60)
    );

    let tarifa = 0;

    if(tipo === "Automovil"){
        tarifa = 125;
    }else{
        tarifa = 95;
    }

    let valor =
    minutos * tarifa;

    valor =
    Math.ceil(valor / 50) * 50;

    if(
        tipo === "Automovil" &&
        picoPlaca === "Si"
    ){
        valor =
        valor * 0.75;

        valor =
        Math.ceil(valor / 50) * 50;
    }

    if(pago < valor){
        alert(
            "Dinero insuficiente para realizar el pago."
        );
        return;
    }

    let cambio =
    pago - valor;

    const denominaciones = [
        100000,
        50000,
        20000,
        10000,
        5000,
        2000,
        1000,
        500,
        200,
        100,
        50
    ];

    let detalleCambio = "";

    for(let d of denominaciones){

        let cantidad =
        Math.floor(cambio / d);

        if(cantidad > 0){

            detalleCambio +=
            `${cantidad} x $${d}<br>`;

            cambio =
            cambio % d;
        }
    }

    const horas =
    (minutos / 60).toFixed(2);

    document
    .getElementById("resultado")
    .innerHTML = `
        <h2>Recibo</h2>

        <p><strong>Tipo:</strong> ${tipo}</p>

        <p><strong>Placa:</strong> ${placa}</p>

        <p><strong>Tiempo:</strong> ${horas} horas</p>

        <p><strong>Valor a pagar:</strong>
        $${valor.toLocaleString()}</p>

        <p><strong>Cambio:</strong></p>

        ${detalleCambio}
    `;
});