import { Component, Input } from '@angular/core';
import { Dish } from '../dish';

@Component({
	selector: 'app-fooditem',
	templateUrl: './fooditem.component.html',
	styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent {

	@Input() dish:Dish = {
		name: '-',
		cal: 0,
		carbs: 0,
		fat: 0,
		protein: 0,
		img: '-'
	};

}
