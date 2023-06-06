//Ejercicio 1
const salario = ()=>{  
    let horasT = document.getElementById('num1').value
    let tarifaP = document.getElementById('num2').value

    if (isNaN(horasT) || isNaN(tarifaP)) {
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(horasT > 40){
            let horasE = horasT - 40
            let tarifaE = tarifaP * 1.5
            salary = (40 * tarifaP) + (horasE * tarifaE)
        }else{
            salary = horasT * tarifaP
        }
    }

    document.getElementById("calcular").innerHTML = `$ ${salary}`;  

}  

//Ejercicio 2
const sueldoNeto = ()=>{
    sueldo = document.getElementById('one').value  
    
    if (isNaN(sueldo)) {
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(sueldo <= 1000){
            let descuento =  (10 * sueldo) / 100
            sueldod = sueldo - descuento 
        }
        if(sueldo > 1000  && sueldo <= 2000){
            let descuento =  (5 * sueldo) / 100
            sueldod = sueldo - descuento 
        }
        if(sueldo > 2000 ){
            let descuento =  (3 * sueldo) / 100
            sueldod = sueldo - descuento 
        }
    }

    document.getElementById("calcularS").innerHTML = `$ ${sueldod}`;  

}

//ejecicio 3
const descuentoC = ()=>{
    desc = document.getElementById('tres').value

    if(isNaN(desc)){
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(desc > 100){
            let cantidad = (10 * desc) / 100
            cantidadR = desc - cantidad
        }
        if(desc <= 100){
            let cantidad = (2 * desc) / 100
            cantidadR = desc - cantidad
        }
    }
    document.getElementById("can").innerHTML = `${cantidadR}`;  
}

//Ejercicio 4
const tiempo = ()=>{
    segundos = document.getElementById('seg').value

    if(isNaN(segundos)){
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(segundos > 60){
            min = Math.ceil(segundos / 60)
            seg = (min * 60) - segundos
        }
        if(segundos <= 60){
            min = 1
            seg = 60 - segundos
        }
    }
    document.getElementById("time").innerHTML = `Faltan ${seg} segundos para ${min}  minutos`; 
}

//Ejercicio 5
const diasHM = ()=>{
    minutos = document.getElementById('min').value

    if(isNaN (minutos)){
        alert('Ingrese la cantidad solo en numeros')
    }else{

        if(minutos < 60){
            d = 0
            h = 0
            m = minutos
        }else{
            d = Math.floor(minutos / (60*24)) 
            h = Math.floor( (minutos % (60 * 24)) / 60)
            m = minutos % 60

        }
    }

    document.getElementById('day').innerHTML = `${d} dias, ${h} horas, ${m} minutos`

}

//Ejercicio 6
const pago = ()=>{
    let horas = document.getElementById('n1').value
    let tarifa = document.getElementById('n2').value

    if(isNaN(horas) || isNaN(tarifa)){
        alert('Ingrese la cantidad solo en numeros')
    }else{
        p = horas * tarifa
    }
    document.getElementById('pago').innerHTML = `Su salario es de $${p}`
}

//Ejercicio 7
const factura = ()=>{
    let unidad = document.getElementById('uni').value
    let precio = document.getElementById('pre').value


    if (isNaN(unidad) || isNaN(precio)) {
        alert('Ingrese la cantidad solo en numeros')
    }else{
        
        precioN = precio * unidad
        iva = precioN * .15
        total = precioN + iva  
        descuentoN = 0 
        if(total > 50){
            descuentoN = total * .05
        }
    }

    document.getElementById("total").innerHTML = `$ ${total - descuentoN}`;  
}

//Ejercicio 8
const edad = ()=>{
    let edadI = document.getElementById('edad').value

    if(isNaN(edadI)){
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(edadI <= 10){
            edadr = 'Niño'
        }
        if(edadI >= 11 && edadI <= 14){
            edadr = 'Puber'
        }
        if(edadI >= 15 && edadI <= 18){
            edadr = 'Adolescente'
        }
        if(edadI >= 19 && edadI <= 25){
            edadr = 'Joven'
        }
        if(edadI >= 26 && edadI <= 65){
            edadr = 'Adulto'
        }
        if(edadI > 65){
            edadr = 'Anciano'
        }
    }
    document.getElementById("year").innerHTML = `${edadr}`; 
}

