export function renderElephant(elephantData){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('elephant');

    div.style.backgroundColor = elephantData.color;

    p.textContent = elephantData.name;

    img.src = elephantData.image_url;

    div.append(p, img);
    
    return div;
}