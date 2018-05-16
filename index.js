var owedMoney = {};

owedMoney["jimmy"] = 5;
owedMoney["Anna"] = 7;
owedMoney.jimmy +=3;


console.log(owedMoney.jimmy);
console.log(owedMoney.Jinen);

/*var anna = {
    name: "Anna",
    age: 200,
    luckyNumbers: [2,4,8,16]
};


var dave = {
    name: "Dave",
    age: 750,
    luckyNumbers: [3,9, 40]
}


var kate = {
    name: "Kate",
    age: 9,
    luckyNumbers: [1,2,3]
};

var friends = [anna, dave, kate];

console.log(friends[1]);

console.log(friends[2].luckyNumbers);

console.log(friends[0].luckyNumbers[3]);

friends[1];*/


/*
var dinosaurs = 
[
    {name: "Tyrannosaurus Rex", period: "Late Cretaceous"},
    {name: "Stegosaurus", period: "Late Jurassic"},
    {name: "Plateosaurus", period: "Triassic"}
];

//console.log(dinosaurs);

console.log(dinosaurs[1].period);
console.log(dinosaurs[2].name);
*/



/*
var cat = {};

cat.name = "Furburt";

cat.personality = "chill";

console.log(cat);

console.log(cat.name);
console.log(cat.blurp);
console.log(Object.keys(cat));
*/



/*var cat = {};

cat["legs"]=3;
cat["name"]="Harmony";
cat["color"]="Tortoiseshell";

console.log(cat.legs);
console.log(cat.name);
console.log(cat.color);

console.log(Object.keys(cat));*/



/*
var cat = {
    legs: 3,
    name: "Harmony",
    color: "Tortoiseshell"
};

console.log(cat);

console.log(cat.legs);

console.log(Object.keys(cat));
*/




/*var randomBodyParts = ["face", "nose", "hair"];
var randomAdjectives = ["smelly", "boring", "stupid"];
var randomWords = ["fly", "marmot", "stick", "monkey", "rat"];

//console.log(randomAdjectives, randomBodyParts, randomWords);

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

//console.log(randomBodyPart);

var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

//console.log(randomAdjective);

var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

//console.log(randomWord);


//console.log("Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord );


var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord, + "!!!" ].join(" ");

console.log(randomInsult)*/;


/*
var randomNumber = function()
    {
        var wildcard = Math.random();
        
        return wildcard;
    
    }
//console.log(randomNumber());

var bodyPartIndex = function(wildcard)
    {
        return Math.floor(randomBodyParts.length * wildcard);
    }

console.log(bodyPartIndex());
*/

    
    
/*
var phrases = ["That sounds good", "Yes you should definitely do that", "I'm not so sure that's a great idea", "Maybe not today", "Computer says no"]

phrases.push("You should have another milkshake", "Go do your homework");

var x = Math.random();

//console.log(Math.random());
//console.log(phrases.length);

var y = Math.floor( x * phrases.length);
//console.log(y);

var output = phrases[y];

console.log(output);

*/




/*
var randomGetter = Math.random();

var indexGetter = Math.floor(randomGetter * 4);

console.log(indexGetter);

var zurp = "LKJASDLKJASDLKJASLDKJ";

console.log(zurp[indexGetter]);
*/



/*var blurp = Math.floor(Math.random() * 4 );

console.log(blurp);*/



/*var start = Math.random();

var mid = start * 10; 

var end = Math.floor(mid);

console.log(end);*/



//console.log(Math.ceil(Math.random()));

//console.log(Math.floor(Math.random()));

//var randomizer = Math.random();

//var multiplier = Math.floor(randomizer * 10);

//console.log(multiplier);



/*
var landmarks =[]

landmarks.push("my house", "front path", "flickering streetlamp", "leaky fire hydrant", "fire station", "cat rescue center", "my old school", "my friend's house");

landmarks.push("my house");
landmarks.push("front path");
landmarks.push("flickering streetlamp");
landmarks.push("leaky fire hydrant");
landmarks.push("fire station");
landmarks.push("cat rescue center");
landmarks.push("my old school");
landmarks.push("my friend's house");

console.log(landmarks);


for (var i=0; i<landmarks.length; i++)
    {
        landmarks.pop(landmarks);
        console.log(landmarks);
        
    }

*/




//var colors = ["red", "green", "blue", "purple", "orange"];

/*
var tinker = colors;

//console.log(tinker.join());

//console.log(tinker.join("-")); INSERT DIFFERENT (CUSTOM / NON-COMMA) SEPARATOR BETWEEN ITEMS.

//console.log(tinker.join(" =^.^= ")); //INSERTED 'CAT EARS' BETWEEN EACH ITEM - BECAUSE I KNOW HOW TO.  :)

//console.log(tinker.join("*"));     //INSERTS AN ASTERISK (SP?) BETWEEN EACH ITEM.

console.log(tinker);

//console.log(colors.indexOf("blue"));
*/



/*
var furryAnimals = ["alpaca", "ring-tailed lemur", "yeti"];
var scalyAnimals = ["lizard", "snake", "alligator"];
var featheredAnimals = ["duck", "goose", "penguin"];

var mixture = furryAnimals.concat(scalyAnimals, featheredAnimals);

console.log(mixture);
console.log(furryAnimals);
console.log(scalyAnimals);
*/



