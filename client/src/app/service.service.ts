import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseApi: String = 'http://localhost:6789/api';

  
  private movie: Movie;
  constructor(public httpClient: HttpClient) { }
  
  AddMovie(m: Movie) {
    return this.httpClient.post<Movie>(this.baseApi+'/add', m).subscribe(res=>{
    });
  }

  getall(): Observable<Movie> {
    return this.httpClient.get<Movie>('http://localhost:6789/api/secure');
  }

  delete(m) : Observable<any>{
    return this.httpClient.delete('http://localhost:6789/api/secure/'+ m.name);
  }

}

