export class Pet {
  id: number
  name: string
  kind: string
  image: string
  profileText: string
  popularity: number


  constructor(id: number, name: string, kind: string, image: string, profileText: string, popularity: number) {
    this.id = id;
    this.name = name;
    this.kind = kind;
    this.image = image;
    this.profileText = profileText;
    this.popularity = popularity;
  }
}
