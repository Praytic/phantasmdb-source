import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STAT_DESCRIPTIONS } from '../../../definitions/stat';

@Component({
  selector: 'app-generic-information-stat-list',
  templateUrl: './generic-information-stat-list.component.html',
  styleUrls: ['./generic-information-stat-list.component.css']
})
export class GenericInformationStatListComponent implements OnInit, AfterViewInit {
  readonly STAT_DESCRIPTIONS = STAT_DESCRIPTIONS;
  readonly STATS_COUNT = Object.keys(STAT_DESCRIPTIONS).length;
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit() {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
