console.log("Hello I'm Javascript");
console.log(document);
console.log(document.getElementsByTagName("h1")[0].innerHTML);
document.getElementsByTagName("span")[0].innerHTML="Hi, I'm coming from Javascript";
console.log(document.getElementsByTagName("span"));
document.getElementById("primary-btn-id").addEventListener('click',function (){
    alert("Hello All! I'm Clicked!!!");
});

function dontClickButton(){
    alert("Ohhh Sorry! I Clicked You!!!");
}

function changeImage(){
    let bulbVal=document.getElementById("bulb");
    if(bulbVal.src.match("lightbulb-ON")){
        bulbVal.src="./assets/lightbulb-OFF.png";
    }
    else{
        bulbVal.src="./assets/lightbulb-ON.png";
    }
}

const showPassword=()=>{
    let inputValue=document.getElementById("inputVal");
    let buttonValue=document.getElementById("change-id");
    if(inputValue.type=='password'){
        inputValue.type='text';
        buttonValue.innerHTML='HIDE'
    }else{
        inputValue.type='password';
        buttonValue.innerHTML='SHOW'
    }
}