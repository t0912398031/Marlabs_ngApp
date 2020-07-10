import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  medias:any=[];
  videoId:any;

  constructor(private _mediaService:MediaService) { }

  ngOnInit(): void {
    this._mediaService.getMedias()
      .subscribe(resMedia => {
        for(const d of (resMedia as any)){
          this.medias.push(d);
        }
      })
    
      
  }

  youTubeGetID(media){
    var url = media.url
    var ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
    console.log(ID)
    console.log(media.title)
    
      return this.thumbnail(ID);
  }

  thumbnail(id){
    // return "http://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"
    return "https://img.youtube.com/vi/" + id + "/hqdefault.jpg"
  }
}
