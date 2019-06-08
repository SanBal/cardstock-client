import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  tabs = [];
  constructor() {
    this.initializeTabs()
  }

  ngOnInit() {}

  private initializeTabs() {
    const tabTitles = ["Dashboard", "Cards"];
    tabTitles.forEach(tabTitle => {
      this.tabs.push({id: tabTitle.toLowerCase(), title: tabTitle})
    });
  }
}
