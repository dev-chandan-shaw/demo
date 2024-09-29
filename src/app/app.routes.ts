import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

export const routes: Routes = [
    {
        path : 'hello',
        component : HelloComponent
    }
];
