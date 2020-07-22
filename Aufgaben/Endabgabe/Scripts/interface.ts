namespace Endabgabe {
    export interface Articles {
        image: string;
        info: string;
        price: number;
        category: string;

    }

    export let articles: Articles[] = [];

    export async function getArticlesFromJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonObj: string = await response.json();
        articles = JSON.parse(JSON.stringify(jsonObj));
        createArticles();

    }
}