function displayCodeSATP() {
  let activeElementId = loader.engine.document.activeElement.id;

  switch (activeElementId) {
    case 61871077: {
      let valueCode = "";
      let element = loader.engine.document.getElementById(61871077);

      if (element) {
        let valueOne = element.getProperty('value.value');
        switch (valueOne) {
          case "ARGENTINA": valueCode = "54"; break;
          case "BOLIVIA": valueCode = "591"; break;
          case "BRASIL": valueCode = "55"; break;
          case "CHILE": valueCode = "56"; break;
          case "ECUADOR": valueCode = "593"; break;
          case "NICARAGUA": valueCode = "505"; break;
          case "PARAGUAY": valueCode = "595"; break;
          case "PERU": valueCode = "51"; break;
          case "URUGUAY": valueCode = "598"; break;
          default: valueCode = ""; break;
        }
      }

      loader.engine.document.getElementById(61871085)?.setValue({ "value": valueCode });
      break;
    }

    case 61871084: {
      let element = loader.engine.document.getElementById(61871084);

      if (element) {
        let valueOne = element.getProperty('value.value');
        element.setValue({ "value": valueOne.toLowerCase() });
      }

      if (loader.engine.document.rootNode[34]?.offsetParent != null) {
        loader.engine.document.getElementById(97747666).visible = false;

      }
      break;
    }

   }
}

// Use addEventListener for better cross-browser compatibility
window.addEventListener('change', displayCodeSATP);
