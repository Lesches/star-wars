import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchFormCtrl = new FormControl(null, {validators: [
  Validators.required,
   Validators.minLength(3)
  ]});
  constructor(public router: Router) { }
  onSubmit(): void {
    if (this.searchFormCtrl.valid) {
      this.router.navigate(
        ['/results', this.searchFormCtrl.value]
      )
    }
  }
  ngOnInit() {
  }



}
