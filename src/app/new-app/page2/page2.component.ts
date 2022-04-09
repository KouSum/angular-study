import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
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
  show= false
  id: any
  queryId: any;
  thenBlock: TemplateRef<any>|null = null;
  
  constructor(private location: Location, private route: ActivatedRoute) {
  }
  
  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>|null = null;
  @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;
  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
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
