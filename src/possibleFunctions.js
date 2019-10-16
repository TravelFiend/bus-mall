    // increment show count function
    
    showAdder(radiosArr) {
        radiosArr.forEach(radio => {
            let newRad = {
                id: radio.value,
                showCount: 1,
                clickCount: 0
            };
            if (this.countsArray.length < 1) {
                this.countsArray.push(newRad);
            } else {
                let found = this.countsArray.find(c => c.id === radio.value);
                if (found === undefined) {
                    this.countsArray.push(newRad);
                } else {
                    this.countsArray[this.countsArray.indexOf(found)].showCount++;
                }
            }
        });
    }

    // click listener

    myRadios.forEach(radio => {
        radio.addEventListener('click', (event) => {
            if (event.target.value === productArray.countsArray.id) {
                productArray.countsArray.clickCount++;
            }
            productArray.randomPicGenerator();
            productArray.showAdder(myRadios);
        });

    });