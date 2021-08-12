const screenTag=document.querySelector(".screen");
const button=document.querySelectorAll(".btn");
const equal=document.querySelector('.equal');
const clear=document.querySelector('.clear');
for(let i=0;i < button.length;i++){
    button[i].addEventListener('click',(e)=>{
        const v=e.target.id; 
       screenTag.value+=v;  
    })
}
equal.addEventListener('click',()=>{
    if(screenTag.value ===''){
      return;
    }
   const re=/^[*-+/]/;
   if(re.test(screenTag.value)===true){
       screenTag.value='';
       return;
   }
   const end=/[*-+/]$/;
   if(end.test(screenTag.value)){
       screenTag.value="";
       return;
   }
   const s=/^[-]/;
   if(s.test(screenTag.value)){
       screenTag.value="";
       return;
   }
   const e=/[-]$/;
   if(e.test(screenTag.value)){
       screenTag.value='';
       return;
   }
   const p=eval(screenTag.value);
   screenTag.value=p; 
})
clear.addEventListener('click',()=>{
    screenTag.value='';
})
console.log('--------------WELCOME------------------')
console.log('-----------Caculation--------------')