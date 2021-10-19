// why:
// since javascript is single-threaded (everything runs on the main thread)
// we want to avoid blocking


// when
// requesting (over a network)
// database
// user input
// I/O (file handling)

// Promise states:
// pending
// fulfilled
    // resolved / rejected

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             throw new Error("shoot");
//             resolve("Everything went well");
//         } catch {
//             reject("Oh no");
//         }
//     }, 4000)
// })
// .then(message => console.log("The message is:", message))
// .catch((error) => console.log("Error was:", error));

function nodeIsAMood(){
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Noice")
            }, 3000);
        } catch {
            reject("Damn");
        }
    });
}

// nodeIsAMood()
// .then(console.log)
// .catch(console.log);

(async function asychronousFunction() {
    const message = await nodeIsAMood();
    console.log(message);
})();

