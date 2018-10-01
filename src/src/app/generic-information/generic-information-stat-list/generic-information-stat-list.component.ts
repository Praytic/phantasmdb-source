import { Component, OnInit } from '@angular/core';
import { STAT_DESCRIPTIONS, EStat } from '../../../definitions/stat';

@Component({
  selector: 'app-generic-information-stat-list',
  templateUrl: './generic-information-stat-list.component.html',
  styleUrls: ['./generic-information-stat-list.component.css']
})
export class GenericInformationStatListComponent implements OnInit {
  readonly STAT_DESCRIPTIONS = STAT_DESCRIPTIONS;
  readonly STATS_COUNT = Object.keys(STAT_DESCRIPTIONS).length;
  constructor() { }

  ngOnInit() {
  }

}
