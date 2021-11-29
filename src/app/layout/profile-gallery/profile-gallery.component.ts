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
  pets: Pet[]
  selectedPet: Pet | undefined
  searchText: string;

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
    this.pets = []
    this.searchText = ''
  }

  petForm = this.formBuilder.group({
    name: '',
    image: '',
    kind: '',
    profileText: ''
  });


  ngOnInit(): void {
    this.getPets()
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets)
  }

  selectPet(pet: Pet): void {
    this.selectedPet = pet
  }

  onSubmit(): void {
    let newPet = new Pet(this.petForm.get("name")?.value, this.petForm.get("image")?.value, this.petForm.get("kind")?.value, this.petForm.get("profileText")?.value)

    alert("Your pet " + this.petForm.get("name")?.value + "has been submitted")
    this.petForm.reset()

  }


}
