import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import routeConfig from './app/routes';



bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routeConfig)
  ]
})
  .catch((err) => console.error(err));
