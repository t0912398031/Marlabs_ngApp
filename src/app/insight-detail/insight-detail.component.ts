import { Component, OnInit, Input } from '@angular/core';
import { Insight } from '../../../server';
import { Router } from '@angular/router';
import { InsightService } from '../insight.service';

@Component({
  selector: 'app-insight-detail',
  templateUrl: './insight-detail.component.html',
  styleUrls: ['./insight-detail.component.css']
})
export class InsightDetailComponent implements OnInit {
  // @Input() insight:Insight
  insight: Insight

  constructor(
    private _insightService:InsightService,
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
    this.insight = this._insightService.getCurrentInsight()
  }

}
