export type Activity = {
    title: string;
    date: string;
    time: string;
    description: string;
    images?: Image[];
    link?: Link;
}

type Image = {
    path: string;
    label: string;
}

type Link = {
    url: string;
    label: string;
}