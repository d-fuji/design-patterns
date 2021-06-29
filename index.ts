class SmallAnimal {
    animaltype: string;

    constructor() {
        this.animaltype = "ポメラニアン";
    }

    say() {
        console.log(`${this.animaltype}だけどMSの中に永らく居たBOM信者の全身の毛をむしりたい`)
    }
}

const smallAnimal = new SmallAnimal;
smallAnimal.say()

class SmallDog {
    private secretPlace: string = "";
    static age: number = 10;

    dig(): string {
        return this.secretPlace;
    }

    bury(treasure: string): void {
        this.secretPlace = treasure;
    }
}

const miniatureDachshund = new SmallDog();

miniatureDachshund.bury("骨");

console.log(miniatureDachshund.dig()); // 骨

