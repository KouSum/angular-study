import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {debounceTime, fromEvent, Observable, of, Subject, switchMap, tap, throttleTime} from "rxjs";
import {delay, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  @Input() testName = '';
  @Output() testEvent = new EventEmitter<string>();
  constructor(private location: Location, private route: ActivatedRoute, private http: HttpClient) {
  }

  obs$: Observable<any> | undefined
  obs2$: Observable<any> | undefined
  of_ = new Subject<any[]>();
  of_2 = new Subject<any[]>();
  ngOnInit() {
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe(x => console.log(x));


    this.obs$ = this.of_.pipe(
      // 防抖
      debounceTime(500),
      switchMap((res:any[])=>this.http.get('api/post')),
      map((res)=>[JSON.stringify(res)])
    )

    this.obs2$ = this.of_2.pipe(
      // 节流
      throttleTime(500),
      switchMap((res:any[])=>of(res))
    )

  }
  clickTest(){
    this.of_.next([1,(new Date).getMilliseconds()])
  }
  clickTest2(){
    this.of_2.next([1,(new Date).getMilliseconds()])
  }
  back() {
    this.location.back()
  }

}
