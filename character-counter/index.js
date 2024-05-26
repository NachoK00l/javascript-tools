var test = "hello";

function updateText() {
    
    updateCharacterCount();
    updateWordCount();

} 

function updateCharacterCount(){
    let characterLabel = document.getElementById("characterCount");
    let textField = document.getElementById("input");

    let text = textField.value;
    let count = text.length;

    characterLabel.innerHTML = count;
}

function updateWordCount(){
    let wordLabel = document.getElementById("wordCount");
    let textField = document.getElementById("input");

    let text = textField.value;

    let words = text.split(" ");

    let wordCount;
    if (words[words.length - 1] == "") {
        wordCount = words.length - 1;
    } else {
        wordCount = words.length;
    }

    wordLabel.innerHTML = wordCount;
}