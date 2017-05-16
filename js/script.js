document.addEventListener("DOMContentLoaded", function(){
  var listLink = document.querySelectorAll(".btn")
  var outPut = document.querySelector("#screen")
  var dataToScreen = ""
  var result

  addEvent(listLink)
  /**
  *  This function itera over an object adding an event Handler "click",
  */
  function addEvent(obj){
    for (var i = 0; i < obj.length; i ++){
      obj[i].addEventListener("click", function(){
        if (this.innerText !== "="){
          if (this.innerText !== "C"){
            appendToScreen(dataToScreen += this.innerText)
            console.log(dataToScreen);
          } else {
            dataToScreen = ""
            appendToScreen("0")
          }
        } else {
          result = eval(dataToScreen)
          if (!result || !isFinite(result)){
            appendToScreen(result = 0)
            dataToScreen = ""
          } else {
            appendToScreen(result)
          }
        }
      })
    }
  }

  //debugin function
  function debug(obj){
    console.log(typeof obj)
    console.log(obj)
  }

  //append data to screen
  function appendToScreen(obj){
    outPut.innerText = obj
  }
});
