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
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}

/**
 * Returns true if textbox with given id has some text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The message to display in the sibling span of the textbox
 * @returns boolean
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
