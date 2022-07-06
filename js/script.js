// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

//* milestone 1
const posts = [
    {
        id: 1, 
        author:'Pepito Guzman', 
        img:'https://unsplash.it/300/300?image=22',
        date: '06-04-2022',
        testo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt enim ac efficitur aliquam. Nullam at ante nisl. Proin pharetra finibus mi, vel accumsan diam gravida vel. Donec eu porta lectus. Proin iaculis velit id pulvinar viverra. Donec id scelerisque ante, vitae pharetra libero. Suspendisse potenti. Fusce varius lacus eros, non ultricies lectus pulvinar et. Praesent mollis pharetra sem, finibus posuere metus venenatis elementum. Curabitur neque mi, dignissim eu consequat nec, placerat sed augue. Duis finibus, nulla vitae scelerisque ullamcorper, nulla nulla dignissim justo, vitae tempor elit dui vel magna. Suspendisse nec justo dui. Nulla efficitur sapien lorem, et tempus leo fringilla sit amet. Fusce lorem velit, tincidunt et metus quis, hendrerit scelerisque est.',
        photo:'https://unsplash.it/300/300?image=3', 
        likes: 35

    }
]