/*var dinosaurs = [];

dinosaurs = ["T-rex", "Velociraptor", ["Stegosaurus", "Triceratops", "Brachiosaurus"], "Pteranodon", "Apatosaurus", "Diplodocus"];

dinosaurs.push("motorcycle");

dinosaurs.push("alligator");
console.log(dinosaurs);

//console.log("There are: " + dinosaurs.length + " in this list.");

dinosaurs.unshift("turkey");  //UNSHIFT adds items to the BEGINNING of an array.
dinosaurs.unshift("flounder");



dinosaurs.pop(); // POP removes last item from array and RETURNS it.

var flurp = dinosaurs.pop();  //Storing returned (popped) element in a variable.

var zurp = [dinosaurs.pop()]; //Just wanted to try this - now storing popped item in a whole new array.

console.log(zurp);

console.log("VAR FLURP = " + flurp);



console.log(dinosaurs);*/




/*var last_one = dinosaurs[dinosaurs.length-1];

console.log(last_one);

var third_to_last = dinosaurs[dinosaurs.length-3];

console.log(third_to_last);  //So in other words, this works the same as (or very similar to ) Python...*/





/*
var blurp = dinosaurs[dinosaurs.length-1];

console.log(blurp);
*/


//console.log(dinosaurs);

/*
console.log(dinosaurs[3][1]);  //THIS ACCESSES THE 't' IN PTERANODON.


console.log(dinosaurs[4]);  //THIS ACCESSES "APATOSAURUS."

console.log(dinosaurs[2][2]);  //THIS ACCESSES "BRACHIOSAURUS."

console.log(dinosaurs[2][2][2]); //THIS ACCESSES THE 'a' in "BRACHIOSAURUS."

console.log(dinosaurs.length);
*/









/*
var someStuff = [   "this", 
                    "that", 
                    "other", 
                    ["canoe"], 
                    "alligator"];

//console.log(someStuff[2]);
console.log(someStuff.length);

someStuff[2] = "clock";

someStuff[5] = "whale";

someStuff[6] = 54;



console.log(someStuff[0][2]);
*/






/*
// PG-13 Program


function ageData()
    {
        var age = parseInt(prompt("Please enter your current age: "));
        return decisionTree_1(age);
    }

function decisionTree_1(age)
    {
        if (age >= 13)
            {
                alert("Great...enjoy the show!");
            }
        
        
        else
            {
                return decisionTree_2();
            }
    }


function decisionTree_2()
    {
        var accompanied = prompt("Are you accompanied by a parent or legal guardian?  Please enter either 'y' for yes, or 'n' for no: ");
        
        if (accompanied == "y" || accompanied == "Y")
            {
                goAhead();
            }
        
        else
            {
                noCanDo();
            }
        
    }



function goAhead()
    {
        alert("Great...enjoy the show!");
    }


function noCanDo()
    {
        alert("Sorry, but you'll have to select another movie!");
    }


ageData();


*/





/*var sillyString = "hEllO THERE hOW arE yOu dOInG?"

var output = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();

console.log(output);*/



/*var mess = "hEllO THERE hOW arE yOu dOInG?"

var lower = mess.toLowerCase();

var len = lower.length;

var remainder = lower.slice(1, len +=1 );

var first = lower.slice(0,1).toUpperCase();

var whole = first + remainder;

console.log(whole);*/



/*var long_string = "This seems to be a really long string of characters, blah, blah, blah...";

console.log(long_string.toUpperCase());
console.log(long_string.toLowerCase());*/

//console.log(long_string.length);

//console.log(long_string.slice(18, 57));






/*var codeWord_1 = "are";
var codeWord_2 = "tubas";
var codeWord_3 = "unsafe";
var codeWord_4 = "?!";

console.log(codeWord_1[1] + codeWord_2[1] + codeWord_3[1] + codeWord_4[1]);*/



/*
var picklez = "asleifswasilAksfcmet"

console.log(picklez.length);

console.log(picklez[12]);
*/

/*var java = "java";

var script = "script";

var both = java + " " + script;

console.log(both.length);*/


/*
console.log("LKJASDLKJASDLKJSDA".length);
*/



/*
var balloons = 100;
balloons *= 2;

console.log("There are now " + balloons + " balloons!");

balloons /= 4; 

console.log("Most of the balloons have popped; there are only " + balloons + " of them left.");
*/



/*
var x = 5;

x += 5;

console.log(x);

x += 20;

console.log(x);

x -= 7;

console.log(x);
*/




/*var something = 5;

var something = something + 5;

console.log(something);*/



/*var high_fives = 0;

times = prompt("How many high-fives have you gotten today?");

console.log("Here's one more...");

times++;

console.log(times);*/





/*var seconds_in_minute = 60;

var seconds_in_hour = 60;

var seconds_per_hour = seconds_in_hour * seconds_in_minute;

var seconds_per_day = seconds_per_hour * 24;

var seconds_per_year = seconds_per_day * 365;

console.log(seconds_per_hour);
console.log(seconds_per_day);
console.log(seconds_per_hour);
console.log(seconds_per_year);

var age = 43;

age_in_seconds = age * seconds_per_year;

console.log(age_in_seconds);*/




/*function age(yob)
{
    var old = 2018 - yob;

    return old;
};

console.log(age(1974));*/



/*function age(yob)
{
    var t = parseInt(yob);
    
    you_are = 2018 - t;
    
    return you_are;
};

console.log(age(1974));*/

/*function orange()
{
    var nick;
    
    return nick = "George";
};

console.log(orange());*/

/*var nick;

console.log(nick);*/


/*var a = 15;

var b = 9;

var c = console.log( (a + b) * 2 ) ;*/



/*console.log(12345 + 56789);*/


/*
var something = "This is a long string";

var c = something.slice(0,4);

console.log(c);
*/


/*
var a = 99;
var b = 123;

var c = a + b;

console.log(c);
*/

/*var a = "APPLE"

console.log(a.length);*/


/*var drawCats = function(howManyTimes)
{
    
    for (var i=0; i<howManyTimes; i++)
    {
        console.log(i + "=^.^=");
        
    }
    
}

drawCats(10);*/