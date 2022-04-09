import {AfterViewInit, Component, ContentChild, ContentChildren, Directive, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, TemplateRef} from '@angular/core';
import { ZippyContentDirective } from '../zippy-content.directive';



@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit, OnChanges, AfterViewInit {
  @Input() size = 0;
  @Output() sizeChange = new EventEmitter<number>()

  @ContentChildren(ZippyContentDirective) content!: QueryList<ZippyContentDirective>;

  @Input() 
  get propsA(): string{ return this._propsA }
  set propsA(propsA: string) {
    console.log(propsA)
    this._propsA = ( propsA && propsA.trim() ) || '<no propsA set>'
  }
  private _propsA: string = ''
  
  @Output() EventA = new EventEmitter<string>()
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.content)
  }

  // 监听 @Input 改变
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, propName)) {
        const element = changes[propName];
        console.log(element)
        
      }
    }
  }

  ngOnInit(): void {
  }


  setPropsA(){
    this.EventA.emit('wo hao')
  }

  expanded = true
  contentId= 'contentId'
}
