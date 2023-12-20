let buttons=document.querySelectorAll("button");
let disp=document.getElementById("input-box")

/*st=''
nine.addEventListener('click',()=>{
    console.log("clicked 9")
})*/

str='';
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let inval=button.innerText;
        if (inval!="=" && inval!='AC' && inval!='del'){
            if (inval==="x"){
                str=str+"*";
            }else{
                str=str+inval;
            }
            disp.value=str;
        }else if(inval==="="){
            let val=eval(str);
            str=val;
            disp.value=val;
        }else if(inval==="AC"){
            str='';
            disp.value=str;
        }else if(inval==="del"){
            str=str.slice(0,-1);
            disp.value=str;
        }

    })
})