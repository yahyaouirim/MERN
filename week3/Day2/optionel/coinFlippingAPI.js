function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        const flipAndCheck = () => {
            attempts++;
            const result = tossCoin();
            console.log(`${result} was flipped`);

            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }

            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            } else if (attempts >= 100) {
                reject("Exceeded 100 attempts without flipping five heads");
            } else {
                flipAndCheck();
            }
        };

        flipAndCheck();
    });
}

fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

console.log("This is run after the fiveHeads function completes");
