async function saveEntry(){

    const type = document.getElementById("entryType").value;
    const text = document.getElementById("entryText").value;

    const entry = {

        type,
        text,
        time:new Date().toISOString()

    };

    addEntry(entry);

    renderTimeline();

}

async function renderTimeline(){

    const entries = await getEntries();

    const list = document.getElementById("entries");

    list.innerHTML="";

    entries.reverse().forEach(e=>{

        const li = document.createElement("li");

        li.innerHTML = `
<strong>${e.type}</strong><br>
${e.text}<br>
<small>${new Date(e.time).toLocaleString()}</small>
`;

        list.appendChild(li);

    });

}