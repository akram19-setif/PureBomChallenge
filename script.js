// Challenge :

let myTasks=document.querySelector(".tasks");
let myInput=document.querySelector(".form .input");
let myBtn=document.querySelector(".add");
document.querySelector(".form").style.cssText="width:500px;display: flex;margin: auto;background: #eee;padding: 20px;justify-content: center;";
myInput.style.cssText="padding:13px;  margin-right: 34px;font-size: 16px;";
myBtn.style.cssText="color: white;background: red;border: none;border-radius: 5px;padding: 15px;cursor: pointer;";
let addSection=function(e) {
  let newDiv=document.createElement('div');
  let newPar=document.createElement('p');
  let newBtn=document.createElement("input");
  newBtn.type="submit";
  newBtn.value="Delete";
  newDiv.title=myInput.value;
  newDiv.id=parseInt(Math.random()*10000);
  newPar.textContent=myInput.value;
  window.localStorage.setItem(myInput.value, newDiv.getAttributeNames);
  newDiv.append(newPar,newBtn);
  myTasks.appendChild(newDiv);
  myInput.value="";
  newBtn.addEventListener("click",function(e) {
    window.localStorage.removeItem(newPar.textContent);
    e.target.parentNode.remove();
  });
  newBtn.style.cssText="color: white;background: red;border: none;border-radius: 5px;padding: 15px;cursor: pointer;";
  newDiv.style.cssText="width:500px;margin: 10px auto;background: #eee;display: flex;padding: 20px;flex-direction: row;justify-content: space-between";
}

myBtn.onclick=addSection;