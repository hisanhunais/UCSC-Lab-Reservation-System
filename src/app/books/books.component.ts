import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

 

  books: Array<Book>;
  
    //selectedVideo: Video;
    //private hidenewVideo: boolean = true;
  
    constructor(private _bookService: BookService) { }
  
    ngOnInit() {
      this._bookService.getBooks()
        .subscribe(resBookData => this.books = resBookData);
    }
  
    /*onSelectVideo(video:any){
      this.selectedVideo = video;
      this.hidenewVideo = true;
      console.log(this.selectedVideo);
    }
  
    onSubmitAddVideo(video: Video){
      this._videoService.addVideo(video)
        .subscribe(resNewVideo => {
          this.videos.push(resNewVideo);
          this.hidenewVideo = true;
          this.selectedVideo = resNewVideo;
        });
    }
  
    onUpdateVideoEvent(video: any){
      this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo => video = resUpdatedVideo);
      this.selectedVideo = null;
    }
  
    onDeleteVideoEvent(video: any){
      let videoArray = this.videos;
      this._videoService.deleteVideo(video)
        .subscribe(resDeletedVideo => {
          for(let i=0; i < videoArray.length; i++)
          {
            if(videoArray[i]._id === video._id)
            {
              videoArray.splice(i,1);
            }
          }
        });
      this.selectedVideo = null;
    }
  
    newVideo(){
      this.hidenewVideo = false;
    }*/

}
