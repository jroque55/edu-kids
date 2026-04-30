import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity/activity';
import { ActivityService } from '../services/activity-service';
import { ActivityModel } from '../activity/activity.model';

@Component({
  selector: 'app-info',
  imports: [Activity],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit {
  listaActividades: ActivityModel[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.listaActividades = this.activityService.getActivities();
  }
}
