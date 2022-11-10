const input = document.querySelector("#input");
const err = document.querySelector(".err");
const hasilContainer = document.querySelector(".hasil-container");
const hasil = document.querySelector("#hasil");
const statusHasil = document.querySelector("#status-hasil");
const batal = document.querySelector(".batal");

batal.addEventListener("click", (e) => {
  e.preventDefault();

  input.value = "";
  hasilContainer.style.display = "none";
  hasil.innerHTML = "";
  statusHasil.innerHTML = "";
  input.style.border = "2px solid #386380";

  err.style.display = "none";
});

const genap = (e) => {
  statusHasil.innerHTML = `Deret Faktorial ${e / 2} (Genap)`;

  let temp = 1;

  for (let index = e / 2; index > 0; index--) {
    temp *= index;

    index !== 1
      ? (hasil.innerHTML += `${index} x `)
      : (hasil.innerHTML += `${index} = ${temp}`);
  }
};

const ganjil = (e) => {
  statusHasil.innerHTML = `Deret Fibbonaci <i class="fa-solid fa-less-than-equal"></i> ${
    e * 10
  } (Ganjil)`;

  let temp = 0;
  let temp1 = 1;
  let temp3 = 0;

  for (let index = 1; index <= 20; index++) {
    temp3 = temp + temp1;
    temp = temp1;
    temp1 = temp3;

    if (temp3 <= e * 10) {
      if (index === 1 && e != 1) {
        hasil.innerHTML += `${temp1} `;
      }
      hasil.innerHTML += `${temp3} `;
    }
  }
};

const cekNumber = (e) => {
  if (e.target.value.length > 0) {
    if (isNaN(e.target.value)) {
      alert("Input harus berupa angka");
      e.target.value = "";
    }
  }

  if ((e.target.value <= 0 || e.target.value >= 21) && e.target.value != "") {
    err.style.display = "flex";
    input.style.border = "2px solid red";
    hasilContainer.style.display = "none";
  } else {
    err.style.display = "none";
    input.style.border = "2px solid #386380";

    if (e.target.value === "") {
      hasilContainer.style.display = "none";
    } else {
      hasilContainer.style.display = "block";
      hasil.innerHTML = "";
      statusHasil.innerHTML = "";
      e.target.value % 2 == 0 ? genap(e.target.value) : ganjil(e.target.value);
    }
  }
};

input.addEventListener("input", cekNumber);
