export interface IIcon {
    className: string
}

export interface ICategory {
    id: string
    title: string
    cat_link: string
}

export interface IItem {
    id: string
    title: string
    description: string
    image_link: string
    price: number
    weight: number
    category: number
    is_enabled: boolean
    is_new: boolean
    is_hit: boolean
}

export interface IMenuItem {
    id: string
    image_src: string
    title: string
    description: string
    image_link: string
    price: number
    weight: number
    category: number
    is_enabled: boolean
    is_new: boolean
    is_hit: boolean
    is_preview: boolean
}

export interface IOrderItem {
  id: string
  title: string
  amount: number
  price_per_one: number
  type: string
  subitems: IOrderSubitem[]
}

export interface IOrderSubitem {
  id: string
  title: string
  amount: number
  price_per_one: number
  type: string
}

export interface IOrderItemRow {
  id: string
  item_data: IOrderItem
  addFunc: (id: string) => void
  removeFunc: (id: string) => void
}

//TODO: image_src & image_link ???