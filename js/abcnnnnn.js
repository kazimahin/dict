
let writeOnTerminal = require("shelljs")

let number
for (let n = 0; n <= 9; n++) {

    let  nPrime = n.toString()

for (let i = 0; i <= 999; i++) {
    
    let iPrime

    if(i.toString().length < 2){
        
        iPrime = "00"+i.toString()
         
    }else if(i.toString().length < 3){
        
        iPrime = "0"+i.toString()
         
    }else if(i.toString().length < 5){
        
        iPrime = i.toString()
         
    }

    let iDPrime = iPrime+nPrime+nPrime+nPrime+nPrime+nPrime
    console.log(iDPrime)
    // writeOnTerminal.exec(`echo "${iDPrime}"  >> x00y00ab.txt` )

  
    
}

}
