import { Component, OnInit } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [NzDividerModule, NzTypographyModule, NzSegmentedModule],
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleIndexChange(e: number): void {
    console.log(e);
  }
}