//Ejercicio 9
const programacion = ()=>{
    let hora = document.getElementById('hora').value

    if(isNaN(hora)){
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(hora >= 10 && hora <= 12){
            pro = 'Dibujos animados'
        }
        if(hora >= 13 && hora <= 16){
            pro = 'Tele serie'
        }
        if(hora >= 16 && hora <= 18){
            pro = 'Novelas repetidas'
        }
        if(hora >= 18 && hora <= 22){
            pro = 'Dibujos Animados'
        }
        if(hora >= 22 && hora < 24){
            pro = 'Noticiero'
        }
        if(hora >= 24 || hora <= 9){
            pro = 'No hay programacion'
        }
    }
    document.getElementById("pro").innerHTML = `${pro}`; 
}

//Ejercicio 10
const triangulo = () =>{
    let l1 = document.getElementById('l1').value
    let l2 = document.getElementById('l2').value
    let l3 = document.getElementById('l3').value

    if(isNaN(l1) || isNaN(l2) || isNaN(l3)){
        alert('Ingrese la cantidad solo en numeros')
    }else{
        if(l1 === l2 && l1 === l3 && l2 === l3){
            triangulos = 'Triangulo Equilatero'
        }
        if((l1 === l2 && l1 != l3) || (l1 === l3 && l1 != l2) || (l2 === l3 && l2 != l1)){
            triangulos = 'Triangulo Isósceles'
        }
        if(l1 != l2 && l1 != l3 && l2 != l3){
            triangulos = 'Triangulo Escaleno'
        }
    }
    document.getElementById("tri").innerHTML = `${triangulos}`; 
}

//Ejercicio 11
const sueldoV = () => {
    let venta = document.getElementById('venta').value

    if(isNaN(venta)){
        alert('Ingrese la cantidad en numeros')
    }else{
        if(venta >= 10000){
            comision = (15 * venta) / 100 
            sueldo = parseInt(venta) + parseInt(comision)
        }
        if(venta >= 5000 && venta < 10000){
            comision = (5 * venta) / 100
            sueldo = parseInt(venta) + parseInt(comision)
        }
        if(venta < 5000){
            sueldo = venta
        }
    }
    document.getElementById('sueldoC').innerHTML = `$${sueldo}`;
}

// Ejercicio 12
const ingreso = () =>{
    let c1 = document.getElementById('c1').value
    let c2 = document.getElementById('c2').value
    let c3 = document.getElementById('c3').value
    let c4 = document.getElementById('c4').value
    let c5 = document.getElementById('c5').value
    if(c1 === 'TIENES'){
        if(c2 === 'QUE SER'){
            if(c3 === 'INVITADO'){
                if(c4 === 'PARA'){
                    if(c5 === 'INGRESAR'){
                        ingresar = 'BIENVENIDO A LA FIESTA'
                    }else{
                        ingresar = 'TE EQUIVOCASTE DE FIESTA'
                    }
                }else{
                    ingresar = 'TE EQUIVOCASTE DE FIESTA'
                }
            }else{
                ingresar = 'TE EQUIVOCASTE DE FIESTA'
            }
        }else{
            ingresar = 'TE EQUIVOCASTE DE FIESTA'
        }
    }else{
        ingresar = 'TE EQUIVOCASTE DE FIESTA'
    }
    document.getElementById('ingresar').innerHTML = `${ingresar}`
}

