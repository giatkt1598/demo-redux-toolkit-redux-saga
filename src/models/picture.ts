export class Picture {
    id!: number;
    url!: string;
    webpurl!: string;
    x!: number;
    y!: number;

    constructor() {
        this.id = 0;
        this.url = "";
        this.webpurl = "";
        this.x = 0;
        this.y = 0;
    }
}