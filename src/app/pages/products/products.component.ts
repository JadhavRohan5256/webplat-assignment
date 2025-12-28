import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReadMoreComponent } from '../../shared/components/read-more/read-more.component';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ReadMoreComponent],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id: 'prd-1001',
      title: 'Essence Mascara Lash Princess',
      description:
        'The Essence Mascara Lash Princess is a highly popular mascara known for its exceptional volumizing and lengthening effects. It features a specially designed conic fiber brush that coats every lash evenly, providing dramatic volume without clumping. The long-lasting formula ensures all-day wear while remaining lightweight and comfortable. Ideal for both everyday use and special occasions.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1002',
      title: 'Essence Mascara Lash Princess',
      description:
        'This mascara is designed to deliver intense lash definition with a rich black pigment. The creamy texture allows smooth application, while the precision brush separates lashes for a bold yet natural look. Suitable for sensitive eyes and contact lens wearers, making it a versatile choice for daily makeup routines.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1003',
      title: 'Essence Mascara Lash Princess',
      description:
        'Essence Mascara Lash Princess enhances lashes with remarkable volume and length. Its innovative formula prevents smudging and flaking throughout the day. Whether you prefer subtle elegance or dramatic lashes, this mascara adapts effortlessly, giving you a flawless finish every time.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1004',
      title: 'Essence Mascara Lash Princess',
      description:
        'Formulated with nourishing ingredients, this mascara not only beautifies lashes but also helps maintain their health. The ergonomic brush design ensures even coverage from root to tip, creating fuller, longer lashes with minimal effort.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1005',
      title: 'Essence Mascara Lash Princess',
      description:
        'A cult-favorite mascara that delivers professional results at an affordable price. The buildable formula allows you to layer for added intensity without clumping, while the smudge-resistant finish keeps your lashes looking fresh all day.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1006',
      title: 'Essence Mascara Lash Princess',
      description:
        'Designed for maximum impact, this mascara provides dramatic volume and lift. The flexible brush reaches even the smallest lashes, ensuring a wide-eyed look that lasts from morning to night.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1007',
      title: 'Essence Mascara Lash Princess',
      description:
        'This mascara delivers a bold lash look with its richly pigmented formula and precision brush. It glides on smoothly, defining and separating lashes while maintaining a lightweight feel.',
      category: 'Beauty',
      price: 9.99
    },
    {
      id: 'prd-1008',
      title: 'Essence Mascara Lash Princess',
      description:
        'Known for its impressive performance, this mascara enhances lash volume and length without compromising comfort. The long-wear formula resists flaking and smudging, making it perfect for long days and special events.',
      category: 'Beauty',
      price: 9.99
    }
  ];


  constructor(
    private pageTitleService: PageTitleService
  ) { }

  ngOnInit() {
    this.pageTitleService.setTitle('Products');
  }
}
