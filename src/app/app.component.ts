import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { readFile } from 'fs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  err:any= ''
  err2:any = ''
  pic: boolean = false
  vid: boolean = false

  imageUrl: string | undefined|boolean;

  select(event: any) {
    const file = event.target.files[0];
    if(file){
      let imgsize = file.size / (1024*1024);
    if ( imgsize <= 5) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        this.pic = true

      };
      reader.readAsDataURL(file);
    }
    }else{
      console.log(this.err2 = 'File Size Error');
      

    }
  }

  video(event: any) {
    const video = event.target.files[0];
    if (video) {
      let vidsize = video.size / (1024 * 1024);
    if (vidsize >= 10 && vidsize <= 50) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.video = event.target.result;
        this.vid = true
      }
      reader.readAsDataURL(video);
    } else {
      console.log(this.err= 'File Size Error');

    }
  }
  }
  title = 'four';

}
