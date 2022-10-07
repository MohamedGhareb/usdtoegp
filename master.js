let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

dollar.onkeyup = function () {
  pound.value = dollar.value * 19.67;
};

pound.onkeyup = function () {
  dollar.value = pound.value / 19.67;
};

// .............................................document.................
document.body.style.backgroundColor = "gray";
dollar.style.fontSize = "40px";
dollar.style.textAlign = "center";
dollar.style.position = "absolute";
dollar.style.left = "37%";

// ------------------------------------------------------------------
pound.style.position = "absolute";
pound.style.left = "37%";
pound.style.top = "350px";
pound.style.fontSize = "40px";
pound.style.textAlign = "center";

// ------------------------------------------------------------------
let title = document.getElementById("title");
title.style.fontSize = "80px";
title.style.textAlign = "center";
