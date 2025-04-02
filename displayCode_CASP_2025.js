function displayCodeCASP() {

  switch (loader.engine.document.activeElement.id) {
    case 61621192:
      var valueOne = loader.engine.document.getElementById(61621192).getProperty('value.value');
  
      switch (valueOne) {
        case "COSTA RICA":valueCode = "506"; break;
        case "EL SALVADOR":valueCode = "503"; break;
        case "GUATEMALA":valueCode = "502"; break;
        case "NICARAGUA":valueCode = "505"; break;
        case "PANAMA":valueCode = "507"; break;
        case "REPUBLICA DOMINICANA":valueCode = "809"; break;
        case "HONDURAS":valueCode = "504"; break;
        default: valueCode = ""; break;
      }
   
      loader.engine.document.getElementById(61621200).setValue(({"value": valueCode}));
      break;
   case 61621199:
     var valueOne = loader.engine.document.getElementById(61621199).getProperty('value.value');
     loader.engine.document.getElementById(61621199).setValue(({"value": valueOne.toLowerCase()})); 
     if (loader.engine.document.getElementById(61485168).visible == true) {
        loader.engine.document.getElementById(106187212).visible = false;
     }
     break;
  }
}
window.onchange = displayCodeCASP;
