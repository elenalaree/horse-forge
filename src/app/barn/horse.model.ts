export class Horse {
    public id?: string;
    public name: string;
    public height: string;
    public age: string;
    public weight: string;
    public breed: string;
    public color: string;
    public gender: string;
    public imageUrl: string;

    constructor(id: string,
        name: string,
        height: string,
        age: string,
        weight: string,
        breed: string,
        color: string,
        gender: string,
        imageUrl: string) {
            this.id= id;
            this.name= name;
            this.height= height;
            this.age= age;
            this.weight= weight;
            this.breed= breed;
            this.color= color;
            this.gender= gender;
            this.imageUrl= imageUrl;
    }
}