//Ejercicio 13
const calc2grad = (a,b,c)=>{
    var a=parseFloat(document.getElementById("a").value);
    var b=parseFloat(document.getElementById("b").value);
    var c=parseFloat(document.getElementById("c").value);

    discriminante=Math.pow(b,2)-4*a*c;
      if(discriminante<0){
        info ="Existen dos raíces imaginarias [dis<0]"
        x1 = 0
        x2 = 0
      }else if(discriminante==0){
        info ="Tiene una sola solución [dis==0]"
        x1 =parseFloat((-b)/(2*a));
      }else{
        info ="Tiene dos solución [dis>0]"
        x1=parseFloat(((-b)+Math.sqrt(discriminante))/(2*a));
        x2=parseFloat(((-b)-Math.sqrt(discriminante))/(2*a));
      }
      document.getElementById('info').innerHTML = `${info} ${x1}, ${x2}`
}

//Ejercicio 14
const totalPagar = ()=>{
    let compra = document.getElementById('compra').value
    if(isNaN(compra)){
        alert('Ingrese la cantidad en numeros')
    }else{
        if(compra >= 500){
            descuento4 = (30 * compra) / 100
            pagoTotal = compra - descuento4
        }
        if(compra < 500 || compra === 200){
            descuento4 = (20 * compra) / 100
            pagoTotal = compra - descuento4
        }
        if(compra < 200 || compra === 100){
            descuento4 = (10 * compra) / 100
            pagoTotal = compra - descuento4
        }
        if(compra < 100){
            pagoTotal=compra
        }
    }
    document.getElementById('compra4').innerHTML = `$${pagoTotal}`
}


//Ejercicio 15
const numerosN = ()=>{
    let numeros = document.getElementById('number').value;
    numeros = numeros.split(',').map(numero => parseInt(numero.trim()))
    
    menores = []
    mayores = []
    entre = []
        for(let i = 0; i < numeros.length; i++){
            const numero = numeros[i]

            if(numero < 0) break
            if(numero < 15){
                menores.push(numero)
            }
            if(numero >= 25 && numero <= 50){
                entre.push(numero)
            } 
            if(numero > 50){
                mayores.push(numero)
            }
            
        }
    document.getElementById('num').innerHTML =  `Numeros menores a 15:( ${menores}), Numeros mayores a 50:( ${mayores}), Numeros entre 25 y 50:( ${entre})`
}

//Ejercicio 16
const sumaN = ()=>{
    let numNa = document.getElementById('numNa').value;
    if(isNaN(numNa)){
        alert('Ingrese la cantidad en numeros');
    }else{
        cont16 = 0
        suma16 = 0
        while (cont16 <= numNa){
            suma16 = suma16 + cont16;
            cont16 = cont16 + 1;
        }
    }
    document.getElementById('suma16').innerHTML =  `Suma: ${suma16}`
}

//Ejercicio 17
const salarioTrabajadores = ()=>{  
    let horasTra = document.getElementById('nm1').value;
    let tarifaPag = document.getElementById('nm2').value;

    if (isNaN(horasTra) || isNaN(tarifaPag)) {
        alert('Ingrese la cantidad solo en numeros');
    }else{
        if(horasTra > 40){
            let horasEn = horasTra - 40
            let tarifaEn = tarifaPag * 1.5
            let salarios = (40 * tarifaPag) + (horasEn * tarifaEn)
            salarioN = salarios * 200
        }else{
            salarios = horasTra * tarifaPag
            salarioN = salarios * 200
        }
    }

    document.getElementById("calc").innerHTML = `$ ${salarioN}`;  
} 

