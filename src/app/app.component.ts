import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, FeaturesSectionComponent, CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chubbAssignment6';
}
