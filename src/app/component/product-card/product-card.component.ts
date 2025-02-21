import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() id!: string;
  @Input() image!: string;
  @Input() name!: string;
  @Input() money!: string;
}
