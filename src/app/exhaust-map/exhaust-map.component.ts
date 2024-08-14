import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent {

  private requestSubject = new Subject<{ type: string, data: any }>(); // Single Subject with request type

  constructor(private http: HttpClient) {
    // Handle the requests with different URLs
    this.requestSubject.pipe(
      exhaustMap(({ type, data }) => {
        let url: string;

        // Determine the URL based on the request type
        if (type === 'post1') {
          url = 'http://localhost:3002/api/v1/ministries';
        } else if (type === 'post2') {
          url = 'http://localhost:3003/api/v1/anotherEndpoint';
        } else {
          throw new Error('Unknown request type');
        }

        return this.http.post<any>(url, data);
      })
    ).subscribe(
      response => console.log('Response:', response),
      error => console.error('Error:', error)
    );
  }

  // Method to trigger the first POST request
  triggerPost1() {
    const requestData1 = { key1: 'value1' }; // Example data for POST 1
    this.requestSubject.next({ type: 'post1', data: requestData1 });
  }

  // Method to trigger the second POST request
  triggerPost2() {
    const requestData2 = { key2: 'value2' }; // Example data for POST 2
    this.requestSubject.next({ type: 'post2', data: requestData2 });
  }
}
