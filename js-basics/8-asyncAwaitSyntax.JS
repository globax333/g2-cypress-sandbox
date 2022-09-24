async function asyncFunc() {
    return 'text from function'
}

asyncFunc()
console.log(asyncFunc())

//function asyncFunc(){
    //await <someAction>}


const asyncFunc = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Text for async func')  
        }, 3000)
        resolve()
    })
 } 

 const asyncFunction = async () => {
    console.log('Start');
    await asyncFunc();
    console.log('End');
 }
 asyncFunction();