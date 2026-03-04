import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Gaming & Entertainment' },
    { id: 3, name: 'Home & Kitchen' },
    { id: 4, name: 'Accessories & Peripherals' }
  ];

  private readonly products: Product[] = [
    // Smartphones (id: 1)
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля.',
      price: 774648,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 16 128Gb',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
      price: 490000,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },
    {
      id: 3,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ',
      description: 'Samsung Galaxy A07 6 ГБ/128 ГБ — универсальный смартфон для активной жизни.',
      price: 68665,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pdb/61291709.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pdd/61291710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pdd/61291711.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-lavandovyi-144817894/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },
    {
      id: 4,
      name: 'Смартфон Xiaomi Redmi Note 14 8 ГБ/256 ГБ',
      description: 'Xiaomi Redmi Note 14 8 ГБ/256 ГБ — это мощный и стильный смартфон.',
      price: 107990,
      rating: 4.7,
      likes: 0,
      isLiked: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p69/p16/73805344.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p16/73805344.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7c/pe6/57223172.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p98/pe6/57223173.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-zelenyi-133574942/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },
    {
      id: 5,
      name: 'Смартфон OPPO A78 5G 8 ГБ/256 ГБ',
      description: 'Смартфон OPPO A78 5G - мощное устройство с высокой производительностью.',
      price: 88998,
      rating: 4.7,
      likes: 0,
      isLiked: false,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pb5/25477542.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf2/pfc/64346866.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/pfc/64346868.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oppo-a78-5g-8-gb-256-gb-chernyi-134893487/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },

    // Gaming & Entertainment (id: 2)
    {
      id: 6,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Приготовьтесь встречать новую PlayStation 5 Slim.',
      price: 303640,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 7,
      name: 'Игровое кресло 501126',
      description: 'Удобное геймерское кресло, как в гоночном автомобиле.',
      price: 22697,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h2b/86703072149534.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h38/86703072280606.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p7e/49210121.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-501126-chernyi-111098602/?c=750000000'
    },
    {
      id: 8,
      name: 'Мышь Logitech G102 Lightsync',
      description: 'Logitech G102 LightSync позволяет играть с максимальной эффективностью.',
      price: 5999,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h93/64119547428894.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
    },
    {
      id: 9,
      name: 'Игровой монитор 24.5\" MSI MAG255XF',
      description: 'Игровой монитор MSI MAG255XF — высококачественное решение для геймеров.',
      price: 93989,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p46/p08/14795526.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p46/p08/14795526.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p0b/14795531.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0b/14795533.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/24-5-msi-mag255xf-chernyi-131894370/?c=750000000'
    },
    {
      id: 10,
      name: 'Клавиатура HyperX Alloy Origins 65 4P5D6AX ',
      description: 'HyperX Alloy Origins 65 — это прочная, чрезвычайно портативная клавиатура.',
      price: 39246,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe9/pbf/20783592.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe9/pbf/20783592.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h71/86350818803742.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbb/ha5/86350818869278.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hyperx-alloy-origins-65-4p5d6ax-chernyi-104475649/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },

    // Home & Kitchen (id: 3)
    {
      id: 11,
      name: 'Аэрогриль LAK HOME DEIME 77',
      description: 'Аэрогриль 1700 Вт, 7 литров — всё для вашей кухни!',
      price: 59900,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/p01/71240688.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p01/71240688.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pdb/81998918.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/pc6/56742742.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lak-home-deime-77-belyi-137248550/?c=750000000'
    },
    {
      id: 12,
      name: 'Электрочайник Acron CA-182A',
      description: 'Удобный чайник в стальном корпусе.',
      price: 2228,
      rating: 4.7,
      likes: 0,
      isLiked: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/p33/55083784.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p33/55083784.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p82/p33/55083785.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p33/55083788.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/elektrochainik-acron-ca-182a-chernyi-serebristyi-136561989/?c=750000000'
    },
    {
      id: 13,
      name: 'Распашной шкаф Qazyna Jihaz UL-TRA',
      description: 'Элегантный распашной шкаф для хранения одежды.',
      price: 42000,
      rating: 4.7,
      likes: 0,
      isLiked: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb4/pd0/83083485.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb4/pd0/83083485.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p3f/72662073.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h45/86503356858398.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-qazyna-jihaz-ul-tra-80x190h45-sm-belyi-korichnevyi-108794828/?c=750000000'
    },
    {
      id: 14,
      name: 'Робот-пылесос Xiaomi Robot Vacuum X20+ BHR8124EU',
      description: 'Умный робот-пылесос Xiaomi для ежедневной уборки.',
      price: 214390,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4a/p07/107939309.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4a/p07/107939309.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p09/107939310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p09/107939311.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x20-bhr8124eu-belyi-117857029/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },
    {
      id: 15,
      name: 'Кофеварка Kitfort КТ-760-1',
      description: 'Китфорт КТ-760 может приготовить до 4 чашек кофе за один раз.',
      price: 189999,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p95/pcf/52521178.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pcf/52521178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p79/pcf/52521179.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/pcd/52521180.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kofevarka-kitfort-kt-760-1-chernyi-krasnyi-101380259/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },

    // Accessories & Peripherals (id: 4)
    {
      id: 16,
      name: 'Смарт-часы YUNTEKO DMi50',
      description: 'YUNTEKO DMi50 — умнее других \"умных\" часов!',
      price: 29888,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p52/58332179.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p52/58332178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p54/58332180.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/yunteko-dmi50-grafitovyi-chernyi-112844424/?c=750000000'
    },
    {
      id: 17,
      name: 'Микрофон Raf MK560',
      description: 'Компактный микрофон Raf MK560 с качественным звуком.',
      price: 4999,
      rating: 4.8,
      likes: 0,
      isLiked: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/pf0/56355542.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p12/pf0/56355542.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pc6/69797031.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf7/pc2/69797032.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mikrofon-raf-mk560-chernyi-143473806/?c=750000000'
    },
    {
      id: 18,
      name: 'Стилус Apple Pencil Pro',
      description: 'Apple Pencil Pro добавляет еще больше волшебных возможностей, чтобы помочь воплотить ваши идеи в жизнь.',
      price: 67469,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/hb2/87129104220190.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hb2/87129104220190.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h18/87129104285726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/hbb/87129104351262.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stilus-apple-pencil-pro-belyi-119975356/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },
    {
      id: 19,
      name: 'Наушники Marshall Major IV',
      description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки.',
      price: 19999,
      rating: 4.9,
      likes: 0,
      isLiked: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h11/80130097381406.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h57/h11/80130097381406.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h93/64254760484894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h71/80130097905694.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-korichnevyi-104024603/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    },
    {
      id: 20,
      name: 'Компьютерные колонки Xiaomi ASB02A',
      description: 'Саундбар для компьютера Xiaomi Redmi (ASB02A) — настольная колонка со стереозвуком и мягкой RGB-подсветкой.',
      price: 27955,
      rating: 4.7 ,
      likes: 0,
      isLiked: false,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/p73/33742244.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p73/33742244.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p80/p70/33742250.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p70/33742251.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-asb02a-chernyi-117575161/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7imEUCwwPcMlyyqDq-6uRFZ1&gclid=CjwKCAiAkvDMBhBMEiwAnUA9BUtkGEwBVuhzVaqdlocAalP_DU_2L_lKVmK-Pa0NaQsKF6gRXWB7KxoCH4QQAvD_BwE'
    }
  ];

  private readonly deletedProductIds = new Set<number>();

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(
      (p) => p.categoryId === categoryId && !this.deletedProductIds.has(p.id)
    );
  }

  deleteProduct(productId: number): void {
    this.deletedProductIds.add(productId);
  }
}

