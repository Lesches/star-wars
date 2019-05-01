import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../models/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
results: any;
query: string;
  constructor(private swapi: SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(pmap => {
      this.query = pmap.get('query');
      this.getResults();
    });
  }

  getResults(): void{
    this.swapi.searchPeople(this.query).subscribe(folks => {
console.log(folks);
this.results = folks;
    });
  }
}
