/**
 * Gog.com Front End - Sample Data of Products
 * https://github.com/umuthan/gog-com-frontend
 *
 * Author: Umuthan Uyan
 *
 */

const products = [
  {
    id: 1,
    name: 'oddworld: stranger’s wrath',
    thumbnail: require('../Assets/img/thumbnail/oddworld_strangers_wrath.jpg'),
    price: 9.99,
    discount: 50,
    owned: 0
  },
  {
    id: 2,
    name: 'chaos on deponia',
    thumbnail: require('../Assets/img/thumbnail/chaos_on_deponia.jpg'),
    price: 9.99,
    discount: 0,
    owned: 1
  },
  {
    id: 3,
    name: 'The settlers 2: gold edition',
    thumbnail: require('../Assets/img/thumbnail/the_settlers_2_gold_edition.jpg'),
    price: 5.99,
    discount: 0,
    owned: 0
  },
  {
    id: 4,
    name: 'neverwinter nights',
    thumbnail: require('../Assets/img/thumbnail/neverwinter_nights.jpg'),
    price: 4.99,
    discount: 50,
    owned: 0
  },
  {
    id: 5,
    name: 'assassin’s creed: director’s cut',
    thumbnail: require('../Assets/img/thumbnail/assassins_creed_directors_cut.jpg'),
    price: 9.99,
    discount: 0,
    owned: 0
  },
]

export { products }
