import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Car {
  'Year': string,
  'Make': string, 
  'Model': string, 
  'Styling': string, 
  'Acceleration': string, 
  'Handling': string, 
  'Fun Factor': string, 
  'Cool Factor': string, 
  'Weekend Score Total': string, 
  'Features': string, 
  'Comfort': string, 
  'Quality': string, 
  'Practicality': string, 
  'Value': string, 
  'Daily Score Total': string, 
  'Total Score': string, 
  'Video Link': string, 
  'Filmed At City': string, 
  'Filmed At Country': string, 
  'Vehicle Country': string, 
  'id': number;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient,
  ) { }

  // Remove Intro after cars are sorted
  carsSorted() {
    const intro = document.getElementById('remove-me');
    intro.classList.add('fade');
    setTimeout(() => {
      intro.remove();
    }, 600);
  }

  api = 'https://gist.githubusercontent.com/scottburton11/66a921c458f9500a773a6b0ac65006df/raw/629bfd6a3125e3428bd85a53231bd8018c407a65/Javascript%2520Working%2520With%2520Data%2520Challenge%2520data';
  getCars(): Observable<Car> {
    return this.http.get<Car>(this.api)
  }
}

