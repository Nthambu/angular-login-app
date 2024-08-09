import { LoginComponent } from "./components/login/login.component";
import { Routes } from "@angular/router";

const routeConfig:Routes = [
    {
        path:'',
        component:LoginComponent,
        title:'login'
    }
];
export default routeConfig;