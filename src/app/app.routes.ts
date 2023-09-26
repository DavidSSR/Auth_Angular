import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guards/auth.guard";

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent, canActivate:[ AuthGuard]},
    { path: '**', pathMatch: 'full',redirectTo: 'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);