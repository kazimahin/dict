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


   let iDPrime = iPrime[0]+iPrime[0]+iPrime[1]+iPrime[1]+iPrime[2]+iPrime[2]+iPrime[3]+iPrime[3]

    console.log(iDPrime)
    writeOnTerminal.exec(`echo "${iDPrime}"  >> 11_22_33_44.txt` )

 }

 