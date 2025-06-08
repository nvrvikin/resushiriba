import { ReactNode } from "react"

export interface IIcon {
    className: string
}

export interface ICategoryItem {
  id: string,
  image_src: string,
  title: string,
  link: string
}

export interface ICategory {
    id: string
    title: string
    link: string
}

export interface IItem {
    id: string
    title: string
    description: ReactNode
    image_link: string
    price: number
    weight: number
    category: string
    is_enabled: boolean
    is_new: boolean
    is_hit: boolean
}

export interface IMenuItem {
    id: string
    image_src: string
    title: string
    description: ReactNode
    image_link: string
    price: number
    weight: number
    category: string
    is_enabled: boolean
    is_new: boolean
    is_hit: boolean
    is_preview: boolean
}

export interface IOrderItem {
  id: string
  title: string
  amount: number
  price: number
  image_link: string
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
}

export interface ICartLSItem {
    id: string,
    amount: number
}

export interface ICartState {
    items: ICartLSItem[]
}

//TODO: image_src & image_link ???