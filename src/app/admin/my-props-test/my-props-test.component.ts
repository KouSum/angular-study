import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ManageHeroesComponent } from '../manage-heroes/manage-heroes.component';
import { TestValueService } from '../test-value.service';

@Component({
  selector: 'app-my-props-test',
  templateUrl: './my-props-test.component.html',
  styleUrls: ['./my-props-test.component.scss']
})
export class MyPropsTestComponent implements OnInit {

  @Input() testName = '';
  @Output() testEvent = new EventEmitter<string>();

  constructor(private testValue: TestValueService) { }

  firstExample = '';
  testValue1 = ''

  // 通过 ElementRef 我们就可以封装不同平台下视图层中的 native 元素
  @ViewChild('greet')
  greetDiv: ElementRef | undefined;

  ngOnInit(): void {
    // 调用父组件的方法
    this.testEvent.emit('nihao')
    this.testValue1 = this.testValue.myValue1
    console.log(this.testName)
  }

  buttonClick(e:MouseEvent,ref: HTMLAnchorElement, refComp: ManageHeroesComponent){
    console.log(this.greetDiv?.nativeElement)
    this.testValue.setValue('v2')
    this.testValue1 = this.testValue.myValue1
    // 调用其他子组件的方法
    refComp.clickMe()
    console.log(e.target, ref, refComp.ngOnInit)
  }

}
