import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  id: any
  queryId: any;

  constructor(private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.queryParams)
    this.queryId = this.route.snapshot.queryParamMap.get('id')
  }

  back() {
    this.location.back()
  }
}
