const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const item = items.find(el => el.id === id);

if(item){
    document.querySelector("#clothe_id").textContent = `${item.id} / ${items.length}`;
    document.querySelector("#big img").src = item.img;
    if(item.view_1 != null){
        document.querySelector(".view_1").src = item.view_1;
    }
    else{
        document.querySelector(".view_1").src = 'images/placeholder.jpg';
    }
    if(item.view_2 != null){
    document.querySelector(".view_2").src = item.view_2;
    }
    else{
        document.querySelector(".view_2").src = 'images/placeholder.jpg';
    }
    if(item.view_3 != null){
    document.querySelector(".view_3").src = item.view_3;
    }
        else{
        document.querySelector(".view_3").src = 'images/placeholder.jpg';
    }
    if(item.view_4 != null){
    document.querySelector(".view_4").src = item.view_4;
    }
    else{
        document.querySelector(".view_4").src = 'images/placeholder.jpg';
    }
    document.querySelector("#name").textContent = item.name;
    document.querySelector(".nr").textContent = item.nr;
    document.querySelector(".category").textContent = item.category;
    document.querySelector(".fabric").textContent = item.fabric;
    document.querySelector(".condition").textContent = item.condition;
    document.querySelector(".season").textContent = item.season;
    document.querySelector(".origin").textContent = item.origin;
    document.querySelector(".added").textContent = item.date;
    document.querySelector("#text").textContent = item.description;

/*
    const bigImg = document.querySelector("#big img");
    const small_1 = document.querySelector(".view_1");
    const small_2 = document.querySelector(".view_2");
    const small_3 = document.querySelector(".view_3");
    const small_4 = document.querySelector(".view_4");
    
    document.querySelector(".view_1").addEventListener('click', () => {
        if(bigImg.src.includes(item.img)){
            bigImg.src = item.view_1;
            small_1.src = item.img;
        }
        else{
            bigImg.src = item.img;
            small_1.src = item.view_1;
        }
    })

    document.querySelector(".view_2").addEventListener('click', () => {
                 if(bigImg.src.includes(item.img)){
            bigImg.src = item.view_2;
            small_2.src = item.img;
        }
        else{
            bigImg.src = item.img;
            small_2.src = item.view_2;
        }
    })

    document.querySelector(".view_3").addEventListener('click', () => {
                 if(bigImg.src.includes(item.img)){
            bigImg.src = item.view_3;
            small_3.src = item.img;
        }
        else{
            bigImg.src = item.img;
            small_3.src = item.view_3;
        }
    })

    document.querySelector(".view_4").addEventListener('click', () => {
        if(bigImg.src.includes(item.img)){
            bigImg.src = item.view_4;
            small_4.src = item.img;
        }
        else{
            bigImg.src = item.img;
            small_4.src = item.view_4;
        }
    })
*/
}
