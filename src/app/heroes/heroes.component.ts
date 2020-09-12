import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {Form, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
