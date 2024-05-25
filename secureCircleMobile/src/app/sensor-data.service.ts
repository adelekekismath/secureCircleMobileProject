
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SensorData {
  latitude: number;
  longitude: number;
  heartRate: number;
  steps: number;
  timestamp: string;
}
interface ApiResponse {
  data: SensorData[];
}

@Injectable({
  providedIn: 'root',
})
export class SensorDataService {
  constructor(private http: HttpClient) {}

  getSensorData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('http://localhost:3000/api/sensor_data');
  }
}
