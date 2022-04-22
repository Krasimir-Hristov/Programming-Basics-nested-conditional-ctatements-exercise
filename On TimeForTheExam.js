function onTimeForTheExam(input) {
    let timeOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArive = Number(input[2]);
    let minuteOfArive = Number(input[3]);

    let timeExamMins = (timeOfExam * 60) + minuteOfExam;
    let ariveTimeMins = (hourOfArive * 60) + minuteOfArive;


    if (ariveTimeMins > timeExamMins) {
        console.log("Late");
        let diff = ariveTimeMins - timeExamMins;
        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let mins = diff % 60;
            if (mins < 10) {
                console.log(`${h}:0${mins} hours after the start`);
            } else {
                console.log(`${h}:${mins} hours after the start`);
            }

        } else {
            let mins = diff % 60;
            console.log(`${mins} minutes after the start`);
        }
    } else if (timeExamMins - ariveTimeMins <= 30) {
        console.log("On time");
        let diff = timeExamMins - ariveTimeMins;
        if( diff !== 0){
            let mins = diff % 60;
            console.log(`${mins} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = timeExamMins - ariveTimeMins;
        if(diff >= 60){
            let h = Math.floor(diff / 60);
            let mins = diff % 60;
            if(mins < 10){
                console.log(`${h}:0${mins} hours before the start`);
            }else{
                console.log(`${h}:${mins} hours before the start`);
            }
        }else{
            let mins = diff % 60;
            console.log(`${mins} minutes before the start`);
        }
    }






}
onTimeForTheExam(["9",
"00",
"8",
"30"])