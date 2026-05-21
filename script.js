/**
 * Arhitectură de control tip SPA (Single Page Application) pentru Navigare Lină
 * Schimbă paginile ascunzând și afișând secțiunile corespunzătoare pe baza ID-urilor
 */
function switchPage(pageId) {
    // Selectăm toate secțiunile de pagină definite în HTML
    const pages = document.querySelectorAll('.page-section');
    
    // Dezactivăm clasa activă pe toate secțiunile pentru a le ascunde
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Identificăm secțiunea țintă și o afișăm utilizând clasa definită în CSS
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Actualizăm starea vizuală a meniului de navigare global
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Verificăm dacă atributul href conține numele paginii curente
        if (link.getAttribute('href') === '#' + pageId) {
            link.classList.add('active');
        }
    });

    // Resetăm poziția de scroll în partea de sus la schimbarea paginii
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Controler Interactiv pentru Simulatorul de Configurație Vizuală (Neon Ambient)
 * Schimbă dinamic culorile elementelor DOM selectate de utilizator
 */
function changeAccent(colorHex, styleName) {
    const previewBox = document.getElementById('car-preview');
    const statusLabel = document.getElementById('config-status-label');
    
    if (previewBox && statusLabel) {
        // Modificăm culoarea bordurii și umbra de tip neon în funcție de selecție
        previewBox.style.borderColor = colorHex;
        previewBox.style.boxShadow = `inset 0 0 30px ${colorHex}, 0 0 15px ${colorHex}`;
        
        // Modificăm textul explicativ în panou
        statusLabel.textContent = styleName;
        statusLabel.style.color = colorHex;
    }
}

// Inițializare script la încărcarea paginii pentru a asigura starea corectă
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sistemul de prezentare BMW M5 a fost inițializat cu succes.");
});