// prenota.js

const mesiItaliani = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
];

const oggi = new Date();
let meseCorrente = oggi.getMonth();   // 0 = Gennaio
let annoCorrente = oggi.getFullYear();

const giorniContainer = document.getElementById("giorni-container");
const meseAnnoLabel = document.getElementById("mese-anno");

function generaCalendario(mese, anno) {
  // Svuota la griglia prima di ridisegnarla
  giorniContainer.innerHTML = "";

  // Aggiorna l'intestazione (es. "Agosto 2026")
  meseAnnoLabel.textContent = `${mesiItaliani[mese]} ${anno}`;

  // A che giorno della settimana cade il 1° del mese (0=Lun ... 6=Dom)
  let primoGiorno = new Date(anno, mese, 1).getDay();
  primoGiorno = (primoGiorno === 0) ? 6 : primoGiorno - 1;

  // Quanti giorni ha questo mese
  const giorniNelMese = new Date(anno, mese + 1, 0).getDate();

  // Celle vuote di riempimento prima del giorno 1
  for (let i = 0; i < primoGiorno; i++) {
    const celleVuote = document.createElement("div");
    celleVuote.classList.add("giorno", "vuoto");
    giorniContainer.appendChild(celleVuote);
  }

  // Celle con i numeri dei giorni veri
  for (let giorno = 1; giorno <= giorniNelMese; giorno++) {
    const celleGiorno = document.createElement("div");
    celleGiorno.classList.add("giorno");
    celleGiorno.textContent = giorno;
    celleGiorno.dataset.data = `${anno}-${mese + 1}-${giorno}`;
    giorniContainer.appendChild(celleGiorno);
  }
}

// Pulsante mese precedente
document.getElementById("mese-prec").addEventListener("click", () => {
  meseCorrente--;
  if (meseCorrente < 0) {
    meseCorrente = 11;
    annoCorrente--;
  }
  generaCalendario(meseCorrente, annoCorrente);
});

// Pulsante mese successivo
document.getElementById("mese-succ").addEventListener("click", () => {
  meseCorrente++;
  if (meseCorrente > 11) {
    meseCorrente = 0;
    annoCorrente++;
  }
  generaCalendario(meseCorrente, annoCorrente);
});

// Disegna il calendario al caricamento della pagina
generaCalendario(meseCorrente, annoCorrente);