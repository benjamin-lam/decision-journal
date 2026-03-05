const DB_NAME = "decisionJournal";
const STORE = "entries";

let db;

function initDB(){

    return new Promise((resolve,reject)=>{

        const request = indexedDB.open(DB_NAME,1);

        request.onupgradeneeded = e => {

            db = e.target.result;

            db.createObjectStore(STORE,{keyPath:"id",autoIncrement:true});

        };

        request.onsuccess = e => {

            db = e.target.result;
            resolve();

        };

        request.onerror = reject;

    });

}

function addEntry(entry){

    const tx = db.transaction(STORE,"readwrite");

    tx.objectStore(STORE).add(entry);

}

function getEntries(){

    return new Promise(resolve=>{

        const tx = db.transaction(STORE,"readonly");

        const request = tx.objectStore(STORE).getAll();

        request.onsuccess = ()=>resolve(request.result);

    });

}