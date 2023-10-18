a = 10;
b = 20;


console.log(a+b);

let waitData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 2000);     
});

waitData.then((b) => {
    console.log(a+b);
});
