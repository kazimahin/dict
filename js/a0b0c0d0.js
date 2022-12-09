let writeOnTerminal = require("shelljs")


let number
console.log("mahin");
for (let i = 0; i <= 9999; i++) {
    
    let iPrime

    if(i.toString().length < 2){
        
        iPrime = "000"+i.toString()
         
    }else if(i.toString().length < 3){
        
        iPrime = "00"+i.toString()
         
    }else if(i.toString().length < 4){
        
        iPrime = "0"+i.toString()
         
    }else if(i.toString().length < 5){
        
        iPrime = i.toString()
         
    }


   let iDPrime = iPrime[0]+"0"+iPrime[1]+"0"+iPrime[2]+"0"+iPrime[3]+"0"

    console.log(iDPrime)
    // writeOnTerminal.exec(`echo "${iDPrime}"  >> a0b0c0d0.txt` )

 }

 