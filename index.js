/*
    Escribe una función llamada sumatoria. Esta función tiene como parámetro un arreglo de números.
    La función debe de calcular y retornar la suma de todos los números en el arreglo.
    Ejemplo:
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let resultado = sumatoria( nums );
        // El resultado debe ser 55.
*/
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumatoria (nums) {
    let sum = 0;
    for( let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        //console.log(sum);
        //console.log(nums[i]);
    }
    return sum;
}
let resultado = sumatoria(nums);
console.log(resultado);

/*
    Escribe una función llamada numeroMayor. Esta función tiene como parámetro un arreglo de números.
    La función debe de encontrar y retornar el número más grande dentro del arrelgo.
    Ejemplo:
        let nums = [ 6, 2, 8, 3, 5, 1, 10, 4, 9, 7];
        let resultado = numeroMayor( nums );
        // El resultado debe de ser 10.
        // También puede tener el arreglo números negativos
*/
let nums2 = [ 6, 2, 8, 3, 5, 1, 10, 4, 9, 7];
function numeroMayor (nums){
    let may = nums[0];
    for (let i = 0; i < nums.length; i++){
        if( may < nums[i]){
            may = nums[i];
        }
    }
    return may;
}
let resultado2 = numeroMayor(nums2);
console.log (resultado2);