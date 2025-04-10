class auto {
    constructor(merkki, malli, vuosimalli) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosimalli = vuosimalli;

    }
    tulostatiedot() {
        console.log(`Auto: ${this.merkki}, ${this.malli}, vuosimalli: ${this.vuosimalli}`);
    }
}

const auto1 = new auto("Toyota", "Supra", "2021");
const auto2 = new auto("Mazda", "Miata", "1998");

auto1.tulostatiedot ();
auto2.tulostatiedot ();