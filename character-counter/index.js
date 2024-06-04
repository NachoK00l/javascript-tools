function getWordCount(list){
    let count = list.reduce(function (value, value2) {
        return (
            value[value2] ? ++value[value2] :(value[value2] = 1),
            value
        );
    }, {});
    wordList = count;

    return count;
}

function sortDictionary(dict) {
    let sorted = Object.keys(dict).sort(function(a, b) {
        return dict[b] - dict[a];
    });
    if (sorted.includes(" ")) {
        sorted.splice(sorted.indexOf(" "), 1)
    } else if (sorted.includes("")) {
        sorted.splice(sorted.indexOf(""), 1)
    }
    return sorted;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateText() {

    let wordListHolder = document.getElementById("wordList");
    wordListHolder.innerHTML = "";
    
    updateCharacterCount();
    updateWordCount();
    updateWordList();

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
    if (words[words.length - 1] == "" || words[words.length - 1] == " ") {
        wordCount = words.length - 1;
    } else {
        wordCount = words.length;
    }

    wordLabel.innerHTML = wordCount;
}

function updateWordList() {
    let wordListHolder = document.getElementById("wordList");
    let textField = document.getElementById("input");

    let wordList = getWordCount(textField.value.toLowerCase().split(" "));

    for (item of sortDictionary(wordList).slice(0, 10)) {
        wordListHolder.innerHTML += `
        <p class="center">${capitalizeFirstLetter(item)}: ${wordList[item]}</p>`;
    }
}
