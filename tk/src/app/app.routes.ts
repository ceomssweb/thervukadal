import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { 
        path: '', component: HomeComponent
     },
    //  { 
    //     path: '', redirectTo: 'login', pathMatch: 'full'
    //  },
    { 
        path: 'home', component: HomeComponent 
    },
    {
        path: 'login', component: LoginComponent
    },
    { 
        path: 'courses', component: CoursesComponent 
    },
    {
        path: 'examinations', component: ExaminationsComponent
    },
    { 
        path: 'admin', component: AdminComponent 
    },
    {
        path: 'search', component: SearchComponent
    },
    {
        path: 'contact', component: ContactComponent
    }
];
