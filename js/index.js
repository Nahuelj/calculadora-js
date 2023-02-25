const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clean") {
      screen.innerText = "";
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
        screen.innerText = eval(resultado);
      } catch (error) {
        screen.innerText = "Sintax Error";
        setTimeout(() => (screen.innerText = ""), 500);
      }
    } else if (item.id != "igual") {
      screen.innerText += item.id;
    }
  };
});
