

const toggleLight = () => {
    // get the dom
    const toggleButton = document.getElementById('toggleLight');
    const icon = document.querySelector('#toggleLight i');
    const body = document.querySelector('body');
    // add event
    toggleButton.addEventListener('click', () => {
        // body toggle
        body.classList.toggle('bg-light');
        body.classList.toggle('text-dark');
        

        // icon toggle
        icon.classList.toggle('bi-moon')

        // hover button toggle
        toggleButton.classList.toggle('border-black');
        toggleButton.classList.toggle('hover:bg-dark');
        toggleButton.classList.toggle('hover:text-light');
    })

}
toggleLight()