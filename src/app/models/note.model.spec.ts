import { Note } from './note.model';

describe('Note Model', () => {
    let note;

    beforeEach(() => {
        note = new Note();
    });

    it('should contain a title and content property', () => {
        expect(note.title).toBeDefined();
        expect(note.content).toBeDefined();
    });

    it('should default title to "Untitled" and content to "No content added..."', () => {
        expect(note.title).toBe("Untitled");
        expect(note.content).toBe("No content added...");
    });

    it('should take in title and content params in constructor', () => {
        let testData = ["Apple", "Milk"];
        note = new Note(...testData);
        expect(note.title).toBe(testData[0]);
        expect(note.content).toBe(testData[1]);    
    });

    it('should be able to change title and content after instantiating note', () => {
        let testData = ["Apple", "Milk"];
        note.title = testData[0];
        note.content = testData[1];
        expect(note.title).toBe(testData[0]);
        expect(note.content).toBe(testData[1]);    
    });
});