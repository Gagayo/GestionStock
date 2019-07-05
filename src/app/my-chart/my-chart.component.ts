import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  @ViewChild('graphElement')

  private graphElement: ChartComponent;

  @Input()
  type: string = 'line';

  @Input()
  title: string ="titre";

  @Input()
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My dataset1",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My dataset2",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() { }

  ngOnInit() {
    //update
    //this.graphElement.chart.update();
    console.log(this.graphElement);
  }

}
