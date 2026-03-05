document.addEventListener("DOMContentLoaded",async()=>{

    await initDB();

    renderTimeline();

    document
        .getElementById("saveEntry")
        .addEventListener("click",saveEntry);

});