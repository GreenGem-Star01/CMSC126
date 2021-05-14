function submit1 (){
    var a = parseInt(document.getElementById("int").value);
    console.log(`Input element: ${a}`);
    
    function convertToBinary() {
        var b = a.toString (2);

    if (a < 0) {
        alert ("Invalid number. The number should be positive integer.")
        }

    else{
        console.log(`Binary: ${a}`);
        document.getElementById("int2").value = a;
        console.log(`Binary: ${b}`);
        document.getElementById("answer").value = b;
    }   
    }
    convertToBinary();
}
