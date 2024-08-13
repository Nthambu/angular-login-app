import { Component } from '@angular/core';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { Routes } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";

const routeConfig:Routes = [
    { 
        path: '',
         component: RegisterComponent, 
         
         title:'mainpage'
        },
    
    {
        path:'dashboard',
        component:DashboardComponent,
        title:'register'
    },
    {
    path:'register',
    component:RegisterComponent,
    title:'registration'
    }
];
export default routeConfig;