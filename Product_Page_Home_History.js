
const Hist_images = ["133.png", "134.png", "135.png","136.png", "196.png", "197.png"];

Hist_images.forEach(addImage)

function addImage(image){
    const image_el = document.createElement('img')
    image_el.setAttribute('src',image)
    document.getElementById('scroll-container-History').append(image_el)
   
}
function addImageLink(image,link){
    const image_link = document.createElement('a')
    image_link.setAttribute("href", link)
    image_link.setAttribute('id', link)
    document.getElementById('scroll-container-History').appendChild(image_link)

    const image_el = document.createElement('img')
    image_el.setAttribute('src', image)
    document.getElementById(link).appendChild(image_el)

    
} 