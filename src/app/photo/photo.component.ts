import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  id = null;
  photoId = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // let id = this.paramMap.get('id');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log (this.id);

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(res => console.log(this.photosId = res.find(photo => photo.id ==this.id)))
  }

}
