import {Component, OnInit} from '@angular/core';
import {Pet} from "../../model/pet";
import {ActivatedRoute} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {filter, first, mergeAll} from "rxjs";


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



  constructor(private route: ActivatedRoute, private petService: PetService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this._petName = this.route.snapshot.paramMap.get('name').toLowerCase()
    this.getPetFromBackEnd(this._petName)

  }


  getPetFromBackEnd(name: string): void {
    this.petService.getPets()
      .pipe(mergeAll())
      .pipe(filter((pet: Pet) => pet.name.toLowerCase().includes(name)))
      .pipe(first())
      .subscribe(input => this.pet = input)
  }
}