//Ejercicio 18
const calcularNotas = () => {
    let notasInput = document.getElementById("notasInput");
    let notasText = notasInput.value.trim();
    
    if (notasText === "") {
      alert("Por favor ingresa las notas separadas por .");
      return;
    }
    
    const notasArray = notasText.split(" ").map((nota) => parseInt(nota.trim(), 10));
    
    let notasReprobadas = 0;
    let notasAprobadas = 0;
    let sumaNotas = 0;
    let sumaNotasAprobadas = 0;
    let sumaNotasReprobadas = 0;
    
    for (let i = 0; i < notasArray.length; i++) {
      sumaNotas += notasArray[i];
    
      if (notasArray[i] < 6) {
        notasReprobadas++;
        sumaNotasReprobadas += notasArray[i];
      } else {
        notasAprobadas++;
        sumaNotasAprobadas += notasArray[i];
      }
    }
    
    const promedioNotas = sumaNotas / notasArray.length;
    const promedioNotasAprobadas = notasAprobadas > 0 ? sumaNotasAprobadas / notasAprobadas : 0;
    const promedioNotasReprobadas = notasReprobadas > 0 ? sumaNotasReprobadas / notasReprobadas : 0;
    
    document.getElementById("resultados"). innerHTML = `Notas reprobadas: ${notasReprobadas}, Notas aprobadas: ${notasAprobadas}, Promedio de notas: ${promedioNotas} Promedio de notas aprobadas: ${promedioNotasAprobadas}, Promedio de notas reprobadas: ${promedioNotasReprobadas}`;
  }

//Ejercicio 19
const sumaDigitos = () =>{
    let numeroNatural = document.getElementById('numeroNatural').value

    if(isNaN(numeroNatural)){
        alert('Ingrese la cantidad solo en numeros');
    }else{
        sumaNatural = 0;
        while( numeroNatural > 0){
            sumaNatural = sumaNatural + (numeroNatural % 10)
            numeroNatural = Math.floor(numeroNatural / 10)
        }
    }
    document.getElementById('sumaNatural').innerHTML = `Suma de los digitos ${sumaNatural}`
} 

//Ejercicio 20 
const numerosTipo = ()=>{
    let numeroType = document.getElementById('numeroType').value;
    numeroType = numeroType.split(',').map(numerosArray => parseInt(numerosArray.trim()))

    par = []
    impar = []
    positivo = []
    negativo = []

        for(let i = 0; i < numeroType.length; i++){
            let numerosArray = numeroType[i]

            if (numerosArray % 2 === 0) {
                par.push(numerosArray)
            }else{
                impar.push(numerosArray)
            }

            if(numeroType > 0) {
                positivo.push(numerosArray)
            }else if(numeroType < 0){
                negativo.push(numerosArray)
            }
            
        }
    document.getElementById('type'). innerHTML = `Pares: (${par}), Impares: (${impar}), Positivos: (${positivo}), Negativos: (${negativo})`
}


//Ejercicio 21
const factorial = ()=>{
    let fact = document.getElementById('fact').value

    if(isNaN(fact)){
        alert('Ingrese la cantidad solo en numeros')
    }else{

        let factor = 1
        for(let i = fact; i > 0; i--){
            factor *= i
        }
        document.getElementById('facto'). innerHTML = `El factorial ${factor}`
    }
}

//Ejercicio 22
const medianumeros = ()=>{
    let media = document.getElementById('media').value;
    media = media.split(',').map(sumar => parseInt(sumar.trim()))

    if(media.length === 0){
        alert('El arreglo esta vacio')
        return
    }

    let sumar = 0
    for(let i = 0; i < media.length; i++){
        sumar += media[i]
    }

    let mediaN = sumar / media.length

    console.log(mediaN)
    document.getElementById('calcMedia'). innerHTML = `La media de los numeros es: ${mediaN}`
}


//Ejercicio 23
const sumaNumerosPares = ()=>{

    let sumar = 0
    let totalidad = 1

    for(let numb = 20; numb <= 400; numb += 2){
        if(numb % 2 == 0){
            sumar = sumar + numb
            totalidad *= numb
            console.log(totalidad) 
        }
    }
    document.getElementById('sumaPares'). innerHTML = `Suma de numeros: ${sumar}, Producto de las numeros:`
}

//Ejerecicio 24
const noVocales = () => {
    let caracteres = document.getElementById('caracteres').value;
    caracteres = caracteres.split(',').map(vocal => vocal.trim());
  
    const vocales = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < caracteres.length; i++) {
      const caracter = caracteres[i].toLowerCase();
      if (vocales.includes(caracter)) {
        document.getElementById('char').innerHTML = `La primera vocal encontrada es: ${caracter}`;
        return;
      }
    }
  
    document.getElementById('char').innerHTML = 'No se encontraron vocales en el arreglo.';
  }

