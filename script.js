document.addEventListener('DOMContentLoaded', () => {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach(element => {
        element.addEventListener('click', function () {
            allSlides.forEach(el => el.classList.remove('active'))
            this.classList.add('active')
        });
    })
})
