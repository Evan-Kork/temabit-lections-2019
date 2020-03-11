export interface iBranch {
    number: number
    adress: string
    locality: string
    type: BranchType
    format: iFormat
    delivery_branch_id: string
    max_weight: string
    lat: string
    lng: string
    description: string
    shedule_description: string
    photos: string[]
    services: ServicesType
    public: PublickType
}

export interface iLocalities {
    uuid: string
    SCOATOU: string
    parent_uuid: string
    title_ua: string
    parent_title_ua: string
    title_ru: string
    parent_title_ru: string
    title_en: string
    parent_title_en: string
}

export interface iLocation {
    location: string
}

export interface iFormat {
    short_name: FormatType
    description: string
}

export enum LocalitiesType {
    Base = '',
    All = 'all',
    Activity = 'activity'
}

export enum BranchType {
    Department = 'Department'
}

export enum FormatType {
    MiniOSR = 'MiniOSR',
    OSR = 'OSR',
    SMART = 'SMART'
}

export enum ServicesType {
    monobank = 'monobank',
    cardpay = 'cardpay',
    vending = 'vending',
    remittance = 'remittance',
    fitting = 'fitting',
    // The request to open api field is called 3mob.
    mob = 'mob',
    uplata = 'uplata',
    joint = 'joint'
}

export enum PublickType {
    public_description_ru = 'public_description_ru',
    public_description_ua = 'public_description_ua',
    public_description_en = 'public_description_en',
    navigation_ru = 'navigation_ru',
    navigation_ua = 'navigation_ua',
    navigation_en = 'navigation_en'
}