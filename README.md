# Trallalla 3D Arcade

Gioco statico in italiano per imparare il russo. Si pubblica direttamente con GitHub Pages e non richiede compilazione né dipendenze.

## Struttura del progetto

- `index.html` — struttura della pagina e caricamento delle risorse nell’ordine necessario.
- `css/base.css` — stile generale e componenti condivisi.
- `css/settings.css` — impostazioni e feedback.
- `css/map.css` — percorso e mappa dei livelli.
- `css/akinator.css` e `css/genie.css` — minigioco del genio e sue illustrazioni.
- `js/game.js` — contenuti del corso, logica delle attività, audio, progressi e interfaccia.
- `js/data/audio-voices.js` — registrazioni vocali incorporate e relativi dati.
- `js/data/family-art.js` — illustrazioni e dati della foto di famiglia.
- `js/data/world-art.js` — illustrazioni e dati della mappa.
- `js/data/avatars.js` e `assets/avatars/avatar-kit.svg` — avatar personale: base condivisa, tre costumi sovrapponibili, tre volti e tinta salvati nel browser. `assets/avatars/explorer.svg`, `scholar.svg` e `traveler.svg` sono esportazioni autonome dei tre personaggi.
- `css/avatar.css` — profilo e presentazione dell’avatar sulla mappa.
- `audio/` — registrazioni MP3 utilizzate dal gioco.
- `audio-manifest.json` — inventario e hash SHA-256 delle registrazioni MP3.
- `.nojekyll` — evita filtri Jekyll durante la pubblicazione.

## Avatar

Il profilo si apre dalla barra della mappa. Nome, costume, espressione, colore dell’abito e carnagione vengono salvati localmente nel browser (`tr-avatar-v1`); non serve un account. I tre costumi usano lo stesso corpo e la stessa griglia del volto, così la pedina sulla tappa attuale riusa le stesse scelte del profilo.

L’avatar è un asset SVG nativo realizzato nel progetto; ImageGen non è stato usato.

## Genio delle parole

Il genio sceglie le domande con un modello probabilistico e l'entropia attesa; quando indovina o l'utente gli insegna la parola pensata, aggiorna i dati salvati nel browser. L'implementazione JavaScript indipendente prende ispirazione dal metodo di [OpenAkinator](https://github.com/DoricRedPanda/OpenAkinator), ma non include il suo codice C né il database inglese di persone e domande.

Gli stili sono caricati nell’ordine base, impostazioni, mappa e minigioco. Gli script dati in `js/data/` devono restare prima di `js/game.js`. I percorsi sono relativi, quindi funzionano anche quando GitHub Pages pubblica il progetto sotto il percorso del repository.

## Pubblicazione

Pubblica l’intera cartella sulla branch `main` e configura GitHub Pages su `/(root)`. Non spostare o rinominare `audio/` senza aggiornare i percorsi nel codice e nel manifesto.
