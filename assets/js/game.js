//Game States
//"win" - Player robot has defeated all enemy robots
//     *Fight all enemy robots
//     * defeat each enemy robot
//"Lose" - players robots health is zero or less

var playerName = window.prompt("What is your robots's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName){
    //repeat and execue as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth >0){
        var promptfight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptfight)
       //if a player choses to skip
       if (promptfight == "skip" || promptfight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true) leave fight
        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skiping
            playerMoney = playerMoney -10;
            console.log  ("playerMoney", playerMoney);
            break;
            
        }
       }
    //Subtract the value of "playerAttack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" value
    enemyHealth = enemyHealth-playerAttack;
    console.log(
        playerName + " atacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining"
            );
               // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        playerMoney = playerMoney + 20;
        break;
     } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left." ) 
    
        }
    
    //Subrtact the value of the "enemyAttack" from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
           );
     
    // check players health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert( playerName + " still has " + playerHealth + " health left.")
    }
    }
}
  // fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function(){


for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      // reset enemyHealth before starting new fight
      enemyHealth = 50;
  
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
 var startGame = function () {
    //reset players health
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
 }
 endGame()
 };
 

var endGame = function() {
    window.alert("The game is now ended. Let's see how you did!");
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game. You now have a score of "+ playerMoney +". ");

}
    else{
        window.alert("You've lost your robot battle.");
    }

var playAgainConfirm = window.confirm("Would you like to play again?");

if(playAgainConfirm){
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}
startGame()