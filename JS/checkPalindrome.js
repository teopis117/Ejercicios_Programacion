// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

// revisar si un string es un palindromo

checkPalindrome("casita");

function checkPalindrome(inputString) {
    let palabra1=[];
    let palabra2=[];
    let i=0;
    for(i=0;i<inputString.length;i++)
    {
        palabra1[i]=inputString[i];
    }
    let a=0;
    for(i=(palabra1.length-1);i>=0;i--)
    {
        
        palabra2[a]=palabra1[i];          
        a++;
        
    }
    
    console.log(typeof palabra1);
    console.log(typeof palabra2);
    palabra1=palabra1.toString();
    palabra2=palabra2.toString();
    console.log(typeof palabra1);
    console.log(typeof palabra2);
    
    if(palabra1.includes(palabra2))
    {
        return true;
    }
    else
    {
        return false;
    }
    
}  



