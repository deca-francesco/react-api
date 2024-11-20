# Esercizio

L'applicazione con react sviluppata nei giorni scorsi al momento usa dati statici e non un'API! É il momento perfetto per fare questo switch!

Partendo dall'esercizio precedente (il blog), integriamo le API che abbiamo sviluppato durante il modulo su ExpressJS.

Al caricamento dell'applicazione, sfruttando l'hook useEffect, recuperiamo la lista dei post dal backend (il nostro server API) e la mostriamo in pagina.


## BONUS:

Il nostro server express é stato sviluppato per mettere a disposizione dell'utente vari endpoints per effettuare le operazioni CRUD.

Sfruttiamoli dalla nostra app React per effettuare

- L'aggiunta di un nuovo post, durante il submit del form (fatto sul blog nei giorni scorsi)  assicuriamoci che questi dati vengano effettivamente inviati al backend e correttamente salvati. 

- Per creare un nuovo articolo nel blog abbiamo un endpoint lato API da usare? quale?

- Implementare la funzionalità di cancellazione di un articolo. Anche qui, nell'app react dopo aver stampato la lista di post aggiungiamo un pulsante e rimuoviamo (sempre tramite una chiamata ajax al nostro server express) un elemento.

#### PS.
questo esercizio si svolge in due giorni, se il server express non é completo e funzionante sistematelo! e procedete con le chiamate ajax.

#### PPS. 
se in console quando fai la chiamata ajax vieni bloccato dalla CORS policy, leggi la documentazione di express per capire come bypassare questo meccanismo di sicurezza(https://expressjs.com/en/resources/middleware/cors.html)

Cos'é la cors policy? https://en.wikipedia.org/wiki/Cross-origin_resource_sharing