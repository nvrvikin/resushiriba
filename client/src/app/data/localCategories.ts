import SushiImg from '/src/img/sushi.jpg';
import RollsImg from '/src/img/rolls.jpg';
import SaladImg from '/src/img/salad.jpg';
import PizzaImg from '/src/img/pizza.jpg';
import SoupImg from '/src/img/soup.jpg';
import SetsImg from '/src/img/set.jpg';
import DessertImg from '/src/img/dessert.jpg';
import ColdSnacksImg from '/src/img/cold-snacks.jpg';
import HotSnaksImg from '/src/img/hot-snacks.jpg';
import { ICategoryItem } from '../types/types';

const localCategories: ICategoryItem[] = [
  {
    id: '0',
    image_src: SushiImg,
    title: 'Суши',
    link: 'sushi'
  },
  {
    id: '1',
    image_src: RollsImg,
    title: 'Роллы',
    link: 'rolls'
  },
  {
    id: '2',
    image_src: SetsImg,
    title: 'Cеты',
    link: 'sets'
  },
  {
    id: '3',
    image_src: SoupImg,
    title: 'Горячие блюда',
    link: 'hot'
  },
  {
    id: '4',
    image_src: PizzaImg,
    title: 'Пицца',
    link: 'pizza'
  },
  {
    id: '5',
    image_src: HotSnaksImg,
    title: 'Горячие закуски',
    link: 'hot-snacks'
  },
  {
    id: '6',
    image_src: ColdSnacksImg,
    title: 'Холодные закуски',
    link: 'cold-snacks'
  },
  {
    id: '7',
    image_src: SaladImg,
    title: 'Салаты',
    link: 'salads'
  },
  {
    id: '8',
    image_src: RollsImg,
    title: 'Другое',
    link: 'other'
  },
  {
    id: '9',
    image_src: DessertImg,
    title: 'Десерты',
    link: 'desserts'
  }
]

export default localCategories