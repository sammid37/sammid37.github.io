export interface ArtWork {
    id: string;
    src: string;
    title: string;
    description: string;
    externalUrl?: string;
    span?: { col?: number; row?: number };
}

export const artworks: ArtWork[] = [
    {
        id: "arte-01",
        src: "https://cdna.artstation.com/p/assets/images/images/056/648/768/large/samantha-medeiros-raposa-pngretoutch.jpg?1669765096",
        title: "Foxes and \"Forget-me-not\"",
        description: "Originally my second drawing for Huevember was going to be a happy girl with a fox, all colored in shades of pink. But it ended up becoming something a little more symbolic and without much planning, just feelings that hovered around me during the two days I spent working on this illustration. I've been thinking about faraway, thoughtful looks, foxes and forget-me-not flowers. For me, this work made me feel better, I hope to be able to create others following these themes of people, looks, animals and the language of flowers.",
        externalUrl: "https://www.artstation.com/artwork/mzX3Ne",
        span: { col: 2, row: 2 },
    },
    {
        id: "arte-02",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },
    },
    {
        id: "arte-03",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },
    },
    {
        id: "arte-04",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },

    },
    {
        id: "arte-05",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },

    },
    {
        id: "arte-06",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },
    },
    {
        id: "arte-07",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },
    },
    {
        id: "arte-08",
        src: "profile/sammid_doodle.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 2, row: 3 },
    },
    {
        id: "arte-09",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },
    },
    {
        id: "arte-10",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 1 },
    },
    {
        id: "arte-11",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 2, row: 1 },
    },
    {
        id: "arte-12",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 3, row: 4 },
    },
    {
        id: "arte-13",
        src: "art/dudu_art_hat.png",
        title: "Em breve",
        description: "Em breve",
        span: { col: 1, row: 2 },
    }
];
