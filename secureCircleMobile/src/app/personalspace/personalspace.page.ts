import { Component, OnInit } from '@angular/core';
import { SensorDataService } from '../sensor-data.service';


interface SensorData {
  latitude: number;
  longitude: number;
  heartRate: number;
  steps: number;
  timestamp: string;
}

@Component({
  selector: 'app-personalspace',
  templateUrl: './personalspace.page.html',
  styleUrls: ['./personalspace.page.scss'],
})
export class PersonalspacePage implements OnInit {
  sensorData: SensorData[] = [];
  latestSensor!: SensorData;
  constructor(private sensorDataService: SensorDataService) {}

  ngOnInit() {
    this.sensorDataService.getSensorData().subscribe(
      (data) => {
        this.sensorData = data.data as SensorData[];
        this.latestSensor = this.sensorData[0];
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
}
