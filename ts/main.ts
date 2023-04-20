window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

/**
 * Resets all spans to default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}

function main():void{
    processForm(); 
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    validateDate();
}

function processForm() {
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing Form";
    msgHeading.setAttribute("class", "message");
    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    setTimeout(function () {
        msgHeading.remove();
    }, 5000); // milliseconds
}

function validateDate():void{
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        // dobBox.nextElementSibling.innerHTML = "MM/DD/YYYY"
        // or DOM(document object model) approach
        let errSpan = document.getElementById("dob-span");
        errSpan.innerHTML = "MM/DD/YYYY";
    }
}

function isValidDate(input:string):boolean{
    // mm/dd/yyyy
    // \d{1,2}\/\d{1,2}\/\d{4} checks for date format
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g 
    // g(global) looks for pattern throughout string
    // ^ $ looks for one occurrence, no extra
    return pattern.test(input);
}

/**
 * Returns true if textbox with given id has some text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the textbox
 * @returns boolean
 */
function isTextPresent(id:string, errMsg:string):boolean{
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
