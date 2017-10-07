        var playerTitleElement = document.getElementById('player_title');

        playerTitleElement.addEventListener('click', updateName);
        
        function updateName(event) {
         var name = prompt('Enter a new name');
         event.target.textContent = 'Player 1: ' + name;
        }
    //   enter original meal price (wiothout tip)
    // save original meal price (var original MealPrice = document.getElementById('meal_cost').value
    //   ask user for tip %, (prompt)
    //  save tip percentage 
    
    <script>
    //function makePrice(event) {
    // var tipPercentage = prompt(what tip percentage')
    // get the tip Amount by mutliplying tip percentage by original meal price 
    // get the total by adding tipAmount and original meal price
    // display this total to the user
    // then store tip% in variable
    //   declare tipAmount variable (tipPercent * OriginalMealPrice)
    //}
    // Exercise 4
    // define 2 variables one computer generated, one defined by user
// var computersGuess = Math.round(Math.random()*10)
// sav this random computer guess
// compare user input to computer and output hint higher or lower
     function checkGuess() {
      var computersGuess = document.getElementById('users_Guess').valueOf  
      if (computersGuess === users_Guess)}
      console.log('okwere working')
    
    var submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', checkGuess)
    }
    </scrpit>