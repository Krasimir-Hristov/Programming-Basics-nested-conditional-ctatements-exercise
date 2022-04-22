function hotelRoom(input){

    let month = input[0];
    let nights = Number(input[1]);

    let apartmenPrice = 0;
    let studioPrice = 0;

    if(month === "May" || month === "October"){
        apartmenPrice = 65;
        studioPrice = 50;
    }else if(month === "June" || month === "September"){
        apartmenPrice = 68.70;
        studioPrice = 75.20;
    }else if(month === "July" || month === "August"){
        apartmenPrice = 77;
        studioPrice = 76;
    }
    if(nights > 7 && nights <= 14 && (month === "May" || month === "October")){
        studioPrice *= 0.95;
    }else if(nights > 14 && (month === "May" || month === "October")){
        studioPrice *= 0.70;
    }else if(nights > 14 && (month === "June" || month === "September")){
        studioPrice *= 0.90;
    }
    if(nights > 14){
        apartmenPrice *= 0.90;
    }
    
    let totalApartmenPrice = (apartmenPrice * nights).toFixed(2);
    let totalStudioPrice = (studioPrice * nights).toFixed(2);

    console.log(`Apartment: ${totalApartmenPrice} lv.`);
    console.log(`Studio: ${totalStudioPrice} lv.`);


}
hotelRoom(["August",
"20"])