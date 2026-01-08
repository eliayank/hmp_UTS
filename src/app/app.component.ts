import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})

export class AppComponent {
    isAdmin = Number(localStorage.getItem("app_is_admin")) == 1? true: false;    

    constructor() { }

    logout() {
        localStorage.clear();
    }
}
