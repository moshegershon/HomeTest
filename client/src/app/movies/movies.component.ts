import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input()
  movies: Movie[];
  user: User;
  constructor(private serviceService: ServiceService , private router: Router) {
  }
  ngOnInit() {
    this.getAllMovies()
  }
  GoToAdd(){
  this.router.navigate(['/add']);    
  }
  Exit(){
    this.router.navigate(['/login']);
  }
  getAllMovies(){
    this.serviceService.getall().subscribe((res: any) => {
      console.log(res);
      this.movies = res;
    });
  }
  delete(movie){
    this.serviceService.delete(this.movies).subscribe(res => {
      console.log(res);
      console.log(movie);
      this.getAllMovies();
    }
    )};
  
}
