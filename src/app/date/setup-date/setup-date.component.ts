import {Component, OnInit} from '@angular/core';
import {Pet} from "../../model/pet";
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";


@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {
  set petName(value: string) {
    this._petName = value;
  }
  sendTextForm: any;
  public pet: Pet | undefined
  private _petName: string = ''
  private petList : Pet[] = []



  constructor(private route: ActivatedRoute, private petService: PetService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this._petName = this.route.snapshot.paramMap.get('name').toLowerCase()
    this.pet = this.getPetFromBackEnd(this._petName)

  }


  getPetFromBackEnd(name: string): Pet {
    this.petService.getPets().subscribe(pets => this.petList = pets)
    console.log(this.petList)
    this.petList = this.petList.filter((pet : Pet) => pet.name.toLowerCase().includes(name))
    return this.petList[0]
  }
}
