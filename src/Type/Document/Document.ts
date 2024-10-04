export interface Document{
    id: string,
    nameDocument: string,
    description: string,
    imagess: string,
    status: boolean,
    price?: number,
    isFree: boolean,
    content?: string
}