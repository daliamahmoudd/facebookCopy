let c =1;
let view = document.getElementById('onPres');
let myForm =document.getElementById("myForm");
myForm.addEventListener("click",function myFunction(e){

     e.preventDefault();  
       if(c%2==1)
       {
              view.classList.add("onPressView");
              view.classList.remove("displayed");
              document.getElementById("overlay").style.display = "block";
              
       }
       else
       {
              view.classList.remove("onPressView");
              view.classList.add("displayed");
              document.getElementById("overlay").style.display = "none";

       }
    c++;

} )

function myFunction(e){

       if(c%2==1)
       {
              view.classList.add("onPressView");
              view.classList.remove("displayed");
              document.getElementById("overlay").style.display = "block";              
       }
       else
       {
              view.classList.remove("onPressView");
              view.classList.add("displayed");
              document.getElementById("overlay").style.display = "none";

       }
    c++;

}