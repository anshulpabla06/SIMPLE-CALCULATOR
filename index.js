let field=document.getElementById("field");
buttons=document.querySelectorAll('button');
let fieldValue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
          if(buttonText == "CLR")
        {
            fieldValue= "";
           field.value= fieldValue;
        }
        else if(buttonText == '=')
        {
            field.value=eval(fieldValue);
        }
        else if(buttonText=="DEL"){
         

            fieldValue = field.value.toString().slice(0,-1);
            field.value = fieldValue;
        }
        else{
            fieldValue += buttonText;
            field.value=fieldValue;
        }
    })

}