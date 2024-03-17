document.getElementById("alertname").onclick = function () {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  const message = "muneeb Ur Rehman";
  alert(message);
  document.getElementById("intput").innerHTML = "alert ('Muneeb Ur Rehman')";
  document.getElementById("output").innerHTML = "";
};
document.getElementById("alertnumber").onclick = function () {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  alert("2682");
  document.getElementById("intput").innerHTML = "alert('2682')";
  document.getElementById("output").innerHTML = "";
};

document.getElementById("showvariable").onclick = function () {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").innerHTML = "var <br> let <br> const";
};

document.getElementById("showcamel").onclick = () => {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").innerHTML = "thisIsExampleOfCamelCase ";
};
document.getElementById("sum").onclick = () => {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  const a = 10;
  const b = 20;
  const sum = a + b;
  document.getElementById("intput").innerHTML =
    "const a=10;<br>const b=20;<br>const sum=a+b";
  document.getElementById("output").innerHTML = sum;
};
document.getElementById("sub").onclick = () => {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  const a = 20;
  const b = 10;
  const substract = a - b;
  document.getElementById("intput").innerHTML =
    "const a=20;<br>const b=10;<br>const substract=a-b";
  document.getElementById("output").innerHTML = substract;
};
document.getElementById("multi").onclick = () => {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  const a = 10;
  const b = 2;
  const multiply = a * b;
  document.getElementById("intput").innerHTML =
    "const a=10;<br>const b=2;<br>const multiply=a*b";
  document.getElementById("output").innerHTML = multiply;
};

document.getElementById("divide").onclick = () => {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  const a = 10;
  const b = 2;
  const Divide = a / b;
  document.getElementById("intput").innerHTML =
    "const a=10;<br>const b=2;<br>const multiply=a/b";
  document.getElementById("output").innerHTML = Divide;
};
document.getElementById("calculate").onclick = () => {
  document.getElementById("intput").innerHTML = "";
  document.getElementById("output").innerHTML = "";
  let statement = 15 / 3 + 23 * 4 - (3 + 6);
  document.getElementById("intput").innerHTML =
    "let statement=  15 / 3 + 23 * 4 - (3 + 6)";
  document.getElementById("output").innerHTML = statement;
};

document.getElementById("clearStatement").onclick = () => {
    document.getElementById("intput").innerHTML = "";
    
};
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = "";
};
