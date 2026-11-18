const browserVersion = 'chorme'

function getBrowserVersion() {
    let browserVersion 
    if(browserVersion === 'chorme'){ 
        let browserVersion1
        console.log("version is inside the if block", + browserVersion1);   
    }
    //console.log("version is inside the if block", + browserVersion1);   

    console.log("version is outside of if block inside the function block" , + browserVersion);
    
}
getBrowserVersion();
console.log("version is outside of if block outside the function block" , + browserVersion);
