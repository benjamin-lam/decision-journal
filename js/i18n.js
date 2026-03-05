let translations={};

async function loadLanguage(lang){

    const res = await fetch(`i18n/${lang}.json`);
    translations = await res.json();

    applyTranslations();

}

function applyTranslations(){

    document.querySelectorAll("[data-i18n]").forEach(el=>{

        const key = el.dataset.i18n;

        el.textContent = translations[key] || key;

    });

}