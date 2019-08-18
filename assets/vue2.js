const estimateinfo=document.getElementById("estimateinfo");
const Customerinfo=document.getElementById("Customerinfo");
const vendorinfo=document.getElementById("vendorinfo");
const newvendorinfo=document.getElementById("newvendorinfo");
const servicetype=document.getElementById("servicetype");

const transactiondetails=document.getElementById("transactiondetails");



const but1=()=>{
    estimateinfo.style.display="block";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
}

const but2=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="block"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
}

const but3=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="block"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
}

const but4=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="block"
    transactiondetails.style.display="none"
    servicetype.style.display="none"
}

const but5=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="none"
    servicetype.style.display="block"

}

const but6=()=>{
    estimateinfo.style.display="none";
    Customerinfo.style.display="none"
    vendorinfo.style.display="none"
    newvendorinfo.style.display="none"
    transactiondetails.style.display="block"
    servicetype.style.display="none"
}



// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}




//model

    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

