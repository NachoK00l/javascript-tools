function updateText() {
    let outputLabel = document.getElementById("output");
    let textField = document.getElementById("input");

    let text = textField.value;
    let count = text.length;
    outputLabel.innerText = count;
}