
let writeOnTerminal = require("shelljs")

let number

for (let i = 0; i <= 999; i++) {
    
    let iPrime

    if(i.toString().length < 2){
        
        iPrime = "00"+i.toString()
         
    }else if(i.toString().length < 3){
        
        iPrime = "0"+i.toString()
         
    }else if(i.toString().length < 5){
        
        iPrime = i.toString()
         
    }

    let iDPrime = iPrime[0]+"00"+iPrime[1]+"00"+iPrime[2]+"00"
    console.log(iDPrime)
    // writeOnTerminal.exec(`echo "${iDPrime}"  >> x00y00ab.txt` )

  
    
}

 