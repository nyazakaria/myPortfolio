import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule, Router} from '@angular/router';
import { MatToolbarModule, MatCardModule,  MatButtonModule, MatSidenavModule, MatTooltipModule,
  MatIconModule, MatListModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';



const ROUTES: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'Projets', component: ProjetsComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '*', redirectTo: HeaderComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    NavigationComponent,
    HeaderComponent,
    ProjetsComponent,
    ContactComponent,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTooltipModule,
    RouterModule.forRoot(ROUTES),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
