sumar = () => {
    const quin = document.getElementById("to500").value * 500
    const dosc = document.getElementById("to200").value * 200
    const cien = document.getElementById("to100").value * 100
    const cinc = document.getElementById("to50").value * 50
    const vein = document.getElementById("to20").value * 20
    const total = quin + dosc + cien + cinc + vein;
    document.getElementById("total").innerHTML = total.toString();
}

reset = () => {
    document.getElementById("to500").value = 0
    document.getElementById("to200").value = 0
    document.getElementById("to100").value = 0
    document.getElementById("to50").value = 0
    document.getElementById("to20").value = 0
    document.getElementById("total").innerHTML = "0";
}
handleInput = (value) => {
    if (value.length < 2) {
        return 0
    } else {
        return parseInt(value.replace(/[^0-9]/g, ''), 10)
    }
}

window.onload = () => {
    const card = document.getElementById('card');
    card.classList.add('loadCard');
    const img = document.getElementsByTagName('img')
    const input = document.getElementsByTagName('input')
    for (let i = 0; i <= img.length; i++) {
        img[i].classList.add('loadImg')
        input[i].classList.add('loadInput')
    }
}
