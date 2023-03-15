let myText1= 'The Best Naturel ';
let myText2= "Fat-Burning Nutrients";
let myText3= 'For Your Body Type & Metabolism …';
 


let i = 0;
let i1 = 0;
let i2 = 0;

let ii = 0;

let typingEffect = (time,start)=>{
    return new Promise((resolve)=>{
if(ii === 0){
    setTimeout(()=>{
        resolve(start())
    },time)
}
    })
}


window.addEventListener('load',()=>{
typingEffect(500,()=>{
    startTyping1()
})
.then(()=>{
  return  typingEffect(1000,()=>{
    startTyping2();
  })
})
.then(()=>{
    return  typingEffect(1900,()=>{
        startTyping3();
      })
})
.then(()=>{
  return  typingEffect(3500,()=>{
      copybtn();
    })
})


})

























let  startTyping1 = ()=>{

let typing = setInterval(
 function(){
 document.getElementById('type1').textContent += myText1[i];
     i++;
     if(i > myText1.length - 1){
         
   clearInterval(typing);
     
     }
  },100)
}

let startTyping2 = ()=>{

    let typing1 = setInterval(
     function(){
     document.getElementById('type2').textContent += myText2[i1];
         i1++;
         if(i1 > myText2.length - 1){
             
       clearInterval(typing1);
         
         }
     
     }
    
    
    ,100)
    
    }


   let startTyping3 = ()=>{

        let typing2 = setInterval(
         function(){
         document.getElementById('type3').textContent += myText3[i2];
             i2++;
             if(i2 > myText3.length - 1){
                 
           clearInterval(typing2);
             
             }
         
         }
        
        
        ,100)
        
        }
    
   let copybtn = ()=>{
    let copyDta = document.querySelector('[data-template]').content.cloneNode(true).children[0];
    document.querySelector('[data-typing]').appendChild(copyDta);
   }
  
    


   