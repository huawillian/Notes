export class Note {
    public title: string;
    public content: string;

    constructor(title: string = "Untitled", content:string = "No content added...") {
        this.title = title;
        this.content = content;
    }
}