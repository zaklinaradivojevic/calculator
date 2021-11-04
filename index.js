// Determines button clicked via id
function myFunction(id) {
    document.calc.result.value += id;
}

// Clears calculator input screen
function clearScreen() {
    document.calc.result.value = "";
}

// Calculates input values
function calculate() {
    try {
        var input = eval(document.calc.result.value);
        document.calc.result.value = input;
    } catch (err) {
        document.calc.result.value = "Error";
    }
}

//change  theme  on slider.value

let slider = document.getElementById("slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    if (this.value === 1) {
        console.log("theme 1");
    }
    if (this.value === 2) {
        console.log("theme 2");
    }

    if (this.value === 3) {
        console.log("theme 3");
    }

}
function changeStyle(){
    var curVal = document.querySelector('.slider').value;
    console.log(curVal);
    if(curVal == 1 ){
        var link = document.createElement('link'); 
  
        // set the attributes for link element
       link.rel = 'stylesheet'; 
      
        link.type = 'text/css';
      
        link.href = 'theme1.css'; 
  
        // Get HTML head element to append 
        // link element to it 
        document.getElementsByTagName('HEAD')[0].appendChild(link); 
    
    } 
    if(curVal == 2 ){
        var link = document.createElement('link'); 
  
        // set the attributes for link element
           link.rel = 'stylesheet'; 
      
        link.type = 'text/css';
      
        link.href = 'theme2.css'; 
  
        // Get HTML head element to append 
        // link element to it 
        document.getElementsByTagName('HEAD')[0].appendChild(link); 
  
    }
    if(curVal == 3 ){
        var link = document.createElement('link'); 
  
        // set the attributes for link element
           link.rel = 'stylesheet'; 
      
        link.type = 'text/css';
      
        link.href = 'theme3.css'; 
  
        // Get HTML head element to append 
        // link element to it 
        document.getElementsByTagName('HEAD')[0].appendChild(link); 
  
    }
}