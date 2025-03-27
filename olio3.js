const kirjat = [
    { Nimi: "Carmilla", kirjailia: "Sheridan Le Fanu", vuosi: 1872 },
    { Nimi:"Things we say in the dark", kirjailia: "Kristy Logan", vuosi: 2019},
    { Nimi:"Fingersmith", kirjailia: "Sarah Waters", vuosi: 2002},

];

kirjat.forEach(kirja => {
    console.log(`Nimi: ${kirja.Nimi}, Kirjailia: ${kirja.kirjailia}, Vuosi: ${kirja.vuosi}`)

});