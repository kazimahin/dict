const { machine } = require("os");
let writeOnTerminal = require("shelljs")

let number
console.log("mahin");
for (let i = 0; i <= 96; i++) {
    
    let i2 = i+1
    let i3 = i+2
    let i4 = i+3
    

    let iPrime = i.toString()
    let iPrime2 = i2.toString()
    let iPrime3 = i3.toString()
    let iPrime4 = i4.toString()

    if(i.toString().length < 2){
        
        iPrime = "0"+i.toString()
         
    }
    if(i2.toString().length < 2){
        
        iPrime2 = "0"+i2.toString()
         
    }
    if(i3.toString().length < 2){
        
        iPrime3 = "0"+i3.toString()
         
    }
    if(i4.toString().length < 2){
        
        iPrime4 = "0"+i4.toString()
         
    }


    let iDPrime = iPrime4+iPrime3+iPrime2+iPrime

    console.log(iDPrime)
    writeOnTerminal.exec(`echo "${iDPrime}"  >> ab-1-1-1.txt` )
 }

