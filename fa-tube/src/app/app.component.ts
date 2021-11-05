import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fa-tube';
  search='';
  searchData: any;
  resultVideos: any;
  pageEvent!: PageEvent;
  currentPage: any;
  pageLength: any;
  pageNumber: any;
  order: any;
  searchFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private youtubeService: YoutubeService, public dialog: MatDialog){

  }

  handleSubmit() {
    this.pageLength = pageLength;
    this.order = order;
    this.youtubeService.search(this.search, this.pageLength, this.order).subscribe(data => {
      this.searchData = data;
      this.resultVideos = this.searchData.items;
      console.log(this.searchData)
      this.pageNumber =  Math.floor(this.searchData.pageInfo.totalResults / this.pageLength)
    })
    this.currentPage = 0;
  }

  handlePaginationClick(event: any) {
    console.log(event)
    if(event.pageIndex > this.currentPage) {
      this.youtubeService.getPage(this.search, this.searchData.nextPageToken).subscribe(data => {
        this.searchData = data;
        this.resultVideos = this.searchData.items;
        console.log(this.searchData)
      })
    } else {
      this.youtubeService.getPage(this.search, this.searchData.prevPageToken).subscribe(data => {
        this.searchData = data;
        this.resultVideos = this.searchData.items;
        console.log(this.searchData)
      })
    }
    this.currentPage =  event.pageIndex;
  }

  openDialogVideo(id: any) {
    vidId= id
    const dialogRef = this.dialog.open(VideoDialog, {
      width: '50vw',
      height: '70vh'
    });
    console.log(dialogRef)
  }

  openDialogSettings() {
    this.dialog.open(SettingsDialog, {
      width: '300px',
      height: '400px'
    });
  }

  openDialogOrder() {
    this.dialog.open(OrderDialog, {
      width: '300px',
      height: '400px'
    });
  }
}

let vidId: any;
let pageLength = 10;
let order ='relevance';
@Component({
  selector: 'video-dialog',
  templateUrl: './dialog/video-dialog.html',
})
export class VideoDialog {
  id = vidId;
  vidUrl = `https://www.youtube.com/embed/${this.id}`
  constructor(
    public dialogRef: MatDialogRef<VideoDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'settings-dialog',
  templateUrl: './dialog/settings-dialog.html',
})
export class SettingsDialog {
  pageNumber: any;
  pageNumberFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(
    public dialogRef: MatDialogRef<SettingsDialog>) {}
  onNoClick(): void {
    this.dialogRef.close();
    pageLength = this.pageNumber;
  }

}

@Component({
  selector: 'order-dialog',
  templateUrl: './dialog/order-dialog.html',
  styleUrls: ['./app.component.scss']
})
export class OrderDialog {
  orders: any;
  constructor(
    public dialogRef: MatDialogRef<OrderDialog>) {
      this.orders = ['string', 'date', 'rating', 'relevance', 'videoCount', 'viewCount'];
    }
  onNoClick(event: any): void {
    var target = event.target || event.srcElement || event.currentTarget;
    order = target.innerHTML;
    this.dialogRef.close();
  }

}
