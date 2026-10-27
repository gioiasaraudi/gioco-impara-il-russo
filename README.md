# Trallalla 3D Arcade

Versione pronta per GitHub Pages, con gli audio MP3 estratti dall’HTML e collegati tramite percorsi relativi.

## Pubblicazione su GitHub Pages

1. Estrai tutto il contenuto dello ZIP.
2. Carica **tutti** i contenuti di questa cartella nella root del repository GitHub (non solo `index.html`).
3. In GitHub apri **Settings → Pages**.
4. In **Build and deployment**, scegli **Deploy from a branch**, branch `main` e cartella `/ (root)`, poi salva.
5. Apri l’URL pubblicato da GitHub Pages.

## Struttura

- `index.html` — gioco completo, con la spiegazione animata dell’accento sulla О e gli audio collegati a file esterni.
- `audio/` — file MP3 utilizzati dal gioco. Non rinominare né spostare questa cartella.
- `audio-manifest.json` — elenco e hash SHA-256 degli audio inclusi.

Tutti i percorsi audio sono relativi (`audio/nomefile.mp3`), quindi funzionano su GitHub Pages anche quando il sito è pubblicato sotto il percorso di un repository. Non aprire `index.html` separatamente dalla cartella `audio/`: carica l’intera struttura.
