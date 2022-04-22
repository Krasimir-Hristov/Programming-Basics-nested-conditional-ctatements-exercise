function skiTrip(input){

    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let expresion = input[2];

    let nights = days - 1;

    let price = 0;

    if(typeOfRoom === "room for one person"){
        price = nights * 18;
    }else if(typeOfRoom === "apartment"){
        price = nights * 25;
        if(nights < 10){
            price *= 0.70;
        }else if(nights >= 10 && nights <= 15){
            price *= 0.65;
        }else{
            price *= 0.50;
        }
    }else if(typeOfRoom === "president apartment"){
        price = nights * 35;
        if(nights < 10){
            price *= 0.90;
        }else if(nights >= 10 && nights <= 15){
            price *= 0.85;
        }else{
            price *= 0.80;
        }
    }
    if(expresion === "positive"){
        price *= 1.25;
    }else if(expresion === "negative"){
        price *= 0.90;
    }
    console.log(price.toFixed(2));


}
skiTrip(["2",
"apartment",
"positive"])