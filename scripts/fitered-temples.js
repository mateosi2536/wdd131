const nav = document.querySelector("#menu");
const btOpne = document.querySelector("#open");
const btClose = document.querySelector("#close");

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Brasilia Brasil",
        location: "Brasilia Brasil",
        dedicated: "2023, September, 17",
        area: 32000,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/960x540/BL-2545-min.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barramquilla Colombia",
        dedicated: "2018, December, 9",
        area: 32500,
        imageUrl:
            "https://i.pinimg.com/736x/f2/28/40/f22840e1f576fbd5120234c99a935400.jpg"
    },
    {
        templeName: "Quito Ecuador",
        location: "Quito Ecuador",
        dedicated: "2022, November, 20",
        area: 27830,
        imageUrl:
            "https://files.mormonsud.org/wp-content/uploads/2022/11/templo-de-ecuador-1.png"
    }
];

createTempleCards(temples)

const homeLink = document.getElementById('home')
const oldLink = document.getElementById('old')
const newLink = document.getElementById('new')
const laregLink = document.getElementById('large')
const smallLink = document.getElementById('small')

homeLink.addEventListener('click', () => { createTempleCards(temples) })
oldLink.addEventListener('click', () => { createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) < 1900))})
newLink.addEventListener('click', () => { createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(', ')[0]) > 2000))})
laregLink.addEventListener('click', () => { createTempleCards(temples.filter(temple => temple.area > 90000))})
smallLink.addEventListener('click', () => { createTempleCards(temples.filter(temple => temple.area < 10000))})

console.log('hola')

function createTempleCards(filteredTemples) {
    const templesNav = document.getElementById('nav-cards')
    templesNav.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('nav')

        const titleCard = document.createElement('h3')
        titleCard.textContent = temple.templeName
        templeCard.appendChild(titleCard)

        const locationCard = document.createElement('p')
        locationCard.innerHTML = `<strong>Location:</strong> ${temple.location}`
        templeCard.appendChild(locationCard)

        const dedicationCard = document.createElement('p')
        dedicationCard.innerHTML = `<strong>Dedication:</strong> ${temple.dedicated}`
        templeCard.appendChild(dedicationCard)

        const areaCard = document.createElement('p')
        areaCard.innerHTML = `<strong>Area:</strong> ${temple.area}`
        templeCard.appendChild(areaCard)

        const templeImage = document.createElement('img')
        templeImage.src = temple.imageUrl
        templeImage.alt = temple.templeName
        templeImage.loading = 'lazy';
        templeCard.appendChild(templeImage)
        templeCard.className = 'templeCard'

        templesNav.appendChild(templeCard)
    });
}
btOpne.addEventListener("click", () => {
    nav.classList.add("visible");
})

btClose.addEventListener("click", () => {
    nav.classList.remove("visible");
})