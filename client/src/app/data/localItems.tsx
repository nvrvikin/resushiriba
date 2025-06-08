import { IItem } from '../types/types';
import MiyazakiMakiImg from '@/shared/ui/img/myazaki_maki.png';
import PizzaSolaireImg from '@/shared/ui/img/pizza_solaire.png';


const items: IItem[] = [
    {
        id: '100',
        title: 'Миядзаки Маки',
        description: <>
            Обманчиво простые снаружи, но с глубокой сложностью внутри.<br/>
            В основе — угольно-чёрный рис, окрашенный бамбуковым углём, с начинкой из копчёной утки, обжаренных грибов шиитаке и острого хрена васаби.<br/>
            Сверху — хрустящие тонкие чипсы из карамелизованного бекона, а вместо соевого соуса подаётся густой соус на основе гранатового нектара и тёмного мёда — сладкий, но с горьким послевкусием.<br/>
            Этот ролл требует терпения, но награждает незабываемым опытом.
        </>,
        image_link: MiyazakiMakiImg,
        price: 300,
        weight: 200,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '101',
        title: 'Калифорния',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 200,
        weight: 180,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '102',
        title: 'Касельвания',
        description: <>
            Готические роллы, вдохновлённые замками вампиров и проклятыми землями.<br/>
            Внутри тёмно-фиолетового риса (окрашенного чернилами каракатицы) скрывается начинка из копчёной оленины, сливочного сыра с трюфелем и маринованной свёклы. Сверху — хрустящие жареные каперсы и прозрачный желе из граппы.<br/>
            Подаётся на каменной плитке с "дымом", а вместо васаби — острый хрен с чёрной смородиной.<br/>
            Названо в честь Касельвании — ведь эти роллы, как и вампиры, прекрасны, опасны и оставляют после себя послевкусие вечности.</>,
        image_link: '',
        price: 280,
        weight: 160,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '103',
        title: 'Салат "Асина"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 290,
        weight: 120,
        category: '7',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '104',
        title: 'Салат "Цезарь"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 140,
        weight: 180,
        category: '7',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '105',
        title: 'Мадагаскар',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 160,
        weight: 40,
        category: '0',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '106',
        title: 'Трофей',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 200,
        weight: 70,
        category: '0',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '107',
        title: 'Сет "Путь жертв"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 2220,
        weight: 1200,
        category: '2',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '108',
        title: 'Сет "Нито"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 1999,
        weight: 1150,
        category: '2',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '109',
        title: 'Сет "Божественное дитя"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 1720,
        weight: 1280,
        category: '2',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '110',
        title: 'Суп "Двойной Эстус"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 1500,
        weight: 2000,
        category: '3',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '111',
        title: 'Пицца "Каримская"',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 640,
        weight: 750,
        category: '4',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '112',
        title: 'Пицца "Солер"',
        description: <>
            Поклонение Солнцу — давно забытая вера, но когда-то она была широко популярна среди великих воинов.<br/>
            Члены этого ковенанта могут оставлять свои золотые знаки, чтобы их братьям было проще их призвать.
        </>,
        image_link: PizzaSolaireImg,
        price: 699,
        weight: 700,
        category: '4',
        is_enabled: true,
        is_new: false,
        is_hit: true
    },
    {
        id: '113',
        title: 'Колечки лукового рыцаря',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 280,
        weight: 200,
        category: '5',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '114',
        title: 'Палочки',
        description: <>Вкусные и ароматные палочки с привлекательным видом, доставляющие удовольствие и удовлетворение.</>,
        image_link: '',
        price: 10,
        weight: 5,
        category: '8',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '115',
        title: 'Соевый соулс',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 40,
        weight: 20,
        category: '8',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '116',
        title: 'Леденцы Ако',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 100,
        weight: 30,
        category: '9',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '117',
        title: 'Леденцы Гатина',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 100,
        weight: 30,
        category: '9',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '118',
        title: 'Сладкий рис',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 120,
        weight: 40,
        category: '9',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '119',
        title: 'Акуна Маки',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 210,
        weight: 200,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '120',
        title: 'Микири Бонита',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 420,
        weight: 360,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '121',
        title: 'Филадельфия',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 300,
        weight: 200,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '122',
        title: 'Танто Темпура',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 150,
        weight: 140,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
    {
        id: '123',
        title: 'Супер Хот Чили Спайси Анна Асти',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 300,
        weight: 170,
        category: '1',
        is_enabled: true,
        is_new: false,
        is_hit: true
    },
    {
        id: '124',
        title: 'Пульчинелла',
        description: <>Вкусное и ароматное блюдо с привлекательным видом, доставляющее удовольствие и удовлетворение.</>,
        image_link: '',
        price: 800,
        weight: 500,
        category: '0',
        is_enabled: true,
        is_new: false,
        is_hit: false
    },
]

export default items