export enum MenuType {
    Base = 'Base',
    Declaration = 'Declaration',
    Office = 'Office',
    PrivateOffice = 'PrivateOffice'
}

export default interface iMenu {
    title: string
    icon: string
    path: string
    typeMenu: MenuType
}