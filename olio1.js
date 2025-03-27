const opiskelija = {
    nimi: "Matti Meikäläinen",
    ikä: 22,
    kurssi: "Python",
    tulostatiedot:function () {
        console.log(`Opiskelija: ${this.nimi} Ikä: ${this.ikä}, Kurssi:${this.kurssi}`)
    }
};

opiskelija.tulostatiedot();