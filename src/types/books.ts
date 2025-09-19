export interface Books {
    id: string;
    title: string;
    status: string;
    price: string;
    date: string;
    articles?: { id:string,  title: string; url: string, date: string }[];
    forums?: { id:string,  name: string; url: string }[];
    links?: { id:string,  title: string; url: string }[];
    image?: string;
    amazon?: string;
    ebay?: string;
    hook?: string;
    description?: string;
}