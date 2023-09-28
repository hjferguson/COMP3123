function makePromiseCall(x) {
    return new Promise((resolve, reject) => { // Return the Promise
        if (x > 2) { // Check the value of x
            resolve({ msg: "Promise got success" }); // Resolve with an object
        } else {
            reject("Promise got rejected"); // Reject with an error message
        }
    });
}

makePromiseCall(100)
    .then((data) => {
        console.log("Success: " + data.msg);
    })
    .catch((err) => { // Use .catch() to handle errors
        console.log("Error: " + err);
    })
    .finally(() => {
        console.log("finally");
    });

makePromiseCall(1)
    .then((data) => {
        console.log("Success: " + data.msg);
    })
    .catch((err) => {
        console.log("Error: " + err);
    })
    .finally(() => {
        console.log("finally");
    });

// Chaining
makePromiseCall(100)
    .then((data) => {
        console.log("call 1");
        return "some data"; // Return a value to chain
    })
    .then((data) => {
        console.log("call 2");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });
