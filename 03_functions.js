
// function addNumbers(num1 , num2){
//     console.log(num1+ num2);
// }


function addNumbers(num1 , num2){
    return num1 + num2;
}

const result = addNumbers(4,5);
// console.log(`Result is : ${result}`);

function loginUserMsg(username = "user"){
    if(username != undefined){
    return `${username} just logged in`
    }else{
        return `Enter the username`
    }

}

const ans = loginUserMsg("Yash")
// console.log(ans);

function one(){
    const username = "Yash"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one()

// if(true){
//     const username = "Shivay"
//     if(username === "Shivay"){
//         const website = ' Youtube'
//         console.log(username + website);
//     }
//     // console.log(website);
// }


// const addtwo = (num1 , num2)=>{
//         return num1+num2
// }
// console.log(addtwo(4,6));

// Immidiately Invoked Function Expression (IIFE)
(function chai() {
    // named IIFE
    // console.log(`DB CONNECTED`)
})();

((Name)=> {
    // console.log(`Do your best ${Name}`);
})('Yash');

( (Millionaire)=> {
    // console.log(`The Millionaire is ${Millionaire}`)
})("Yashraj Songara")