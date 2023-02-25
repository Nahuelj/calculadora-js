const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
const screenResultado = document.querySelector("#resultado");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clean") {
      screen.innerText = "";
      screenResultado.innerText = "";
    } else if (item.id == "division") {
      screen.innerText += "/";
    } else if (item.id == "multiplicacion") {
      screen.innerText += "*";
    } else if (item.id == "delete") {
      let str = screen.innerText;
      screen.innerText = str.substring(0, str.length - 1);
    } else if (item.id == "resta") {
      screen.innerText += "-";
    } else if (item.id == "suma") {
      screen.innerText += "+";
    } else if (item.id == "igual" && screen.innerText != "") {
      try {
        let resultado = screen.innerText.toString();
        screenResultado.innerText = eval(resultado);
        if (eval(resultado)== undefined){
          screenResultado.innerText = "Sintax Error";
          setTimeout(() => (screenResultado.innerText = ""), 500);
        }
      } catch (error) {
        screenResultado.innerText = "Sintax Error";
        setTimeout(() => (screenResultado.innerText = ""), 500);
      }
    } else if (item.id != "igual") {
      screen.innerText += item.id;
    }
  };
});
