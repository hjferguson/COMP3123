async function sayHello() {
    try {
        console.log("Hello World - START");
        let c = await makePromiseCall(100);
        console.log(c.msg);
        console.log("Hello World - END");
    } catch (error) {
        console.error("Error: " + error);
    }
}

async function makePromiseCall(x) {
    return new Promise((resolve, reject) => {
        if (x > 2) {
            resolve({ msg: "Promise got success" });
        } else {
            reject("Promise got rejected");
        }
    });
}

sayHello().then(() => {
    console.log("sayHello");
});
