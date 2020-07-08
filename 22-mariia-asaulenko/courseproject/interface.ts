import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface ChildrenProps {
    children: React.ReactNode
}

export interface State {
    isDrawerOpened: boolean
}

export interface ItemMenu {
    id: string,
    title: string,
    link: string
}

export interface Icon {
    [key: string]: IconDefinition
}

export interface CardProp {
    image: string,
    title: string,
    path: string,
    buttonName: string
}

export interface ResultData {
    result:Object[]
  }