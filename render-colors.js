export function renderColor(colorData){
    console.log('color data', colorData)
    const div = document.createElement('div')
    for(let color of colorData){
    const p = document.createElement('p');
    
    p.textContent = color;
    console.log('color', color)
    p.classList.add('color');

    if(colorData ==='red'){
        p.style.backgroundColor = 'red'
    }
    if ( colorData.length === 4){
        p.style.backgroundColor = 'lavender'
    }
    if (color [0] === 'l'){
        p.style.transForm = 'rotate(45deg)';
     }
     div.append(p)
    }
return div
}
