var readline = require("readline-sync");
var ask = require("readline-sync");

console.log("Welcome!");
var playerName = ask.question("Whats is your name? ");
console.log("Hello, " + playerName + ". Type 'print' at any time to view your inventory and hp. ");


var player = {
  name: playerName,
  hp: 100,
  attack: undefined,
  enemiesKilled: 0,
  inventory: [""]
};


var Enemy = function() {
  this.type = getRandomType();
  this.attack = Math.floor(Math.random() * 20) + 10;
  this.hp = 50;
};


function getInventory() {
  var inventory = ["Knife", "Gun", "Broom"];
  var getItem = inventory[Math.floor(Math.random() * inventory.length)];
  player.inventory.push(getItem);
};


var getRandomType = function() {
  var enemyTypes = ["Dragon", "Saber Tooth ", "Terminator"];
  var randIndex = Math.floor(Math.random() * enemyTypes.length);
  return enemyTypes[randIndex];
};


Enemy.prototype.genHitPoints = function() {
  switch(this.type) {
    case "Dragon":
      return Math.floor(Math.random() * 21) + 80;
    case "Saber Tooth":
      return Math.floor(Math.random() * 30) + 50;
    case "Terminator":
      return Math.floor(Math.random() * 30) + 20;
  }
};



while (player.hp > 0 && player.enemiesKilled < 3) {
  var playerCommand = readline.keyIn("Type 'w' to walk... ");
  if (playerCommand === "w") {
   
    if(Math.floor(Math.random() * 100) > 60) {
      var enemy = new Enemy();
      console.log(enemy.type + " has appeared!");
    
      while (enemy.hp > 0) {
        var action = readline.keyIn("Type 'a' to attack or 'r' to run. ");
        
        if (action === 'a') {
          var attackDamage = Math.floor(Math.random() * (50 - 10 + 1) + 10);
          enemy.hp = enemy.hp - attackDamage;
         
          if (enemy.hp <= 0) {
            console.log("You killed the " + enemy.type + "!");
            player.enemiesKilled++;
            getInventory();
            break;
          } else {
            console.log("You hit the " + enemy.type + " for " + attackDamage + "!");
          }
          
          player.hp = player.hp - enemy.attack;
          console.log(" ❤️  " + "Your hp is " + player.hp);
         
          if (player.hp <= 0) {
            console.log("The enemy killed you!");
            break;
          }
          
        } else if (action === 'r' && Math.floor(Math.random() * 100) > 50) {
          console.log("You escaped!");
          break;
        } else {
          console.log("The enemy caught you. You died. ☠️");
          player.hp = 0;
          break;
        }
      }
    }
    
  } else if (playerCommand === "print") {
    console.log(player.name + " \n" + " 💰 Your inventory is: " + player.inventory + " \n ❤️ Your hp is: " + player.hp);
  } else {
    console.log("Invalid command, please type 'w' ");
  }
}


