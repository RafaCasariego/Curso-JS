function paraAbsoluto(arr) {
    return arr.map((ele) => Math.abs(ele));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);
console.log(absolutos)
