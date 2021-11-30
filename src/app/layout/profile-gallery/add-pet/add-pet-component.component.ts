import { Component, OnInit } from '@angular/core';
import {PetService} from "../../../service/pet.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-pet-component',
  templateUrl: './add-pet-component.html',
  styleUrls: ['./.add-pet-component.css']
})
export class AddPetComponentComponent implements OnInit {

  petForm = this.formBuilder.group({
    id:'',
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity:''
  });

  constructor(private petService: PetService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.petService.addPets(this.petForm.value).subscribe(() => {
      alert("Your pet " + this.petForm.get("name")?.value + " has been submitted");
      this.petForm.reset();


    })

  }

}


