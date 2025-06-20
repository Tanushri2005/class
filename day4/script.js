console.log("Hello world");
console.warn("Warning!");
console.error("Error!");
console.table([{name: "tanu",age: "19"},{name: "tanushri",age:"20"}])
//eval function
eval("let a=5;console.log(\"Hello world!\");console.log(a);");
let x=3.14;
console.log(x);
//JSON->JS OBJECT NOTATION
let obj={ name: "John"};
let str= JSON.stringify(obj);
console.log(str);
let back=JSON.parse(str);
console.log(back);
//localStorage.setItem("username","siva");
//localStorage.setItem("firstname",username);
//delect
//localStorage.removeItem("username");
//console.log(localStorage.getItem("username"));
//promise
let promise=new Promise((resolve) =>{
let=true;
//if (commit==true){
    setTimeout(()=>{resolve("Hello")}, 10000);
    //resolve("Done");
});
promise.then(res=> console.log(res)).catch(err => console.log(err));
//closure
function outer(){
    let name="JS";
    return function inner(){
        console.log(name);
    }
}
//DOM
let divClass=document.getElementById("DOM");
let =document.querySelector("div");//list
DOM.style.color="blue"
let eleCreate=document.createElement("div");//element
eleCreate.innerHTML="Hello world!";//data added
eleCreate.addEventListener("click", () => {
  eleCreate.innerHTML = "You clicked me!";
});
//append
divClass.appendChild(eleCreate);
//remove child
//setTimeout(()=>{divClass.removeChild(eleCreate), 10000});
// setTimeout(,1000000);


/*const main = document.getElementById("mainText");

// Function to update text with fade-in effect
function showMessage(message, delay) {
  setTimeout(() => {
    main.classList.remove("show");
    setTimeout(() => {
      main.innerText = message;
      main.classList.add("show");
    }, 300); // Small delay before showing new text
  }, delay);
}

// Sequence of messages
showMessage("Welcome to my page", 5000);   // After 5 seconds
showMessage("Tanushri", 7000);             // After 7 seconds
showMessage("EIE", 9000);                  // After 9 seconds
showMessage("8.31", 11000);                // After 11 seconds*/
