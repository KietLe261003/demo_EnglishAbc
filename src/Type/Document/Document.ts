export interface Document{
    id: string,
    name: string,
    description: string,
    imagess: string,
    status: boolean,
    price?: number,
    isFree: boolean
}