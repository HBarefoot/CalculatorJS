document.addEventListener("DOMContentLoaded", function(event){
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
          appendToScreen(eval(dataToScreen))
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
