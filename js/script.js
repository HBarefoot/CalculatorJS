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
            styleCSS(dataToScreen)
          } else {
            dataToScreen = ""
            appendToScreen("0")
            outPut.style = "font-size: 70px;"
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

  //Changin style
  function styleCSS(obj){
    // console.log(obj.length)
    switch (obj.length) {
      case 9:
      outPut.style = "font-size: 35px;"
      break;
      case 17:
      dataToScreen += "\n"
      break;
      case 36:
      alert("No more number for you !")
      appendToScreen("0")
      dataToScreen = ""
      outPut.style = "font-size: 70px;"
      break;
      default:

    }
  }
});
