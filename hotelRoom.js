function hotelroom(input) {
    let seson = input[0];
    let nights = Number(input[1]);
    let apartmenPrice = 0
    let studioPrice = 0

    



    if (seson === `May` || seson === `October`) {
        apartmenPrice = nights * 65;
        if (nights > 14) {
            apartmenPrice = apartmenPrice * 0.90;
            console.log(`Apartment: ${apartmenPrice.toFixed(2)} lv.`);
        }else {
            console.log(`Apartment: ${apartmenPrice.toFixed(2)} lv.`);
        }
    } 
    if (seson === `May` || seson === `October`){
        studioPrice = nights * 50;
        if(nights > 7 && nights < 14){
            studioPrice = studioPrice * 0.95
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }else if (nights > 7 && nights >14) {
            studioPrice = studioPrice * 0.70;
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }else {
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        }
    }
    if (seson === `June` || seson === `September`) {
        apartmenPrice = nights * 68.70;
        if (nights > 14){
            apartmenPrice = apartmenPrice * 0.90;
            console.log(`Apartment: ${apartmenPrice.toFixed(2)} lv.`);
        }else{
            console.log(`Apartment: ${apartmenPrice.toFixed(2)} lv.`);
        }
        if (seson === `June` || seson === `September`) {
            studioPrice = nights * 75.20;
            if(nights > 7 && nights <14){
                studioPrice = studioPrice * 0.95
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }else if (nights > 7 && nights >14) {
                studioPrice = studioPrice * 0.80;
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }else {
                console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
            }

        }
    }
    if ( seson === `July` || seson === `August`){
        apartmenPrice = nights * 77;
        if (nights > 14){
            apartmenPrice = apartmenPrice * 0.90;
            console.log(`Apartment: ${apartmenPrice.toFixed(2)} lv.`);
        }else{
            console.log(`Apartment: ${apartmenPrice.toFixed(2)} lv.`);
        }
    }
    if ( seson === `July` || seson === `August`) {
        studioPrice = nights * 76;
       
            console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
        } 
    





}
hotelroom(["August",
"20"])