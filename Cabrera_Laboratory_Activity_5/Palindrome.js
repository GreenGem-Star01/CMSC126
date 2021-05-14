function submit1 () {
    var a = document.getElementById("word").value;

    function Palindrome(str) {
        str =  str.replace(/[\W_]/g, "");
        lowcase = str.toLowerCase();
        reverse = str.split("").reverse().join("");
    
        if(lowcase === reverse) {
            return "It is a palindrome";
        }
        else {
            return "It is not a palindrome";
        }
    }
    const ans = Palindrome(a); 
    console.log(ans);
    document.getElementById("answer").value = ans;
}



