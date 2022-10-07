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

dollar.style.position = "absolute";
dollar.style.left = `230px`;

dollar.style.bottom = `190px`;
// ------------------------------------------------------------------
pound.style.position = "absolute";
pound.style.left = `230px`;
pound.style.bottom = `150px`;

// ------------------------------------------------------------------
let title = document.getElementById("title");
title.style.position = "absolute";
title.style.left = "160px";
