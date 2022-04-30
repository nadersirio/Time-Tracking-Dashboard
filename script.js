function dateClick(period) {
  switch (period) {
    case "day":
      console.log("1");
      daily.disabled = true;
      weekly.disabled = false;
      monthly.disabled = false;
      break;
    case "week":
      console.log("2");
      daily.disabled = false;
      weekly.disabled = true;
      monthly.disabled = false;
      break;
    case "month":
      console.log("3");
      daily.disabled = false;
      weekly.disabled = false;
      monthly.disabled = true;
      break;
    default:
      console.log("Período inexistente, escolha um habilitado, por favor.");
  }
}