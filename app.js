const btnModal = document.querySelector('.modal')

btnModal.addEventListener('click', () => {
    // Create Overlay DIV
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    // Create Modal Div
    const modal = document.createElement('div')
    modal.classList.add('overlay_modal')

    // Create text Content Modal
    const ModalText = document.createElement('h2')
    ModalText.classList.add('modal_text')
    ModalText.appendChild(document.createTextNode('Modal Content'))
    
    // Create Close Button Modal
    const closeModal = document.createElement('button')
    closeModal.classList.add('close')
    closeModal.appendChild(document.createTextNode('X'))

    modal.append(ModalText, closeModal)

    overlay.appendChild(modal)

    document.body.append(overlay)

    closeModal.addEventListener('click', function(e) {
       overlay.remove()
    })

})
