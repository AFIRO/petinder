export class Pet {
  name: string
  image: string
  kind : string
  profileText : string


  constructor(name: string, image: string, kind: string, profileText: string) {
    this.name = name;
    this.image = image;
    this.kind = kind;
    this.profileText = profileText;
  }
}
