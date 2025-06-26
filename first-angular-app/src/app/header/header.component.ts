import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    standalone:true, //if working on Angular 19 or above it is automatically set true

    // template:'<h1>Hello World</h1>', not recommended way to define a template,
    templateUrl:'./header.component.html',
    // styleUrls //in older versions styleUrl doesn't exist -use styleUrls instead
    //styles:[''] in this we can write inline styles but not prefered
    styleUrl:'./header.component.css', 

    
})
export class HeaderComponent{
  
}