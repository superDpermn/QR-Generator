import "./lib/easy.qrcode.min.js";

const submitButton = document.getElementById("Input-Submit");
const saveSSButton = document.getElementById("Screenshot-Button");
const textInput = document.getElementById("QR-Input-Text");
const QRContainer = document.getElementById("output-container");
const settings = {
  text: "",
  width: 512,
  height: 512,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.Q, // L, M, Q, H
  drawer: "svg",
  quietZone: 32,
  quietZoneColor: "#00000000",
  backgroundImage:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHJlY3Qgd2lkdGg9IjUwMiIgaGVpZ2h0PSI1MDIiIHg9IjUiIHk9IjUiIHJ4PSIxNSIgcnk9IjE1IiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiMwMDAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxMCIvPg0KPC9zdmc+",
  backgroundImageAlpha: 1,
};
var currentQR;
submitButton.addEventListener("click", () => {
  if (textInput.value.length > 0) {
    settings.text = textInput.value;
    currentQR = new QRCode(QRContainer, settings);
  }
});

// function download(file) {
//   //creating an invisible element

//   let element = document.createElement("a");
//   element.setAttribute(
//     "href",
//     "data:image/svg+xml;charset=utf-8, " +
//       encodeURIComponent(QRContainer.innerHTML)
//   );
//   element.setAttribute("download", file);
//   document.body.appendChild(element);
//   element.click();

//   document.body.removeChild(element);
// }

saveSSButton.addEventListener("click", () => {
  if (currentQR) currentQR.download("QR_Code");
});

