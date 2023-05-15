function dateConvert(date) {
  let mont = date.substring(5, 7);
  let resp = date.substring(8, 10);

  switch (mont) {
    case "01":
      mont = "Enero";
      break;
    case "02":
      mont = "Febrero";
      break;
    case "03":
      mont = "Marzo";
      break;
    case "04":
      mont = "Abril";
      break;
    case "05":
      mont = "Mayo";
      break;
    case "06":
      mont = "Junio";
      break;
    case "07":
      mont = "Julio";
      break;
    case "08":
      mont = "Agosto";
      break;
    case "09":
      mont = "Septiembre";
      break;
    case "10":
      mont = "Octubre";
      break;
    case "11":
      mont = "Noviembre";
      break;
    case "12":
      mont = "Diciembre";
      break;
  }

  return resp + " de " + mont;
}

function yearConvert(date) {
  return date.substring(0, 4);
}

function montConvert(date) {
  let mes = "";
  switch (date) {
    case "01":
      mes = "Enero";
      break;
    case "02":
      mes = "Febrero";
      break;
    case "03":
      mes = "Marzo";
      break;
    case "04":
      mes = "Abril";
      break;
    case "05":
      mes = "Mayo";
      break;
    case "06":
      mes = "Junio";
      break;
    case "07":
      mes = "Julio";
      break;
    case "08":
      mes = "Agosto";
      break;
    case "09":
      mes = "Septiembre";
      break;
    case "10":
      mes = "Octubre";
      break;
    case "11":
      mes = "Noviembre";
      break;
    case "12":
      mes = "Diciembre";
      break;
  }
  return mes;
}

export default { dateConvert, yearConvert,montConvert };
