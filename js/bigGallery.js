function createGrid(items){
    return`
 <div class="card">
  <div class="thumb">
    <a href="outlook.html?id=${items.id}"><img src="${items.img}" alt="${items.id}"></a>
  </div>
  <div class="card-info">
    <span class="card-brand">${items.brand}</span>
    <div class="card-meta">
      <span class="card-cat">${items.category} / ${items.year}</span>
      <span class="card-date">${items.date}</span>
    </div>
  </div>
</div> 
    `;
}

function showgrid(item){
    const grid = document.getElementById("grid");
    grid.innerHTML = item.slice(6,18).map(createGrid).join("");
}

showgrid(items);