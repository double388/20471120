function card(item) {
  return `
<div class="card">
  <div class="thumb">
    <a href="outlook.html?id=${item.id}"><img src="${item.img}" alt="${item.id}"></a>
  </div>
  <div class="card-info">
    <span class="card-brand">${item.brand}</span>
    <div class="card-meta">
      <span class="card-cat">${item.category} / ${item.year}</span>
      <span class="card-date">${item.date}</span>
    </div>
  </div>
</div> 
  `;
}

function renderGrid(data){
    const grid = document.getElementById("grid");
    grid.innerHTML = data.slice(0,6).map(card).join("");
}

renderGrid(items);