import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    BenefitsComponent,
    ServicesComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactFormComponent,
    WhoWeAreComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
