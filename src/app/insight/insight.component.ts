import { Component, OnInit } from '@angular/core';
import { InsightService } from '../insight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {

  
  insights:any=[];
  videoId:any;
  insight

  constructor(
    private _insightService:InsightService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this._insightService.getInsights()
      .subscribe(resInsight => {
        for(const d of (resInsight as any)){
          this.insights.push(d);
        }
      })
    
      
  }

  onViewDetails(insight){
    // console.log(insight)
    this._insightService.setCurrentInsight(insight)
    // console.log(id)
    // this.router.navigate(['/gameinfo', name]);
   
    this.router.navigate(['insight/' + insight._id]);
  
  }


}
