import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  [x: string]: any;

  movie: Movie
  constructor(private serviceService: ServiceService, private router: Router) {
    this.movie = {
      name: '',
      category: '',
      photo: '',
      imdb: ''
    }
  }

  ngOnInit() {

  }
  Add() {
    this.serviceService.AddMovie(this.movie);
    this.router.navigate(['/secure']);
  }


}
