

let number

for (let i = 0; i <= 99999999; i++) {
    
    let iPrime

    if(i.toString().length < 2){
        
        iPrime = "0000000"+i.toString()
         
    }else if(i.toString().length < 3){
        
        iPrime = "000000"+i.toString()
         
    }else if(i.toString().length < 4){
        
        iPrime = "00000"+i.toString()
         
    }else if(i.toString().length < 5){
        
        iPrime = "0000"+i.toString()
         
    }else if(i.toString().length < 6){
        
        iPrime = "000"+i.toString()
         
    }else if(i.toString().length < 7){
        
        iPrime = "00"+i.toString()
         
    }else if(i.toString().length < 8){
        
        iPrime = "0"+i.toString()
         
    }else if(i.toString().length < 9){
        
        iPrime = i.toString()
         
    }


    console.log(iPrime)

  
    
}

 