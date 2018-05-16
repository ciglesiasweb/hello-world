import { CoursesService } from './courses.service';
import {Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
        <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        <table>
        <tr>
        <td [attr.colspan]="colSpan"> tttt</td> 
        </tr>
        </table>
        <img [src]="imageUrl"/>
        <button class="btn btn-primary" [class.active] = "isActive" [style.backgroundColor] = "isActive ? 'blue' : 'red'">Press me!!</button>
        <button (click)= "onSave($event)">Save </button>
        <input (keyup.enter) = "onKeyUp()" />
        `
        
})

export class CoursesComponent{
    title = "List of courses"
    // property binding
    imageUrl = "//cdn.shopify.com/s/files/1/0986/5790/products/HelloDecal-PRINT_1024x1024.png?v=1481472974"
    // attribute binding
    colSpan = 2;
    // class binding
    isActive = true;
    // style binding
    courses;

    constructor(service:CoursesService){
        this.courses = service.getCourses();
    }


    onSave($event){
        console.log('Button was clicked', $event)
    }

    getTitle(){
        return this.title
    }

    onKeyUp(){
        console.log('ENTER key was pressed')
    }

}