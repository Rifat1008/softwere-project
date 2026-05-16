const gifts = [
    { name: "Vintage Pen", image: "https://www.dromgooles.com/cdn/shop/files/TornadoFPNikolaTesla.png?v=1684505315&width=533", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "RGB Lamp", image: "https://www.quntis.com/cdn/shop/files/4_5b98205a-3a72-46cf-88ed-db6d39dcc68a.jpg?v=1744788876&width=1600", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Flower Vase", image: "https://m.media-amazon.com/images/I/717COgJSyAL.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Wallet", image: "https://www.vibrantbd.com/cdn/shop/files/9446118.jpg?v=1760849716", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Foam Pillow", image: "https://img.drz.lazcdn.com/static/bd/p/004b827527ce93f0922a2aaf39758803.jpg_720x720q80.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Earbuds", image: "https://diamu.com.bd/wp-content/uploads/2025/01/Beats-Solo-Buds-True-Wireless-Bluetooth-Earbuds.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Indoor Plant", image: "https://hips.hearstapps.com/hmg-prod/images/aglaonema-foliage-in-pot-at-living-home-spring-snow-royalty-free-image-1705612028.jpg?crop=0.668xw:1.00xh;0.0385xw,0&resize=640:*", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Coffee Kit", image: "https://www.tglcompany.com/cdn/shop/files/tgl-craft-coffee-kit-v60-brewing.jpg?v=1773144810", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Vintage Pen", image: "https://cdn.othoba.com/images/thumbs/1286940_hero-vintage-fountain-pen-fine-nib.jpeg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "RGB Lamp", image: "10.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Flower Vase", image: "11.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Wallet", image: "12.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Foam Pillow", image: "13.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Earbuds", image: "14.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Indoor Plant", image: "15.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Coffee Kit", image: "16.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Vintage Pen", image: "17.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "RGB Lamp", image: "18.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Flower Vase", image: "19.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Wallet", image: "20.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Foam Pillow", image: "21.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Earbuds", image: "22.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Indoor Plant", image: "23.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Coffee Kit", image: "24.jpg", gender: "female", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Vintage Pen", image: "25.jpg", gender: "female", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },

    { name: "Gift Box", image: "26.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "27.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "28.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "29.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "30.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "31.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "32.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "33.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "34.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "35.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "36.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "37.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "38.jpg", gender: "female", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Botanical Vase", image: "39.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "40.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Botanical Vase", image: "41.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "42.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Botanical Vase", image: "43.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "44.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Botanical Vase", image: "45.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "46.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Botanical Vase", image: "47.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "48.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Botanical Vase", image: "49.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Gift Box", image: "50.jpg", gender: "female", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },

    { name: "Gaming Set", image: "51.jpg", gender: "male", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Leather Kit", image: "52.jpg", gender: "male", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Gaming Set", image: "53.jpg", gender: "male", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Leather Kit", image: "54.jpg", gender: "male", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Gaming Set", image: "55.jpg", gender: "male", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Leather Kit", image: "56.jpg", gender: "male", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Gaming Set", image: "57.jpg", gender: "male", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Leather Kit", image: "58.jpg", gender: "male", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },
    { name: "Gaming Set", image: "59.jpg", gender: "male", age: "adult", occasion: "birthday", hobby: "tech", profession: "engineer" },
    { name: "Leather Kit", image: "60.jpg", gender: "male", age: "teen", occasion: "birthday", hobby: "tech", profession: "student" },

    { name: "Groom Kit", image: "61.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Tech Shaver", image: "62.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Leather Care", image: "63.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Smart Watch", image: "64.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Perfume Box", image: "65.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Headphone", image: "66.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Cufflinks", image: "67.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Speaker", image: "68.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Tie Box", image: "69.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Game Console", image: "70.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },

    { name: "Groom Tool", image: "71.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Powerbank", image: "72.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Leather Bag", image: "73.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },
    { name: "Charging Dock", image: "74.jpg", gender: "male", age: "teen", occasion: "wedding", hobby: "gardening", profession: "student" },
    { name: "Sunglasses", image: "75.jpg", gender: "male", age: "adult", occasion: "wedding", hobby: "gardening", profession: "engineer" },

    { name: "Bookend", image: "76.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "File Binder", image: "77.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Reading Light", image: "78.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Desk Pad", image: "79.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Bookmark Pen", image: "80.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Ballpoint Kit", image: "81.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Book Stand", image: "82.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Desk Clock", image: "83.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Memo Pad", image: "84.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Card Pack", image: "85.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },

    { name: "Cable Wrap", image: "86.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Laptop Sleeve", image: "87.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Desk Stand", image: "88.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Pen Holder", image: "89.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Wireless Pad", image: "90.jpg", gender: "male", age: "teen", occasion: "official", hobby: "reading", profession: "student" },
    { name: "Key Holder", image: "91.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Cup Warmer", image: "92.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Briefcase", image: "93.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Footrest", image: "94.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Laser Pointer", image: "95.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },

    { name: "Desk Divider", image: "96.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Office Candle", image: "97.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Ruler Set", image: "98.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Reading Glass", image: "https://www.blindasabat.com.au/cdn/shop/products/reading-glasses-r078-24.jpg?v=1683434035", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" },
    { name: "Tech Pack", image: "https://rokbucket.rokomari.io/ProductNew20190903/260X372/Havit_KB380L_Gaming_Wired_RGB_Mechanical-Havit-50d78-319187.jpg", gender: "male", age: "adult", occasion: "official", hobby: "reading", profession: "engineer" }
];

const grid = document.getElementById('giftsGrid');
const genSelect = document.getElementById('filterGender');
const ageSelect = document.getElementById('filterAge');
const occSelect = document.getElementById('filterOccasion');
const hobbySelect = document.getElementById('filterHobby');
const profSelect = document.getElementById('filterProfession');

function displayGifts(filteredGifts) {
    grid.innerHTML = "";

    if (filteredGifts.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;font-weight:600;color:#888;padding:40px 0;">No matching gifts found!</p>`;
        return;
    }

    filteredGifts.forEach(gift => {
        const card = document.createElement('div');

        card.classList.add('gift-card');

        card.innerHTML = `
            <img src="${gift.image}" alt="${gift.name}">
            <h3>${gift.name}</h3>
            <button class="view-btn">View Gift</button>
        `;

        grid.appendChild(card);
    });
}

function filterLogic() {
    const activeGender = genSelect.value;
    const activeAge = ageSelect.value;
    const activeOccasion = occSelect.value;
    const activeHobby = hobbySelect.value;
    const activeProfession = profSelect.value;

    const matchedGifts = gifts.filter(gift => {
        return (
            (activeGender === 'all' || gift.gender === activeGender) &&
            (activeAge === 'all' || gift.age === activeAge) &&
            (activeOccasion === 'all' || gift.occasion === activeOccasion) &&
            (activeHobby === 'all' || gift.hobby === activeHobby) &&
            (activeProfession === 'all' || gift.profession === activeProfession)
        );
    });

    displayGifts(matchedGifts);
}

[genSelect, ageSelect, occSelect, hobbySelect, profSelect].forEach(element => {
    element.addEventListener('change', filterLogic);
});

displayGifts(gifts);