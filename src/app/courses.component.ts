import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


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
        template vars:
        <input #emailVar (keyup.enter) = "onKeyUp(emailVar.value)" />
        two way binding 
        <input [(ngModel)]="email" (keyup.enter) = "onKeyUp()" />
        <h2>pipes</h2>
        {{course.title | uppercase}} <br/>
        {{course.students | number }} <br/>
        {{course.rating | number:'1.2-2' }} <br/>
        {{course.price | currency:'EUR'}} <br/>
        {{course.releaseDate | date:'shortDate'}} <br/>
        aaaa {{text | summary:10}}

        `

})

export class CoursesComponent {
    title = "List of courses"
    // property binding
    imageUrl = "//cdn.shopify.com/s/files/1/0986/5790/products/HelloDecal-PRINT_1024x1024.png?v=1481472974"
    // attribute binding
    colSpan = 2;
    // class binding
    isActive = true;
    // style binding
    courses;
    //two way binding
    email = "me@me.com"
    //pipes
    course = {
        title: "bla bla bla hol a que tal",
        rating: 4.5458,
        students: 544154,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    text = `
    dfskfjdaskfdsklmf dfkjfadslkfjds fkdlsfjsdfjksd fdjsfjksdfjksd  dskfsdjkfsjkd fkasdfjsdfklsa adskfdskjfjasdkfjk fjasdfjfjlkds `

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }


    onSave($event) {
        console.log('Button was clicked', $event)
    }

    getTitle() {
        return this.title
    }

    onKeyUp() { // template variable #email
        console.log('ENTER key was pressed', this.email)
    }

    // onKeyUp(email){ // template variable #email
    //     console.log('ENTER key was pressed', email)
    // }

}