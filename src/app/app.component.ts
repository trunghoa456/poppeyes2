import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {SearchComponent} from './component/search/search.component';
import {ProductCardComponent} from './component/product-card/product-card.component';
import {FooterComponent} from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, ProductCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poppeyes';
  products = [
    {
      image: 'http://127.0.0.1:5500/Thu2Mua1tang1mua%203.jpg',
      name: 'Thứ 2 Mua 1 Tặng 1 - Mua 3 Miếng Tặng 3 Miếng 141K',
      money:"252.000",
    },
    {
      image: 'http://127.0.0.1:5500/Mua2.jpg',
      name: 'Thứ 2 Mua 1 Tặng 1 - Mua 2 Miếng Tặng 2 Miếng 104K',
      money: "178.000",
    },
    {
      image: 'http://127.0.0.1:5500/combo6mieng.jpg',
      name: 'Combo 6 Miếng Cajun Teriyaki Wings chỉ 69.000Đ',
      money: "115.000",
    },
    {
      image: 'http://127.0.0.1:5500/combo99k.jpg',
      name: '[Gà Giòn] Combo Tiệc Gà 7 Món Chỉ 99.000Đ',
      money: "167.000",
    },
    {
      image: 'http://127.0.0.1:5500/combogaburger.jpg',
      name: 'Combo Gà + Mì Ý Siêu No Chỉ 89K',
      money: "105.000",
    },{
      image: 'http://127.0.0.1:5500/whitechessecbjolly.jpg',
      name: 'WHITE CHESSE CB JOLLY',
      money: "161.000",
    },{
      image: 'http://127.0.0.1:5500/whitechessecbmagical.jpg',
      name: 'WHITE CHESSE CB MAGICAL',
      money: "284.000",
    },{
      image: 'http://127.0.0.1:5500/whitechessecbmerry.jpg',
      name: 'WHITE CHESSE Combo Merry',
      money: "97.000",
    },{
      image: 'http://127.0.0.1:5500/whitechessecbtwinkle.jpg',
      name: 'WHITE CHESSE CB TWINKLE',
      money: "169.000",
    },{
      image: 'http://127.0.0.1:5500/combogatamnuocmam1ng.jpg',
      name: 'Combo Gà Tắm Nước Mắm - 1 Người',
      money: "108.000",
    },{
      image: 'http://127.0.0.1:5500/combogatamnuocmam2ng.png',
      name: 'Combo Gà Tắm Nước Mắm - 2 Người',
      money: "167.000",
    },{
      image: 'http://127.0.0.1:5500/ComboFamilyA.jpg',
      name: 'Combo Gia Đình A',
      money: "259.000",
    },{
      image: 'http://127.0.0.1:5500/ComboFamilyB.webp',
      name: 'Combo Gia Đình B',
      money: "352.000",
    },{
      image: 'http://127.0.0.1:5500/ComboFamilyC.webp',
      name: 'Combo Gia Đình C',
      money: "342.000",
    },{
      image: 'http://127.0.0.1:5500/comboiuhetsay.jpg',
      name: 'COMBO IU HẾT SẢY CHỈ 145K (3 Gà Giòn, 1 Mì Ý)',
      money: "155.000",
    },
  ];
}
