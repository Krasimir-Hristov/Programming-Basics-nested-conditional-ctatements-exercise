function newHouse(input) {
  
    let type = input[0];
    let countFlowers = Number(input[1]);
    let buged = Number(input[2]);


     let price = 0;

     if(type === "Roses"){ 
         price = countFlowers * 5
         if(countFlowers > 80){
             price *= 0.90;
         }
     }else if( type === "Dahlias"){
         price = countFlowers * 3.80;
         if(countFlowers > 90){
             price *= 0.85;
         }
     }else if(type === "Tulips"){
         price = countFlowers * 2.80;
         if(countFlowers > 80){
             price *= 0.85;
         }
     }else if ( type === "Narcissus"){
         price = countFlowers * 3;
         if(countFlowers < 120){
             price *= 1.15;
         }
     }else if(type === "Gladiolus"){ 
         price = countFlowers * 2.50;
         if(countFlowers < 80){
             price *= 1.20;
         }
     }
     let diff = Math.abs( buged - price)

     if(buged >= price){
         console.log(`Hey, you have a great garden with ${countFlowers} ${type} and ${diff.toFixed(2)} leva left.`);
     }else{
         console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
     }
}
newHouse(["Tulips",
"88",
"260"])