const games = [
  {
    title: "Slither.io",
    url: "https://slither.io",
    type: "multiplayer"
  },
  {
    title: "Agar.io",
    url: "https://agar.io",
    type: "multiplayer"
  },
  {
    title: "Paper.io",
    url: "https://paper-io.com",
    type: "action"
  },
  {
    title: "Zombs.io",
    url: "https://zombs.io",
    type: "survival"
  }
];

function renderGames(list) {
  const container = document.getElementById("gameList");
  container.innerHTML = "";
  list.forEach(game => {
    const item = document.createElement("div");
    item.className = "game-item";
    item.innerHTML = `
      <button class="favorite-btn" onclick="addFavorite('${game.title}')">❤️</button>
      <div class="game-title">${game.title}</div>
      <iframe src="${game.url}"></iframe>
      <div class="comments">
        <textarea placeholder="Bình luận về game này..."></textarea>
        <button onclick="alert('Bình luận đã gửi!')">Gửi</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function searchGame() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = games.filter(g => g.title.toLowerCase().includes(keyword));
  renderGames(filtered);
}

function filterGame(type) {
  if (type === "all") {
    renderGames(games);
  } else {
    const filtered = games.filter(g => g.type === type);
    renderGames(filtered);
  }
}

function addFavorite(title) {
  alert(`Đã thêm "${title}" vào danh sách yêu thích!`);
}

function login() {
  const username = prompt("Nhập tên người dùng:");
  if (username) {
    alert(`Xin chào ${username}!`);
  }
}

// Khởi tạo
renderGames(games);
