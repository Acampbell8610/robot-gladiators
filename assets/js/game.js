/* GAME FUNCTIONS */

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };
  
  var fightOrSkip = function(){
      // ask player id they would like to fight or skip using fightOrSkip function
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
        promptFight = promptFight.toLowerCase();
      //  condtional recursive function call 
      if(promptFight === ""|| promptFight === null) {
          window.alert("You need to provide a valid answer! Please try again.");
          return fightOrSkip();
      }

      //if player picks SKIP confirm then stop the loop
      if(promptFight == "skip" || promptFight === "SKIP") {
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

          //if yes, leave fight
          if(confirmSkip) {
              window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
              playerInfo.money = Math.max(0, playerInfo.money - 10);

              return true;
          }
      }
      return false;
  }
  // fight function (now with parameter for enemy's object holding name, health, and attack values)
  var fight = function(enemy) {

    //keep track of who goes first
    var isPlayerTurn = true;

    if(Math.random()> 0.5){
        isPlayerTurn = false;
    }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if(isPlayerTurn){

        if(fightOrSkip()){
            //if true leave fight by breaking loop
            break;
        }
        
      
  


//Subtract the value of "playerInfo.attack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" value
var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

enemy.health= Math.max(0, enemy.health - damage);
console.log(
    playerInfo.name + " atacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining"
        );
           // check enemy's health
if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");

    playerInfo.money = playerInfo.money + 20;
    break;
 } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left." ) 

    }
}else{
    var damage = randomNumber( enemy.attack -3, enemy.attack);

 
    
    

//Subrtact the value of the "enemyAttack" from the value of "playerInfo.health" and use that result to update the value in the "playerInfo.health" variable.
var damage = randomNumber(enemy.attack - 3, enemy.attack);
playerInfo.health = Math.max(0, playerInfo.health - damage);
console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining"
       );
 
// check players health
if (playerInfo.health <=0) {
    window.alert(playerInfo.name + " has died!");
    break;
}
else {
    window.alert( playerInfo.name + " still has " + playerInfo.health + " health left.")
}
}
// switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
    }
}
  ;
// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function(){
playerInfo.reset()


for (var i = 0; i < enemyInfo.length; i++) {
// if player is still alive, keep fighting
if (playerInfo.health > 0) {
  // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
  window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
 

  // pick new enemy to fight based on the index of the enemy.names array
  var pickedEnemyObj = enemyInfo[i];

  // reset enemyHealth before starting new fight
  pickedEnemyObj.health= randomNumber(40, 60);

  // use debugger to pause script from running and check what's going on at that moment in the code
  // debugger;

  // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
  fight(pickedEnemyObj);

  if(playerInfo.health > 0 && i < enemyInfo.length -1) {
    var storeConfirm = window.confirm("The fight is over, vistit the store before the next round?");
     
    if (storeConfirm){
        shop () ;
  }
}
}
// if player isn't alive, stop the game
else {
  window.alert('You have lost your robot in battle! Game Over!');
  break;
}
}

endGame();
};

// endgame function
var endGame = function() {
window.alert("The game is now ended. Let's see how you did!");
if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game. You now have a score of "+ playerInfo.money +". ");

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
//shop
var shop = function(){
var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
);
shopOptionPrompt = parseInt(shopOptionPrompt);
switch (shopOptionPrompt) {
    case 1:
  
        playerInfo.refillHealth();
        break;

    case 2:
  
        playerInfo.upgradeAttack();
        break;

    case 3:
   
        window.alert("Leaving the store.");
        break;
    
    default :
        window.alert("You did not pick a valid option.");
        shop ();
        break;
}
};
// function set name
var getPlayerName = function(){
    var name = "";

 while ( name === "" || name === null){
     name = prompt("What is your robot's name?");
 }

    console.log("Your robot's name is" + name);
    return name;
}
var playerInfo = {
name: getPlayerName(),
health:100 ,
attack:10 ,
money : 10,
reset: function(){
    this.health=100;
    this.attack=10;
    this.money=10;
},
refillHealth: function(){
    if (this.money >=7) {
        window.alert("Refilling players health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    }
    else{
        window.alert("You dont have enough money.")
    }
},

upgradeAttack: function() {
    if (this.money >=7) {
        window.alert("Upgrading players attack by 6 for 7 dollars.");
    this.attack +=6;
    this.money -=7;
    }
    else{
        window.alert("You dont have enough money.")
    }
}
};

//you can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

var enemyInfo = [
{
    name:"Roborto",
    attack: randomNumber(10,14)
},
{
    name: "Amy Android",
    attack: randomNumber (10,14)
},
{
    name: "Robo Trumble",
    attack: randomNumber(10,14)
}
];


startGame()