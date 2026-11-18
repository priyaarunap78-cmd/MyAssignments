let a ="madam"
let b = ""
for(let i = a.length - 1;i>=0;i--)
{
    b=b+a[i]
}
console.log(b);

if(b===a)
{
    console.log("its a palindrome");
    
}
else
{
    console.log("its not a palindrome");
    
}