let btns     = document.querySelectorAll('.btn'),
    textarea = document.querySelector('textarea'),
    btnDeleteAll = document.querySelector('.deleteAll');
function AddAction(e){ // function to add the nubers and math function
    let value = textarea.value;
        if(e.target.innerHTML == '+'){
            textarea.value += '+';
        }
        else if (e.target.innerHTML == '-'){
            textarea.value = value + '-';
        }
        else if(e.target.innerHTML == '*'){
            textarea.value = value + '*';
        }
        else if(e.target.innerHTML == '/'){
            textarea.value = value + '/';
        }
        else if(e.target.innerHTML == '='){
            textarea.value = eval(value);
        }
        else{
            textarea.value += e.target.innerHTML;
        }
}
function Delete(){
    textarea.value = "";
}

btns.forEach(function(item){ // cach a touch and using a function
    if (screen.width > 900){
        item.addEventListener('click', AddAction);
    }
    else{
        item.addEventListener('touchstart', AddAction);
    }
});
 //delete All from the screen math
if (screen.width > 900){
    textarea.addEventListener('click', Delete);
    console.log(false)
}
else{
    textarea.addEventListener('touchend', Delete);
    console.log(true)
}

