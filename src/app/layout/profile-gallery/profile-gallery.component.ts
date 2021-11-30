import {Component, OnInit} from '@angular/core';
import {PetService} from "../../service/pet.service";
import {Pet} from "../../model/pet";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = []
  selectedPet: Pet | undefined
  searchText: string = ''

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
  }

  petForm = this.formBuilder.group({
    id:'',
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity:''
  });


  ngOnInit() {
    this.getPets()
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets)
  }

  selectPet(pet: Pet): void {
    this.selectedPet = pet
  }

  onSubmit() {
    this.petService.addPets(this.petForm.value).subscribe(response => {
      this.getPets()
      alert("Your pet " + this.petForm.get("name")?.value + " has been submitted");
      this.petForm.reset();


    })

  }


}
