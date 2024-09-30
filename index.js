
// function scuberGreetingForFeet(distance){
//   if(distance<=400){return `This one is on me!`}
// else if(distance>400 && distance<2500){return `I will gladly take your thirty bucks.`}
// else if(distance>2500){return `No can do.`}
// }
// function ternaryCheckCity(city){
//  return(city=="NYC")?"Ok, sounds good.":"No go."
// }
// let tip=[]
// function switchOnCharmFromTip(tip){
//  switch(tip){
// case 'generous':return "Thank you so much.";
// break;
// case 'not as generous':return'Thank you.';
// break;
// default:return"Bye."
//  }
// }


// Function to return different responses based on the distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// Function that checks if the city is NYC using a ternary operator
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function that returns responses based on tip generosity
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Export the functions for testing if needed (for Node.js environment)
// module.exports = { scuberGreetingForFeet, ternaryCheckCity, switchOnCharmFromTip };
