function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.remove('hidden');
    }
}

function setupNavigation() {
    const navHome = document.getElementById('nav-home');
    const navSection2 = document.getElementById('nav-section2');
    const navOrder = document.getElementById('nav-order');
    
    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault(); 
            showPage('page-home'); 
        });
    }

    if (navSection2) {
        navSection2.addEventListener('click', (e) => {
            e.preventDefault(); 
            showPage('page-section2'); 
        });
    }

    if (navOrder) {
        navOrder.addEventListener('click', (e) => {
            e.preventDefault(); 
            showPage('page-order'); 
        });
    }
}

document.addEventListener('DOMContentLoaded', setupNavigation);
document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('page-home');
    const section2Page = document.getElementById('page-section2');
    const orderPage = document.getElementById('page-order');

    if (homePage) {
        homePage.classList.remove('hidden');
    }
    if (section2Page) {
        section2Page.classList.add('hidden');
    }
    if (orderPage) {
        orderPage.classList.add('hidden');
    }
});

const orderForm = document.querySelector('.order-form');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert("Дякуємо, що поділились даними банківської карти. Пам'ятайте, що щастя не в грошах, тому залишайте їх тут.");
    orderForm.reset();
});

// пошуковий запит
const API_KEY = "AIzaSyBWx9Z6CPFDvVxdripsWeGUdeSS9s4w9lk";
const ENGINE_ID = "27d1b5ba9a30b417f"; 

document.getElementById('meme-search-btn').addEventListener('click', () => {
    const query = document.getElementById('meme-search').value;

    if (!query.trim()) return;

    fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&searchType=image&q=${encodeURIComponent(query + " мем")}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('meme-results');
            results.innerHTML = "";

            if (!data.items) {
                results.innerHTML = "<p>Нічого не знайдено (￣ヘ￣)</p>";
                return;
            }

            data.items.forEach(item => {
                const img = document.createElement("img");
                img.src = item.link;
                img.alt = "meme";
                results.appendChild(img);
                // img.onerror = () => {
                // card.remove();
                // };
            });
        })
        .catch(err => {
            console.error(err);
            document.getElementById('meme-results').innerHTML =
                "<p>Сталася помилка при пошуку :(</p>";
        });
});

//f12

document.addEventListener('keydown', function(e) {
    if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault(); 
        const img = document.createElement('img');
        img.src = 'паляниця.jpg'; 
        img.style.position = 'fixed';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.zIndex = '9999';
        img.style.width = '1000px';
        img.style.height = 'auto';
        img.style.borderRadius = '10px';
        document.body.appendChild(img);
        setTimeout(() => {
            img.remove();
        }, 1000);
    }
});
