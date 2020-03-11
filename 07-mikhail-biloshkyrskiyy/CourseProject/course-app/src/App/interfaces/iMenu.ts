export enum Availability {
    NoRegistrations = 'NoRegistrations',
    Registrations = 'Registrations'
}

export enum MenuType {
    Base = 'Base',
    Declaration = 'Declaration',
    Office = 'Office'
}

export default interface iMenu {
    title: string
    icon: string
    path: string
    availability: Availability,
    typeMenu: MenuType
}