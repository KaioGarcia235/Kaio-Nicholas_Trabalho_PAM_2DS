/**
 atividade 1 tem scrip na propia página para não atralhar as outras
 */

//atividade 2
function alerta() {
    alert("alerta");
}

/*
atividade 3
document.getElementById(): Retorna o elemento com o ID especificado
document.getElementsByTagName(): Retorna uma coleção de elementos com o nome da tag especificada
document.getElementsByClassName(): Retorna uma coleção de elementos com a classe especificada
document.querySelector(): Retorna o primeiro elemento que corresponde ao seletor especificado
document.querySelectorAll(): Retorna todos os elementos que correspondem ao seletor especificado
*/

function resultados() {
    let elementById = document.getElementById("id");
    let elementsByTagName = document.getElementsByTagName("p");
    let elementsByClassName = document.getElementsByClassName("classe");
    let firstElement = document.querySelector(".elements");
    let allElements = document.querySelectorAll(".elements");

    elementById.style.fontWeight = "bold";
    elementById.style.color = "red";

    for (let element of elementsByTagName) {
        element.style.color = "purple";
        element.style.fontWeight = "bold";
    }

    for (let element of elementsByClassName) {
        element.style.textDecoration = "underline";
    }

    firstElement.style.fontSize = "50px";

    allElements.forEach(element => {
        element.style.backgroundColor = "green";
    });

    let elementsInfo = '';

    elementsInfo += `<p>elementById:</p>`;
    elementsInfo += `<p>Text Content: ${elementById.textContent}</p>`;
    elementsInfo += `<p>Font Weight: ${elementById.style.fontWeight}</p>`;
    elementsInfo += `<p>Color: ${elementById.style.color}</p>`;

    elementsInfo += `<p>elementsByTagName:</p>`;
    elementsByTagName.forEach((element, index) => {
        elementsInfo += `<p>Element ${index + 1}:</p>`;
        elementsInfo += `<p>Text Content: ${element.textContent}</p>`;
        elementsInfo += `<p>Font Style: ${element.style.fontStyle}</p>`;
    });

    elementsInfo += `<p>elementsByClassName:</p>`;
    elementsByClassName.forEach((element, index) => {
        elementsInfo += `<p>Element ${index + 1}:</p>`;
        elementsInfo += `<p>Text Decoration: ${element.style.textDecoration}</p>`;
    });

    elementsInfo += `<p>firstElement:</p>`;
    elementsInfo += `<p>Font Size: ${firstElement.style.fontSize}</p>`;

    elementsInfo += `<p>allElements:</p>`;
    allElements.forEach((element, index) => {
        elementsInfo += `<p>Element ${index + 1}:</p>`;
        elementsInfo += `<p>Background Color: ${element.style.backgroundColor}</p>`;
    });

    document.getElementById("resultados").innerHTML = elementsInfo;
}


//atividade 4
function mouse() {
    alert("este é um botão");
}

function focusFunction(element) {
    element.style.backgroundColor = "lightblue";
}

function blurFunction(element) {
    element.style.backgroundColor = "";
}

function changeFunction(element) {
    element.value = "Valor modificado!";
    document.getElementById("valor").innerText = `Mudança de valor: ${element.value}`;
}

//atividade 5

/*
  script dentro da propia pagina html
 */

//atividade 6

/*
  script dentro da propia pagina html
 */

//atividade 7

function CAPS() {
    let inputText = document.getElementById("texto").value;
    let resultado = inputText.toUpperCase();
    document.getElementById("resultado").innerText = resultado;
}

function del() {
    document.getElementById("texto").value = "";
    document.getElementById("resultado").innerText = "";
}

//atividade 8

/*
  script dentro da propia pagina html
 */
