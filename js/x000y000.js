const { machine } = require("os");
// let writeOnTerminal = require("shelljs")

let number
console.log("mahin");
for (let i = 0; i <= 99; i++) {
    
    let iPrime = i.toString()

    if(i.toString().length < 2){
        
        iPrime = "0"+i.toString()
         
    }


   let iDPrime = iPrime[0]+"000"+iPrime[1]+"000"

    console.log(iDPrime)
    // writeOnTerminal.exec(`echo "${iDPrime}"  >> mahin.txt` )
 }

 