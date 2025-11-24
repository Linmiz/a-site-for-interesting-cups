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