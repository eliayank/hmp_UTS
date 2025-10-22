import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})

export class AppComponent {
    isAdmin = localStorage.getItem("username") == "admin"? true: false;    

    constructor() { }

    logout() {
        localStorage.clear();
    }
}
