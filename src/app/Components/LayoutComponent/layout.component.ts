import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ]

})

export class LayoutComponent  { 

	constructor(private activeRoute : ActivatedRoute) {
		// console.log(route.children.url.value[0].path);
		//console.log(activeRoute.children);
		
	}

	logRoute() : void {
		//console.log(this.activeRoute.children[0].url.value[0].path);
	}

	name = 'Mångata'; 


}
