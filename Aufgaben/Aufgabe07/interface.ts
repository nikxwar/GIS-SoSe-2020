namespace Aufgabe07 {
    export interface ArtikelBouldern {
        image: string;
        name: string;
        desc: string;
        price: number;
        category: string;
    }
    export let articles: ArtikelBouldern[] = [];

    export async function getArticlesFromJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonObj: string = await response.json();
        articles = JSON.parse(JSON.stringify(jsonObj));
        createArticles();
    }
}