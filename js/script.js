document.addEventListener("DOMContentLoaded", function(event){
  var listLink = document.querySelectorAll(".btn")
  var outPut = document.querySelector("#screen")
  var dataToScreen = []
  var num = []
  var num2 = []
  var symbol

  addEvent(listLink)


  /**
  *  This function itera over an object adding an event andler "click",
  */
  function addEvent(obj){
    for (var i = 0; i < obj.length; i ++){
      obj[i].addEventListener("click", function(){
        dataToScreen.push(this.innerText)
        if (this.innerText === "C"){
          appendToScreen(0)
          dataToScreen = []
        }

        console.log("testing " + this.innerText)
        debug(this.innerText)

        if (this.innerText === "+" || this.innerText === "-"
        || this.innerText === "/" || this.innerText === "*" ||
        this.innerText === "%"){
          symbol = this.innerText
        }
        if (!parseInt(dataToScreen[0]) || !parseInt(dataToScreen[0])){
          appendToScreen(0)
          dataToScreen = []
          console.log("No a number")
        } else {
          appendToScreen(dataToScreen.join(""))
          if (this.innerText === "="){
            for (var i = 0; i < dataToScreen.length; i ++){
              if (isNaN(dataToScreen[i])){
                num = dataToScreen.splice(0, i)
                for (var l = 0; l < dataToScreen.length; l ++){
                  if (isNaN(dataToScreen[l])){
                    num2 = dataToScreen.splice(1, (l - 1))
                  }
                }
                arithmetic(num, num2)
              }
            }
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

  //arithmetic function
  function arithmetic(num, num2){
    switch (symbol) {
      case "+":
      var n = 0
      var n1 = 0
      for (var key in num){
        n += num[key]
      }
      for (var key in num2){
        n1 += num2[key]
      }
      appendToScreen(parseFloat(n) + parseFloat(n1))
      break;
      case "-":
      var n = 0
      var n1 = 0
      for (var key in num){
        n += num[key]
      }
      for (var key in num2){
        n1 += num2[key]
      }
      appendToScreen(parseFloat(n) - parseFloat(n1))
      break;
      case "*":
      var n = 0
      var n1 = 0
      for (var key in num){
        n += num[key]
      }
      for (var key in num2){
        n1 += num2[key]
      }
      appendToScreen(parseFloat(n) * parseFloat(n1))
      break;
      case "%":
      var n = 0
      var n1 = 0
      for (var key in num){
        n += num[key]
      }
      for (var key in num2){
        n1 += num2[key]
      }
      appendToScreen(parseFloat(n) % parseFloat(n1))
      break;
      case "/":
      var n = 0
      var n1 = 0
      for (var key in num){
        n += num[key]
      }
      for (var key in num2){
        n1 += num2[key]
      }
      appendToScreen(parseInt(n) / parseInt(n1))
      break;
      default:
      console.log("Check code")
    }
  }
});
