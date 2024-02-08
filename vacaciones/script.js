// const dias = 3
// const precioXDia = 40000
//const costoTotal = dias * precioXDia //120000
// const participantes = 6

// const van1Dia = 1;
// const van2Dias = 2;
// const van3Dias = 3;


function sumarArray(arr) {
let suma = 0;
for (const elemento of arr) {
    suma += elemento;
}
return suma;
}

function calcular() {
    // Obtener los valores del formulario
    const dias = parseInt(document.getElementById('dias').value);
    const precioXDia = parseFloat(document.getElementById('precioXDia').value);
    const costoTotal = dias * precioXDia 
    const participantes = parseInt(document.getElementById('participantes').value);
    const van1Dia = parseInt(document.getElementById('van1Dia').value);
    const van2Dias = parseInt(document.getElementById('van2Dias').value);
    const van3Dias = parseInt(document.getElementById('van3Dias').value);

// en estas variables se guardaran los datos de los montos a pagar 
//por dia que luego se sumaran para determinar cuanto pagara cada grupo
const precioX1Dia = [] //tendra solo 1 valor
const precioX2Dias = [] //tendra 2 valores
const precioX3Dias = [] //tendra 3 valores

//¿Cuanto se paga cada dia?

//DIA  1

//como minimo van un dia asi que el precio del 1er dia 
//es el precio por dia dividido el nro de participantes


const pagoPrimerDia = precioXDia / participantes // 6666,67
// console.log(pagoPrimerDia);
//se agrega el monto a los gruopos
precioX1Dia.push(pagoPrimerDia)
precioX2Dias.push(pagoPrimerDia)
precioX3Dias.push(pagoPrimerDia)



//DIA  2

//el pago del segundo dia es mayor ya que hay menos personas p/ pagar
//se toma nuevamente el pre x dia y se divide por los participantes
// que van 2 y 3 dias  

const pagoSegundoDia = precioXDia / (participantes - van1Dia) // 8000
// console.log(pagoSegundoDia);
//se agrega el monto a los gruopos
precioX2Dias.push(pagoSegundoDia)
precioX3Dias.push(pagoSegundoDia)


//DIA  3

//el dia 3 solo pagan los que quisieron ir 3 dias   

const pagoTercerDia = precioXDia /  van3Dias // 13333
// console.log(pagoTercerDia);
//se agrega el monto a los gruopos
precioX3Dias.push(pagoTercerDia)

console.log(`Si la casa sale ${precioXDia} por dia`)

console.log(`Y vamos ${participantes} del grupo, de los cuales : \n ${van1Dia} va 1 dia \n ${van2Dias} van 2 dias \n Y ${van3Dias} van 3 dias...`)


console.log('Los que van 1 dia tienen que pagar: $'+ sumarArray(precioX1Dia))
console.log('Los que van 2 dias tienen que pagar: $'+ sumarArray(precioX2Dias))
console.log('Los que van 3 dias tienen que pagar: $'+ sumarArray(precioX3Dias))

 
const sumaVal = (sumarArray(precioX1Dia)*van1Dia) + (sumarArray(precioX2Dias) * van2Dias)  + (sumarArray(precioX3Dias) * van3Dias)
// console.log(sumaVal);

if (sumaVal == costoTotal){
    console.log("Salio claaarita la cuenta.")
} else {
    console.log("Algo en la cuenta no esta bien, Dechi te esta estafando")
}


// Mostrar el resultado
const resultadoElement = document.getElementById('resultado');
resultadoElement.innerHTML = `
    <p>Si la casa sale <b>$${precioXDia}</b> por día</p>
    <p>Y vamos <b>${participantes}</b> del grupo, de los cuales :</p>
        <p><b>${van1Dia}</b> vagos van <b>1</b> día</p>
        <p><b>${van2Dias}</b> vagos van <b>2</b> días</p>
        <p><b>${van3Dias}</b> vagos van <b>3</b> días</p>
    <p>Los que van <b>1 día</b> tienen que pagar: <b>$${Math.round(sumarArray(precioX1Dia))}</b></p>
    <p>Los que van <b>2 días</b> tienen que pagar: <b>$${Math.round(sumarArray(precioX2Dias))}</b></p>
    <p>Los que van <b>3 días</b> tienen que pagar: <b>$${Math.round(sumarArray(precioX3Dias))}</b></p>
`;

// const sumaVal1 = (sumarArray(precioX1Dia) * van1Dia) + (sumarArray(precioX2Dias) * van2Dias) + (sumarArray(precioX3Dias) * van3Dias);

// if (sumaVal1 == costoTotal) {
//     resultadoElement.innerHTML += `<p><b>La cuanta salio clarita.</p>`;
// } else {
//     resultadoElement.innerHTML += `<p id="error"><b>Algo salio mal en la cuenta.</p>`;
//     let participantesQueVan = van1Dia + van2Dias + van3Dias;
//     if (participantes != participantesQueVan){
//         resultadoElement.innerHTML += `<p id="error"> El numero de participantes <b>NO SE CONDICE</b> con la suma del numero de personas que van 1, 2 y 3 dias.  </p>
//         <p><b>Revise los datos ingresados</p>
//         `;
//     }
// }

console.log(precioX1Dia,precioX2Dias,precioX3Dias);

// Mostrar el elemento de resultado
resultadoElement.style.display = "block";
}