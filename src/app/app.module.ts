import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modules
import { SharedModule } from './shared/shared.module';
import { EventsModule  } from './events/events.module';
import { ProfileModule  } from './profile/profile.module';
import { LoginModule  } from './login/login.module';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      LandingPageComponent,
      ToolbarComponent,
   ],
   imports: [
      BrowserModule,
      SharedModule,
      EventsModule,
      LoginModule,
      ProfileModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
