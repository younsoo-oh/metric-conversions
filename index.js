const d_Output = document.querySelector(".d_Output");
const d_Btn = document.querySelector("#d_Btn");
const w_Output = document.querySelector(".w_Output");
const w_Btn = document.querySelector("#w_Btn");
const te_Output = document.querySelector(".te_Output");
const te_Btn = document.querySelector("#te_Btn");
const Input = document.querySelector("#input");


Input.addEventListener("input", (e) => {
    let number = e.target.value;
    document.querySelector("#mmOutput").innerHTML = number * 10;
    document.querySelector("#cmOutput").innerHTML = number * 1;
    document.querySelector("#mOutput").innerHTML = number / 100;
    document.querySelector("#gOutput").innerHTML = number * 1000;
    document.querySelector("#kgOutput").innerHTML = number * 1;
    document.querySelector("#tOutput").innerHTML = number / 1000;
    document.querySelector("#cOutput").innerHTML = number * 1;
    document.querySelector("#fOutput").innerHTML = number * 1.8 + 32;
})

d_Btn.addEventListener("click", () =>{
    d_Output.classList.toggle('active');
});

w_Btn.addEventListener("click", () =>{
    w_Output.classList.toggle('active');
});

te_Btn.addEventListener("click", () =>{
    te_Output.classList.toggle('active');
});


