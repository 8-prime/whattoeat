import { Component, Input } from '@angular/core';
import { Dish } from './dish';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	data:Dish = 
	{
		name: 'Chicken Burger',
		cal: 0,
		carbs: 0,
		fat: 0,
		protein: 0,
		img: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg'
	}
	title = 'whattoeat';	

	generateDish() {
		return new Dish('Chicken', Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg');
	}
}
