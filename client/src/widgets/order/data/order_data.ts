const DEFAULT_ORDER_DATA = [
  {
    id: '0',
    title: '#####',
    amount: 2,
    price_per_one: 399,
    type: 'regular',
    subitems: []
  },
  {
    id: '1',
    title: '### #####',
    amount: 1,
    price_per_one: 400,
    type: 'complex',
    subitems: [
      {
        id: '2',
        title: '#######',
        amount: 1,
        price_per_one: 200,
        type: 'subitem' 
      },
      {
        id: '3',
        title: '##### ####',
        amount: 2,
        price_per_one: 100,
        type: 'subitem' 
      }
    ]
  },
  {
    id: '4',
    title: '####### ##### ###',
    amount: 3,
    price_per_one: 280,
    type: 'regular',
    subitems: []
  }
]

const DEAFULT_LOCAL_IDS = [
  {
    id: '1',
    amount: 1
  },
  {
    id: '2',
    amount: 3
  }
]

export {
    DEFAULT_ORDER_DATA,
    DEAFULT_LOCAL_IDS
}