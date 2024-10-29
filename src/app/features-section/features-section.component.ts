import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

const Data = [
  {id: "1",heading: "Money Back Gurantee", subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
  },{id: "2",heading: "All Claims at Anytime", subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
  },{id: "3",heading: "Digital Insurance Policy", subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
  },{id: "4",heading: "Direct Payment App", subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
  }
]

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css'
})
export class FeaturesSectionComponent {
  cardData = Data;
}
