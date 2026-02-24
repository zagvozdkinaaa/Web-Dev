import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля.',
      price: 774648,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 2,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Приготовьтесь встречать новую PlayStation 5 Slim.',
      price: 303640,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 3,
      name: 'Смарт-часы YUNTEKO DMi50',
      description: 'YUNTEKO DMi50 — умнее других "умных" часов!',
      price: 29888,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p54/58332180.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 4,
      name: 'Аэрогриль LAK HOME DEIME 77',
      description: 'Аэрогриль 1700 Вт, 7 литров — всё для вашей кухни!',
      price: 59900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/p01/71240688.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p01/71240688.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pdb/81998918.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/pc6/56742742.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lak-home-deime-77-belyi-137248550/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 5,
      name: 'Игровое кресло 501126',
      description: 'Удобное геймерское кресло, как в гоночном автомобиле.',
      price: 22697,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h38/86703072280606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p7e/49210121.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 6,
      name: 'Микрофон Raf MK560',
      description: 'Компактный микрофон Raf MK560 с качественным звуком.',
      price: 4999,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/pf0/56355542.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pf0/56355542.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pc6/69797031.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/pc2/69797032.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mikrofon-raf-mk560-chernyi-143473806/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 7,
      name: 'Мышь Logitech G102 Lightsync',
      description: 'Logitech G102 LightSync позволяет играть с максимальной эффективностью.',
      price: 5999,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h93/64119547428894.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 8,
      name: 'Электрочайник Acron CA-182A черный, серебристый',
      description: 'Удобный чайник в стальном корпусе.',
      price: 2228,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/p33/55083784.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p33/55083784.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p82/p33/55083785.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p33/55083788.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/elektrochainik-acron-ca-182a-chernyi-serebristyi-136561989/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 9,
      name: 'Распашной шкаф Qazyna Jihaz',
      description: 'Элегантный распашной шкаф Qazyna Jihaz станет стильным решением для хранения одежды.',
      price: 42000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb4/pd0/83083485.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb4/pd0/83083485.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p3f/72662073.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h45/86503356858398.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-qazyna-jihaz-ul-tra-80x190h45-sm-belyi-korichnevyi-108794828/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    },
    {
      id: 10,
      name: 'Монитор 24.5" MSI MAG255XF',
      description: 'Игровой монитор MSI MAG255XF — высококачественное решение для геймеров.',
      price: 93989,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p08/14795526.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p46/p08/14795526.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p0b/14795531.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0b/14795533.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/24-5-msi-mag255xf-chernyi-131894370/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7gwDUVOeikcCk2NC1HA1BM_G&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CdjXfye7P-Tvpaq4_QBlAejX_OkK1zOgNmdQXkSbOXq2GOdsNvE0RoCxk4QAvD_BwE'
    }
  ];
}
