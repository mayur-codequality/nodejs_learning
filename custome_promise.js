function  getSum(a,b) {

    const custPromise = new Promise((resolved, rejected)=>{

        const sum = a+b;

        if(sum <= 5){

            resolved(sum)
        }else{
            reject(new Error("Ooops!....Number must be less than 5"))
        }


    });

    return custPromise
}

// 
// getSum(2,6).then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

/******************** Chaining promises *********************/
getSum(3,1)
.then(data=>{
    console.log("Initial Data: ", data)
    value = data + 1
    return value
})
.then(newData =>{
    console.log("Modified Data: ", newData)
})
.catch(err=>{
    console.log("<==================== Error =============> ", err);
})