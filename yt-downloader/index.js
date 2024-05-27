const fs = require('fs');
const ytdl = require('ytdl-core');

function getVideo(){

  let url = document.getElementById("youtubeUrl").value;
  let formatSelector = document.getElementById("format");

  let selectedFormat = formatSelector.options[formatSelector].text;

  ytdl(url, { filter: format => format.container === selectedFormat })
  
}
