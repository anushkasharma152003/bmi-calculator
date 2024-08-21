 const form =document.querySelector('form')

 form.addEventListener('submit', function(e){
    e.preventDefault();


 const height= parseInt(document.querySelector('#input1').value)
 const weight= parseInt(document.querySelector('#input2').value)
 const result = document.querySelector('#result')
 const result2 = document.querySelector('#result')

 if(height=== '' || height < 0|| isNaN(height)){
    result.innerHTML=`${height} is not valid height`
    
 }


 else if(weight=== '' || weight < 0|| isNaN(weight)){
    result.innerHTML=`${weight} is not valid weight`
 }
  
 else{
        const bmi= (weight/ ((height*height) /10000 )).toFixed(2)
        //for the result
      
       

         if( bmi <18.6){
        
              result.innerHTML=` ${bmi}  you you are underweight , kuch khaya piya kr`
           }
           else if( bmi>24.6){

               result.innerHTML=` ${bmi} you are overweight , gym jao`
           }
           else{

              result.innerHTML=` ${bmi} you are fit as a fiddle,  phir bhi gym jao` 
        }
        

    }
   
      
   
         
 
      

 


})



