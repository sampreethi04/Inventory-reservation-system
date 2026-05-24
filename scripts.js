const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    warehouse: "Chennai Warehouse",
    stock: 5
  },
  {
    id: 2,
    name: "Gaming Mouse",
    warehouse: "Bangalore Warehouse",
    stock: 3
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    warehouse: "Hyderabad Warehouse",
    stock: 2
  }
];

const productList = document.getElementById("product-list");
const reservationBox = document.getElementById("reservation-box");
const message = document.getElementById("message");

const resProduct = document.getElementById("res-product");
const resWarehouse = document.getElementById("res-warehouse");
const resStatus = document.getElementById("res-status");
const countdown = document.getElementById("countdown");

const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

let timer;
let timeLeft = 600;
let reservationActive = false;

function renderProducts() {
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Warehouse:</strong> ${product.warehouse}</p>
      <p class="stock"><strong>Available Stock:</strong> ${product.stock}</p>
      <button onclick="reserveProduct(${product.id})">
        Reserve
      </button>
    `;

    productList.appendChild(card);
  });
}

function reserveProduct(id) {
  if (reservationActive) {
    message.innerHTML = "409 Conflict: Reservation already active.";
    message.style.color = "red";
    return;
  }

  const product = products.find(p => p.id === id);

  if (product.stock <= 0) {
    message.innerHTML = "409 Conflict: Not enough stock available.";
    message.style.color = "red";
    return;
  }

  product.stock--;

  renderProducts();

  reservationActive = true;

  reservationBox.classList.remove("hidden");

  resProduct.innerText = product.name;
  resWarehouse.innerText = product.warehouse;
  resStatus.innerText = "Pending";

  message.innerHTML = "Reservation created successfully.";
  message.style.color = "green";

  startTimer(product);
}

function startTimer(product) {
  clearInterval(timer);

  timeLeft = 600;

  timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    countdown.innerText =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);

      product.stock++;
      renderProducts();

      reservationActive = false;

      resStatus.innerText = "Expired";

      message.innerHTML = "410 Gone: Reservation expired.";
      message.style.color = "red";
    }
  }, 1000);

  confirmBtn.onclick = () => {
    clearInterval(timer);

    reservationActive = false;

    resStatus.innerText = "Confirmed";

    message.innerHTML = "Purchase confirmed successfully.";
    message.style.color = "green";
  };

  cancelBtn.onclick = () => {
    clearInterval(timer);

    product.stock++;
    renderProducts();

    reservationActive = false;

    resStatus.innerText = "Released";

    message.innerHTML = "Reservation cancelled.";
    message.style.color = "orange";
  };
}

renderProducts();