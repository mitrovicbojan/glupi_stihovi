const verses = [
    {
        verse: `A, B, C, D avioni! A, B, C, D avioni! `,
        author: `~Obojeni Program`
    },
    {
        verse: `Nebo, nebo plavo je ali meni drago je`,
        author: `~Obojeni Program`
    },
    {
        verse: `Nebo vedro bez oblačka divan dan za put do Čačka`,
        author: `~Riblja Čorba`
    },
    {
        verse: `Zbog tebe sam i mator opet gladijator`,
        author: `~Riblja Čorba`
    },
    {
        verse: `Nemoj da bacaš betonske table sa vrha svoje zgrade`,
        author: `~Disciplina Kičme`
    },
    {
        verse: `Mediteran hoću peške da predjem`,
        author: `~KKN`
    },
    {
        verse: `Montenegro zove tebe!`,
        author: `~Bajaga i Instruktori`
    },
    {
        verse: `Ti si prava šizika`,
        author: `~Laki Pingvini`
    },
    {
        verse: `Moja mala vozi se na liniji 505`,
        author: `~Vojvodjanski Bluz Bend`
    },
    {
        verse: `Hiljadu godina, hiljadu godina, hiljadu godina`,
        author: `~Partibrejkersi`
    },
    {
        verse: `Ja na jednom mestu nikad nisam`,
        author: `~Šaban Šaulić`
    },
    {
        verse: `Moj je grad večeras dobio luku`,
        author: `~Haustor`
    },
]


const verseBtn = document.getElementById('verse-btn');
const verse = document.querySelector('.verse');
const author = document.querySelector('.author');

verseBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * verses.length);
    
    verse.innerHTML = verses[random].verse;
    author.innerHTML = verses[random].author;
});






