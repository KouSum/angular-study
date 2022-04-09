import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, from, fromEvent, map, Observable, of, retry, Subject, Subscription, switchMap, tap } from 'rxjs';
import { HttpService } from '../http.service';

export interface Post {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent implements OnInit, AfterViewInit {

  id = 1
  ofData$ = of([1, 2, 3]);
  fromData$!: Observable<Post[]>
  constructor( private httpService: HttpService) { }

  ngOnInit(): void {
    // 带了拦截器
    this.httpService.request('api/heroes').subscribe(res=>{
      console.log(res)
    })

    this.updateSource()


    this.subData$ = this.sub.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(res => this.retData())
    )
  }

  retData() {
    this.id++
    return from(fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`).then(res => res.json())).pipe(
      map((res: any[]) => res.slice(0, 6)),
      retry(3),
      catchError((error) => {
        return of([])
      }),//错误处理
    )
  }
  updateSource() {
    this.fromData$ = this.retData()
  }
  /***
   * subscribe
   */
  getData() {
    let that = this
    this.fromData$.subscribe(
      {
        next(response) { console.log(response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
      }
    )
  }


  /***
   * fromEvent
   */
  @ViewChild('clickEventButton') clickEventButton!: ElementRef
  ngAfterViewInit(): void {
    if (this.clickEventButton) {
      fromEvent(this.clickEventButton.nativeElement, 'click').pipe(
        debounceTime(300),// 防抖
      ).subscribe((e) => {
        console.log(e)
      })
    }
  }

  /***
   * getDataSubject
   */
  sub = new Subject()
  subData$!: Observable<Post[]>
  getDataSubject() {
    return this.sub.next({})
  }
  canSubscribe: Subscription | undefined
  subscribe() {
    this.canSubscribe = this.subData$.subscribe(res => {
      console.log(res)
    })
  }
  unSubscribe(){
    this.canSubscribe?.unsubscribe()
  }

}
