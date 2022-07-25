export class Dish {
    constructor(public name: string, public cal: number, public carbs: number, public fat: number, public protein: number, public img: string){
        this.name = name;
        this.cal = cal;
        this.carbs = carbs;
        this.fat = fat;
        this.protein = protein;
        this.img = img;
    }
    
}
