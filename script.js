function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Username atau password salah";
  }
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

// SEARCH PRODUK
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h4")[0].innerText.toLowerCase();
    cards[i].style.display = title.includes(input) ? "block" : "none";
  }
}

// SIMULASI AI
function runAI() {
  let input = document.getElementById("inputAI").value.toLowerCase();
  let result = "";

  if (input.includes("makanan")) {
    result = "AI menyarankan promosi video di TikTok dan Instagram.";
  } else if (input.includes("fashion")) {
    result = "AI menyarankan influencer dan konten visual.";
  } else {
    result = "AI menyarankan kombinasi media sosial dan iklan digital.";
  }

  document.getElementById("resultAI").innerText = result;
}
