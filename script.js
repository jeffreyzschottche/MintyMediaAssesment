// CODE EXPLAINED
// In bovenstaande code wordt eerst een fetch request verzonden naar de opgegeven API-URL met de Authorization header die in de opdracht staat. 
// Daarna wordt de response van de API omgezet in tekst en wordt de tekstinput opgesplitst in individuele regels. 
// Vervolgens wordt er met een for loop door elke regel geloopt en worden de waardes per as aangevuld, hierop gebasseerd wordt de eindpositie berekend. 
// Tot slot wordt het antwoord gedisplayed in de HTML.


// fetch data from API
fetch("https://dev.api.mintycloud.nl/api/v1/challenges/input", {
  headers: {
    // add authorization header and specify content type
    "Content-Type": "application/json",
    "Authorization": "Basic 0153c98143c78d3cd57c1ecdc3514cef64a5178974496c57465eb46df9f93115c46c1d0fcd64a46683aac30190b28977b9dca9d36d203213621c65dd7018a0c7"
  }
})
  .then(response => response.text())
  .then(data => {
     // splits de tekstinput in afzonderlijke regels
     let lines = data.split("\n");

    // Dit is het voorbeeld uit de opdracht. Gebruik deze array om te checken of het antwoord overeen komt.
    // Comment de code op regel 19 uit om het resultaat in de HTML te bekijken.
    // lines = [
    //     'forward 5',
    //     'down 5',
    //     'forward 8',
    //     'up 3',
    //     'down 8',
    //     'forward 2'
    // ]

     let horizontal = 0;
     let depth = 0;

     // loop door elke regel
     for (let line of lines) {
       let parts = line.split(" ");
       let command = parts[0];
       let value = parseInt(parts[1]);
       // check welke opdracht gegeven wordt
       if (command === "forward") {
         horizontal += value;
       } else if (command === "down") {
         depth += value;
       } else if (command === "up") {
         depth -= value;
       }
     }
     // bereken het antwoord
     let answer = horizontal * depth;

     // altijd handig om een object te maken van data
     let answerObject = {
        horizontal: horizontal,
        depth: depth,
        answer: answer
     }

     // Display de data via de bijbehorende ID.
     document.getElementById('outputH').innerHTML += answerObject.horizontal;
     document.getElementById('outputD').innerHTML += answerObject.depth;
     document.getElementById('outputA').innerHTML += answerObject.answer;
  });
