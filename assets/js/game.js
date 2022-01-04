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
    //Alert players that we are starting th round
    window.alert("Welcome to Robot Gadiators!");

    for(var i = 0; i < enemyNames.length ; i++){
    }

    var promptfight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptfight)
    //if player choses to fight,then fight
    if (promptfight === "fight" || promptfight === "FIGHT") {

    //Subtract the value of "playerAttack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" value
    enemyHealth = enemyHealth-playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " atacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining"
            );
    //Subrtact the value of the "enemyAttack" from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable.
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
           )
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else (
        window.alert(enemyName + " still has " + enemyHealth + " health left." ) 

    )
    // check players health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else (
        window.alert( playerName + " still has " + playerHealth + " health left.")
    )
    }
    //if a player choses to skip
    else if (promptfight == "skip" || promptfight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true) leave fight
        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skiping
            playerMoney = playerMoney -2;
        }
        // if no(false) ask question again by running fight() again
        else{
            fight();
        }
    }
    else {
        window.alert("You need to chose a valid option. Try again!");
    }
    }
;
for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames [i]);
}
//fight();