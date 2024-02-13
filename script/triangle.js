function triangle(){
    const baseInput = document.getElementById('baseInput')
    const baseValue = baseInput.value
    const base = parseFloat(baseValue)

    const heightInput = document.getElementById('heightInput');
    const heightValue = heightInput.value
    const height = parseFloat(heightValue)

    const result = 0.5 * base * height
    const trianglePera = document.getElementById('result');
    trianglePera.innerText = result 
}

// Rectangle Area Calculate
function rectangle(){
    const widthInput = document.getElementById('widthInput');
    const withValue = widthInput.value 
    const width = parseFloat(withValue)

    const lengthInput = document.getElementById('lengthInput')
    const lengthValue = lengthInput.value 
    const length = parseFloat(lengthValue)

    const resultRec = width * length

    const recResult = document.getElementById('recResult')
    recResult.innerText = resultRec 

}


function parallelorem(){
    const baseInput = document.getElementById('baseInputp')
    const baseValue = baseInput.value 
    const baseP = parseFloat(baseValue)

    const heightInput = document.getElementById('heightInputp')
    const heightValue = heightInput.value
    const paralle = parseFloat(heightValue)

    const resultParallelorem = baseP * paralle

    const resultPara = document.getElementById('resultParall');
    resultPara.innerText = resultParallelorem;
}

function rhombusCal(){
    const d1Input = document.getElementById('d1Input')
    const d1Value = d1Input.value 
    const d1 = parseFloat(d1Value)

    const d2Input = document.getElementById('d2Input')
    const d2Value = d2Input.value 
    const d2 = parseFloat(d2Value)

    const resultRhombus = 0.5 * d1 * d2

    const rhombusResult1 = document.getElementById('rhombusResult')
    rhombusResult1.innerText = resultRhombus

}