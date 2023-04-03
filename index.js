function addCart(){
    let total = localStorage.getItem('total') || 0
    const element = document.getElementById('success-msg')
    element.style.display = 'inline' // show element since clearCart() makes the display to none
    localStorage.setItem('total', Number(total) + 1)
    total = localStorage.getItem('total')
    element.innerHTML = 'successfully added ' + total + ' items'
    const clearElements =  document.getElementsByClassName('clear-btn')
    
    for(let i = 0; i < clearElements.length; i++){
        const singleElement = clearElements[i]
        singleElement.style.display = 'inline'
    }
    
}
function clearCart(){
    localStorage.removeItem('total')
    const element = document.getElementById('success-msg')
    element.innerHTML = ''
    element.style.display = 'none'
    const clearElements = document.getElementsByClassName('clear-btn')
    for (let i = 0; i < clearElements.length; i++){
        const singleElement = clearElements[i]
        singleElement.style.display = 'none'
    }
}
