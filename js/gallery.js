function card(item) {
  return `
<div class="card">
  <div class="thumb">
    <img src="${item.img}" alt="${item.id}" loading="lazy">
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
    grid.innerHTML = data.map(card).join("");
}

renderGrid(items);