import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photosList = [];

  constructor() { }

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(res => console.log(this.photosList = res.slice(0,3)))
  }

}
