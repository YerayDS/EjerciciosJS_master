/* Ejercicio 1: Números Pares del 1 al 50 (Bucle for) */

  for(let i=1; i<=50;i++){
    if(i%2==0){
      console.log(i)
    }
  }

/* Ejercicio 2: Contar del 1 al 5 */

  let contador=1;

  while(contador<=5){
    console.log(contador);
    contador++;
  }

/* Ejercicio 3: Clasificador de Edades */

  let edad = 18;

  if(typeof edad !== "number" || edad <= 0 || !Number.isInteger(edad)){
    console.log('Edad no válida');
  }
  else{
    if(edad>0 && edad<=12){
      console.log('Eres un niño');
    }
    else if(edad>12 && edad<=19){
      console.log('Eres un adolescente');
    }
    else if(edad>19 && edad<=64){
      console.log('Eres un adulto');
    }
    else{
      console.log('Eres un adulto mayor');
    }
  }

 /*Ejercicio 4: Tabla de Multiplicar (Bucle Anidado for)*/

  let resultado;

  for(let i=1 ;i<=10;i++){
    for(let j=1 ; j<=10; j++){
      resultado = i*j;
      console.log(`${i} x ${j} = ${resultado}`);
    }
  }

/* Ejercicio 5: Cuenta Regresiva del 10 al 1 */

  for(let i= 10; i>=0; i--){
    if(i!=0){
      console.log(i);
    }
    else{
      console.log(`¡Despegue!`)
    }
  }

/* Ejercicio 6: Suma de Números del 1 al N */

  let n = 5;
  let i= 1;
  let sumatorio = 0;

  while(i<=n){
    sumatorio += i;
    i++;
  }

  console.log(`La suma de los números del 1 al ${n} es ${sumatorio}`);

/* Ejercicio 7: Números Divisibles por 3 (hasta 30) */

  for(let i=1; i<=30; i++){
    if(i%3 === 0){
      console.log(i);
    }
  }


