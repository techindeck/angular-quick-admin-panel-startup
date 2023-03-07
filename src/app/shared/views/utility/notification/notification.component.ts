import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  nfyData: object | any;


  constructor() {
    this.nfyData = [
      {
        causer: 'techindeck',
        eventType: 'Created',
        accession: '75432762',
        created_at: Date.now()

      },
      {
        causer: 'techindeck',
        eventType: 'Created',
        accession: 's453454',
        created_at: Date.now()

      },
      {
        causer: 'techindeck',
        eventType: 'Created',
        accession: '563453',
        created_at: Date.now()

      },
      {
        causer: 'techindeck',
        eventType: 'Updated',
        accession: 'sf453453',
        created_at: Date.now()

      }
    ];

  }

  ngOnInit(): void {

  }


}
