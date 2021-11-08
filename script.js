colorify({
    container: 'colorify-main-color',
    accuracy: 10,
    padding: true,
    give: {
        property: 'background',
        target: '.container, .btn'
    }
});


const image_el = document.querySelector('.imaginhop')

image_el.setAttribute('colorify-main-color', 'colorify-main-color')