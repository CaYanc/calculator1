
// primera calculator

let output = document.getElementById("output")
let historial = document.getElementById("historial")
    function display(num){
        output.value += num
    }
    
    
     function delAll(){
        output.value = output.value.slice(0, 0) 
        historial.value = output.value.slice(0, 0) 
    }

    

    function del(){
        output.value = output.value.slice(0, -1)
    }

    
    function calculate(){
        historial.textContent = output.value
        output.value = eval(output.value)
      

    }
   














