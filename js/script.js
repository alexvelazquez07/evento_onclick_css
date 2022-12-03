function turnOff(element) {
    if (element.innerText === "Logout"){
        element.innerText = "Login";
    console.log(" Soy Logout : ");
    } 
    else 
        if (element.innerText ==="Login"){
            element.innerText = "Logout";
    }
}

function removeButton(element) {
    element.remove();
}


