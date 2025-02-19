import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() image!: string;
  @Input() name!: string;
  @Input() money!: string;
}
