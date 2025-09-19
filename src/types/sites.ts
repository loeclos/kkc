export interface Site {
    id: string;
    title: string;
    url: string;
    description?: string;
    type?: string;
    tags?: string[];
}