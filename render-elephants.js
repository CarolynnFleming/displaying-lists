export function renderElephant(elephantData){
    const div = document.createElement('div');
    const p = document.createElement('p');
    
    div.classList.add('elephant');

    div.style.fontSize = `${elephantData.age}rem`

    div.style.backgroundColor = elephantData.color;

    p.textContent = `${elephantData.name} ${elephantData.birthPlace}`;
  
    div.append(p);
    
    return div;
}