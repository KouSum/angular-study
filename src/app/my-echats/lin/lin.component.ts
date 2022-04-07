import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import echarts, {ECOption} from "../../../echarts";

@Component({
  selector: 'app-lin',
  templateUrl: './lin.component.html',
  styleUrls: ['./lin.component.scss']
})
export class LinComponent implements OnInit {
  myChart: echarts.ECharts | undefined
  constructor() {
  }

  @ViewChild('myDom') myDomDiv: ElementRef | undefined;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(this.myDomDiv?.nativeElement);
    // 绘制图表
    const option: ECOption = {
      tooltip:{

      },
      legend: {
        top: 20,
        right: 20,
        textStyle: {
          color: "#3196fa",
          lineHeight: 17,
          fontSize: 16
        }
      },
      grid:{
        top: 70,
        bottom: 50,
        left: 35,
        right: 35,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
          color: '#3196fa',
          fontSize: 16
        }

      },
      yAxis: {
        type: 'value',
        splitLine:{
          show:false,
        },
        axisLabel:{
          show:false,
        }
      },
      dataset: {
        // 提供一份数据。
        source: [
          ['product', '2015', '2016'],
          ['1月', 0, 35],
          ['2月', 10,24],
          ['3月', 40, 30],
          ['4月', 22, 10],
          ['5月', 22, 10],
          ['6月', 22, 10],
          ['7月', 22, 10],
          ['8月', 22, 10],
          ['9月', 22, 10],
          ['10月', 22, 10],
          ['11月', 22, 10],
          ['12月', 22, 10],
        ]
      },
      color: ["#FFA70F", "#0081FF"],
      series: [{
        type: 'line',
        lineStyle: {
          width: 4,
        },
        symbolSize: 14,
        smooth: true,
      },{
        type: 'line',
        lineStyle: {
          width: 4,
        },
        symbolSize: 14,
        smooth: true,
      },]
    };
    this.myChart.setOption(option);
  }

  static getNum(){
    return Math.ceil(Math.random()*100)
  }

  reload(){
    this.myChart?.setOption({
      series: [
        {
          data: [LinComponent.getNum(), LinComponent.getNum(), LinComponent.getNum(), LinComponent.getNum(), LinComponent.getNum(), LinComponent.getNum()]
        }
      ]
    })
  }


  setNewOption(){
  }

  ngOnDestroy():void{
    this.myChart?.clear()
  }
}
