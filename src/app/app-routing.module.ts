import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'portfolio', component: PortfolioComponent},
{ path: 'contact', component: ContactComponent},
{ path: '**', redirectTo: 'home', pathMatch: 'full' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // Scroll to top on route change
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
