
function greetings() {
    console.log("Hello World");
}

// greetings();

const newGreetings = function greetings() {
    console.log("Hello World");
};

// newGreetings();

const anonymousFunctionGreeting = function () {
    console.log("Hello World");
}

function interact (anyFunctionReference) {
    anyFunctionReference();
}

// interact(anonymousFunctionGreeting);

function poke () {
    console.log("Hey");
}
// interact(poke);

// interact(() => console.log("kick"));

function interactWithSomeone(anyFunction, name) {

    anyFunction(name);
}

// function callBackLater(name) {
//     console.log(`hi, ${name}. Im ready to help you.`)
// }
const callBackLater = (name) => console.log(`hi, ${name}. I'm ready to help you.`)
// interactWithSomeone(callBackLater, "Emil");

const helpWithHomeworkLater = (classMate) => console.log(`Hey ${classMate}, I can help you later`);

// interactWithSomeone(helpWithHomeworkLater, () => console.log("Innerfunction"));