//Ejercicio 25
const maxMin = ()=>{
    let numbers = [2,3,4,45,56,65,575,76,344,213,1332,453,56,5,6,475,6,2134,45,56,77,899,56,53,143,474,445,2,423,42,4,342,54,5,35,46,4,676,520,2129,324,86,879,43,1]

    let max = -Infinity
    let min = Infinity
    let maxId
    let minId

    for (let i = 0; i < numbers.length; i++) {
        let n = numbers[i]
        let id = i + 1

        if (n > max) {
            max = n
            maxId = id
        }

        if (n < min) {
            min = n
            minId = id;
        }
        numbers[i] = {id: id, value: n}
    }
    document.getElementById('maxmin').innerHTML = `Cuenta con mayor cantidad de dinero (ID ${maxId}): $${max}, Cuenta con menor cantidad de dinero (ID ${minId}): $${min}`
}

//Ejercicio 26
const jornalMes = () => {
    let turnoTrabajo = document.getElementById('turnoTrabajo').value;
    let diasTrabajo = document.getElementById('diasTrabajo').value;
    let horasTrabajo = document.getElementById('horasTrabajo').value;
  
    const tarifaDiurno = 10;
    const tarifaNocturno = 20;
    const horasMin = 15;
    const maximoDias = 5;
  
    let pago = 0;
    let diasTrabajados = 0;
    
    if (isNaN(diasTrabajo) || isNaN(horasTrabajo)) {
      alert('Ingrese la cantidad solo en números');
    } else {
      diasTrabajados = parseInt(diasTrabajo);
  
      if (diasTrabajados > maximoDias) {
        if(horasTrabajo >= horasMin){
            document.getElementById('pagoJornal').innerHTML = `El trabajador será despedido por no tener las horas mínimas.`;
        }
        if (turnoTrabajo.toLowerCase() === 'nocturno') {
            pago = horasTrabajo * tarifaNocturno;
          } else if (turnoTrabajo.toLowerCase() === 'diurno') {
            pago = horasTrabajo * tarifaDiurno;
          }
          document.getElementById('pagoJornal').innerHTML = `No se paga los dias Sabado y Domingo. El jornal de un trabajador es: $${pago}`

      }else if (horasTrabajo >= horasMin) {

        if (turnoTrabajo.toLowerCase() === 'nocturno') {
          pago = horasTrabajo * tarifaNocturno;
        } else if (turnoTrabajo.toLowerCase() === 'diurno') {
          pago = horasTrabajo * tarifaDiurno;
        }
        document.getElementById('pagoJornal').innerHTML = `El jornal mensual de un trabajador es: ${pago}`
  
      } else {
        document.getElementById('pagoJornal').innerHTML = `El trabajador será despedido por no tener las horas mínimas.`;
      }

    }
  }


//Ejercicio 27
const contarTSalario= () => {
    let horaTrabajada = document.getElementById('horaTrabajada').value;
    horaTrabajada = horaTrabajada.split(',').map(sumar => parseInt(sumar.trim()))
    let tarifaTrabajo = document.getElementById('tarifaTrabajo').value;
    tarifaTrabajo = tarifaTrabajo.split(',').map(sumar => parseInt(sumar.trim()))
    
    let contador = 0;

    for (let i = 0; i < tarifaTrabajo.length; i++) {
      const salario = tarifaTrabajo[i] * horaTrabajada[i];
      if (salario >= 500) {
        contador++;
      }
    }
    console.log(contador)
    
    document.getElementById('contador').innerHTML=`Trabajadores que reciben mas de $500: ${contador}`

}

