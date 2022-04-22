function summerOutfit(input) {

    let gradus = Number(input.shift());
    let time = input.shift();

    let outfit;
    let shoes;

    if (gradus >= 10 && gradus <= 18) {
        if (time === "Morning") {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        } else if (time === "Afternoon") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (time === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } else if (gradus > 18 && gradus <= 25) {
        if (time === "Morning") {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (time === "Afternoon") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (time === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    } else if (gradus >= 25) {
        if (time === "Morning") {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } else if (time === "Afternoon") {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } else if (time === "Evening") {
            outfit = "Shirt"
            shoes = "Moccasins"
        }

    }

    console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`);

}
summerOutfit(["22",
    "Afternoon"])