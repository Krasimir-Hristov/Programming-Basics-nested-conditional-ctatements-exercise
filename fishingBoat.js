function fishingBoat(input) {

    let buged = Number(input[0]);
    let seson = input[1];
    let countFishermans = Number(input[2]);

    let price = 0;
    let isMoney = true;

    switch (seson) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }

    if (countFishermans <= 6) {
        price *= 0.90;
    } else if (countFishermans >= 7 && countFishermans <= 11) {
        price *= 0.85;
    } else if (countFishermans >= 12) {
        price *= 0.75;
    }

    if (countFishermans % 2 === 0 && seson !== "Autumn") {
        price *= 0.95;
    }

    let diff = Math.abs(buged - price)

    // if(buged >= price){
    // console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    // }else{
    // console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    // }
    if (price > buged) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
        isMoney = false;
    }

    if (isMoney) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }
}
fishingBoat(["3600",
    "Autumn",
    "6"])