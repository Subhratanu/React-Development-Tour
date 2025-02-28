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