// enum is a special "class" that represents a group of constants (unchangeable variables).
//enum create a iife in js
//putting const before enum will make it a constant enum
//and will not create an iife in js

enum seatChoice {
  //they are all literal values by default it starts from 0 and increments by 1
  window = "window",
  middle = "middle",
  aisle = "aisle",
}

let mySeat: seatChoice = seatChoice.window; //valid
mySeat = seatChoice.middle; //valid
//mySeat = "dawd" //invalid, will give error
//mySeat = "window" //invalid
