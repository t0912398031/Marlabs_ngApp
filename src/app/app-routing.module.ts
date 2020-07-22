import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { MediaComponent } from './media/media.component';
import { InsightComponent } from './insight/insight.component';
import { InsightDetailComponent } from './insight-detail/insight-detail.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'} ,
  {path:'home', component:HomeComponent},
  {path:'insight', component:InsightComponent},
  {path:'insight/:id', component:InsightDetailComponent},
  {path:'videos', component:VideoCenterComponent},
  {path:'media', component:MediaComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
