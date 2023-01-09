'use strict';

class Hamburger {
    static SIZE_SMALL = {
        name: 'small',
        price: 50,
        calories: 20
    }

    static SIZE_BIG = {
        name: 'big',
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        name: 'cheese',
        price: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        name: 'salad',
        price: 20,
        calories: 5
    }

    static STUFFING_POTATO = {
        name: 'potato',
        price: 15,
        calories: 10
    }
    static TOPPING_SAUCE = {
        name: 'sauce',
        price: 15,
        calories: 0
    }

    static TOPPING_MAYO = {
        name: 'mayo',
        price: 20,
        calories: 5
    }

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];    
    }
        
    addTopping(topping) {
        this.toppings.push(topping);
        return this;
    } 
    
    calculatePrice() { 
        let summary = 0;
        let priceTopping = 0;

        this.toppings.forEach(element => {
            priceTopping += element.price;
        });

        summary = this.size.price + this.stuffing.price + priceTopping;

        return summary;
    }
    
    calculateCalories() {
        let calories = 0;
        let caloriesTopping = 0;

        this.toppings.forEach(element => {
            caloriesTopping += element.calories;
        });

        calories = this.size.calories + this.stuffing.calories + caloriesTopping;

        return calories;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Price: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());
console.log(hamburger);

const bigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);
bigHamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Price: " + bigHamburger.calculatePrice());
console.log("Calories: " + bigHamburger.calculateCalories());
bigHamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + bigHamburger.calculatePrice());
console.log(bigHamburger);