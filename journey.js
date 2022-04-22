function journey(input){
let buged = Number(input[0]);
let seson = input[1];

let spend = 0;
let destination ;
let type ;

if(buged <= 100){
   destination = "Bulgaria";
   if(seson === "summer"){
       type = "Camp" ;
       spend = buged * 0.30;
   }else{
       type = "Hotel";
       spend = buged * 0.70;
   }
}else if(buged > 100 && buged <= 1000){
    destination = "Balkans";
    if(seson === "summer"){
        type = "Camp";
        spend = buged * 0.40;
    }else{
        type = "Hotel";
        spend = buged * 0.80;
    }
}else{
    destination = "Europe" ;
    type = "Hotel";
    spend = buged * 0.90;
}
 console.log(`Somewhere in ${destination}`);
 console.log(`${type} - ${spend.toFixed(2)}`);
}
journey(["1500", "summer"])