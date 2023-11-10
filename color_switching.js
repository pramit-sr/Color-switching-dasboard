const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(e){
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
    });
    button.addEventListener("dblclick", function(e){
        if(e.target.id === 'gray'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'white';
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = 'white';
        }
    });
});
