function getResults() {

    //CORRECT ANSWERS
    let amountCorrect = 0;
    let correctcount = 0;
  
  // LOOP FOR GOING THROUGH ALL QUESTIONS
    for(let i = 1; i <= 120; i++) {
      let radiosName = document.getElementsByName('answer'+i);
         //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
    for (let j = 0; j < radiosName.length; j++) {
        let radiosValue = radiosName[j];
        if (radiosValue.checked) {
          if (radiosValue.value == "correct") {
            correctcount++;
            amountCorrect++;
            //radiosValue.nextSibling.style.color = "#7ee479";
            radiosValue.nextSibling.style.border = "2px solid #0aff16";
            document.getElementById("score").innerHTML = correctcount;
          } else {
            //radiosValue.nextSibling.style.color = "#fb6e6e";
            radiosValue.nextSibling.style.border = "2px solid #fb6e6e";
          }
        } else {
            radiosValue.nextSibling.style.border = "";  // back to default
        }
      }
    }
}
