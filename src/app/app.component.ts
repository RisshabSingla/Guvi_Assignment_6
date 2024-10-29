import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chubbAssignment6';
}
