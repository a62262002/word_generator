// generate_word.js
function sample(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateWord(options) {
  // define things
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };
  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  // define dummy data
  // const options = {
  //   engineer: "on",
  //   designer: "on"
  //   entrepreneur: "on"
  // };

  let collection = [];
  let name = [];
  if (options.engineer === "on") {
    collection = task.engineer;
    name = "工程師";
  }
  if (options.designer === "on") {
    collection = task.designer;
    name = "設計師";
  }
  if (options.entrepreneur === "on") {
    collection = task.entrepreneur;
    name = "創業家";
  }

  //return error notice if collection is empty
  if (collection.length === 0) {
    return "There is no valid characters in your selection.";
  }
  // console.log(collection.length);

  // start generating word
  let word = "";
  word =
    "身為一個" +
    name +
    "，" +
    sample(collection) +
    "，" +
    sample(phrase) +
    "吧!";
  console.log(word);

  // return the generated word
  return word;
}

module.exports = generateWord;