//Ejercicio 28
const clasificacion =()=>{
const personas = [
    { edad: 25, sexo: 'M' },
    { edad: 17, sexo: 'F' },
    { edad: 55, sexo: 'M' },
    { edad: 47, sexo: 'F' },
    { edad: 25, sexo: 'M' },
    { edad: 12, sexo: 'F' },
    { edad: 27, sexo: 'M' },
    { edad: 13, sexo: 'F' },
    { edad: 75, sexo: 'M' },
    { edad: 45, sexo: 'F' },
    { edad: 22, sexo: 'M' },
    { edad: 19, sexo: 'F' },
    { edad: 50, sexo: 'M' },
    { edad: 42, sexo: 'F' },
    { edad: 15, sexo: 'M' },
    { edad: 62, sexo: 'F' },
    { edad: 37, sexo: 'M' },
    { edad: 3, sexo: 'F' },
    { edad: 5, sexo: 'M' },
    { edad: 57, sexo: 'F' },
    { edad: 35, sexo: 'M' },
    { edad: 87, sexo: 'F' },
    { edad: 55, sexo: 'M' },
    { edad: 17, sexo: 'F' },
    { edad: 2, sexo: 'M' },
    { edad: 5, sexo: 'F' },
    { edad: 2, sexo: 'M' },
    { edad: 10, sexo: 'F' },
    { edad: 74, sexo: 'M' },
    { edad: 27, sexo: 'F' },
    { edad: 95, sexo: 'M' },
    { edad: 77, sexo: 'F' },
    { edad: 45, sexo: 'M' },
    { edad: 17, sexo: 'F' },
    { edad: 75, sexo: 'M' },
    { edad: 82, sexo: 'F' },
    { edad: 47, sexo: 'M' },
    { edad: 33, sexo: 'F' },
    { edad: 5, sexo: 'M' },
    { edad: 7, sexo: 'F' },
    { edad: 6, sexo: 'M' },
    { edad: 9, sexo: 'F' },
    { edad: 65, sexo: 'M' },
    { edad: 27, sexo: 'F' },
    { edad: 95, sexo: 'M' },
    { edad: 62, sexo: 'F' },
    { edad: 37, sexo: 'M' },
    { edad: 43, sexo: 'F' },
    { edad: 15, sexo: 'M' },
    { edad: 87, sexo: 'F' },
  ];
  
    let contadorMayoresMasculinos = 0;
    let contadorMenoresFemeninos = 0;
    let contadorMayores = 0;
    let contadorMenores = 0;
  
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i]
    
        if (persona.edad >= 18) {
            contadorMayores++
            if (persona.sexo === 'M') {
                contadorMayoresMasculinos++
            }
        } else {
        contadorMenores++
            if (persona.sexo === 'F') {
            contadorMenoresFemeninos++
            }
        }
    }
  
    const porcentajeMayores = (contadorMayores / personas.length) * 100;
    const porcentajeMenores = (contadorMenores / personas.length) * 100;

    document.getElementById('masculinoMayorEdad').innerHTML=`Cantidad de personas masculinas mayores de edad: ${contadorMayoresMasculinos}`
    document.getElementById('femeninasMenoresEdad').innerHTML=`Cantidad de personas femeninas menores de edad: ${contadorMenoresFemeninos}`
    document.getElementById('personasMayores').innerHTML=`Cantidad de personas mayores: ${contadorMayores}`
    document.getElementById('personasMenores').innerHTML=`Cantidad de personas menores: ${contadorMenores}`
    document.getElementById('porcentajeMayor').innerHTML=`Porcentaje de personas mayores: ${porcentajeMayores.toFixed(2)}%`
    document.getElementById('porcentajeMenor').innerHTML=`Porcentaje de personas menores:  ${porcentajeMenores.toFixed(2)}%`

  
}

//Ejercicio 29
const ordenarNumeros=()=>{
    let numerosOrden = document.getElementById('numerosOr').value;
    numerosOrden = numerosOrden.split(',').map(numeroO => parseInt(numeroO.trim()))

    let pares = 0;
    let impares = 0;

    for (let i = 0; i < numerosOrden.length; i++) {
        if (numerosOrden[i] % 2 === 0) {
        pares++;
        } else {
        impares++;
        }
    }
    document.getElementById('orden').innerHTML=`Numeros Pares: ${pares}, Numeros Impares: ${impares}`
}
