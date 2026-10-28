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
- `audio/` — registrazioni MP3 utilizzate dal gioco.
- `audio-manifest.json` — inventario e hash SHA-256 delle registrazioni MP3.
- `.nojekyll` — evita filtri Jekyll durante la pubblicazione.

Gli stili sono caricati nell’ordine base, impostazioni, mappa e minigioco. Gli script dati in `js/data/` devono restare prima di `js/game.js`. I percorsi sono relativi, quindi funzionano anche quando GitHub Pages pubblica il progetto sotto il percorso del repository.

## Pubblicazione

Pubblica l’intera cartella sulla branch `main` e configura GitHub Pages su `/(root)`. Non spostare o rinominare `audio/` senza aggiornare i percorsi nel codice e nel manifesto.
