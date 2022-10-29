const prompt = require('prompt-sync')({sigint: true});
/* Global Variables*/
let caughtFish = [];
// caughtFish.push(fish1,fish2);

// // console.log(caughtFish)
// console.log(getTotalWeight())
// console.log(getTotalValue)
/* Game Flow  */
console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.")
for(let i = 6; i < 12; i++){
    console.log('======================================================\n');
    console.log(`The time is ${i}: 00am. So far you caught: `)
    //1.current fish list - keep track of our fish and print list
            // # of fish = .length of caughtFish
            //weight/value - function to calculate total weight and total value of fish in caughtfish array

        console.log(`${caughtFish.length} fish, ${getTotalWeight()} lbs, $${getTotalValue()}`)
    
    //2.logging our our random fish - generateRandomFish()
    let fish = generateRandomFish();

    console.log(`You caught a ${fish.name} weighing ${fish.weight} lbs and valued at $${fish.value}`);
    
// check if weight will exceed 10lbs if so auto release and make them press enter




    //3. catch or release - user prompt
    //error check for values NOT
    //r
    //make cure we arent
    //catching over 10lbs


let currentTotalWeight = getTotalWeight();

if(currentTotalWeight + fish.weight > 10){
    console.log("\nThis fish would put you over 10lbs, so you can relase it.\n")

    console.log('Press any key to continue')
    prompt("> ")

    continue;
    }

if(i = 12){
    console.log(`The time is 12:00pm. Times up!`)
    console.log(`You caught $
    `)
}

    console.log("\nYour action: [c]atch or [r]elease? >\n");
    let action = prompt('-->  ')

                                                                while(action !== 'c' && action !== 'r'){
                                                                    console.log('Please eneter [c] or [r]')
                                                                   action = prompt('> ') ;
                                                                }
                                                            

                                                                

        if(action === "c"){
//catch : push fish into the array 
//message you chose to keep the fish
caughtFish.push(fish)
console.log(`\n You chose to keep the ${fish.name}!\n`)
        }else if(action === 'r'){
//release : message you to release the fish.
            console.log(`\n You chose to release the ${fish.name}. \n`)
    }
}
/*
generateRandomWeight
return weight ( number )
*/
// console.log(generateRandomFish());
// console.log(generateRandomName());
function generateRandonWeight(){
   let weight = Number((Math.random() * 5).toPrecision(3));
    while(weight < 1){
        weight = Number((Math.random() * 5).toPrecision(3));
    }
   return weight;
}
function generateRandomValue(){
    let value = Number((Math.random() * 5).toPrecision(3));
    while(value < 0.1){
       value = Number((Math.random() * 5).toPrecision(3));
    }
    if(value < 1){
        //value = (Math.random() * 5).toPrecision(3);
        value = Number(value.toPrecision(2));
    }
    return value;
}
function generateRandomName(){
    let adjectives = [
        'shiny', 'red','dull', 'blue', 'slimy', 'green', 'dry', 'yellow', 'vibrant', 'purple', 'floppy', 'orange', 'silly', 'silver'
    ]
    let types = ['Salmon', 'Bass', 'Trout', 'flounder', 'Perch', 'Snapper', 'Cod', 'Catfish', 'Grouper', 'Tuna', 'Blobfish', 'Blowfish']
    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    let type = types[Math.floor(Math.random() * types.length)];
    while(adj1 === adj2){
        adj2 = adjectives[Math.floor(Math.random() * adjectives.length)];
    }
    return adj1 + " " + adj2 + " " + type;
}
function generateRandomFish(){
    let fish = {};
    fish.name = generateRandomName();
    fish.weight = generateRandonWeight();
    fish.value = generateRandomValue();
        return fish;
}
//total weight of alll caughtFish
function getTotalWeight(){
    let totalWeight = 0;
    for(let i = 0; i < caughtFish.length; i++){
        let currentFish = caughtFish[i]
        totalWeight += caughtFish[i].weight;
       
    }
    return Number(totalWeight.toPrecision(3));
}

function getTotalValue(){
    let getTotalValue = 0;
    
    // for up loop
    for(let fish of caughtFish){
        //fish.value - gets us the value property of each fish in our caught fish array 1 at a time
        getTotalValue = getTotalValue + fish.value;
    }

    return Number(getTotalValue.toPrecision(3))

}