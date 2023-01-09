let string="";
let buttons=document.querySelectorAll('.keys');
Array.from(buttons).forEach(function(button){
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
        }
    });
});