import {Component, OnInit} from '@angular/core';
import {NgbTabChangeEvent} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  tabs = [];
  constructor(private router: Router) {
    this.initializeTabs()
  }

  ngOnInit() {}

  onTabChange(event: NgbTabChangeEvent) {
    const tabId = this.tabs.find(tab => event.nextId === tab.id).id;
    return this.router.navigateByUrl(tabId)
  }

  private initializeTabs() {
    const tabTitles = ["Dashboard", "Cards"];
    tabTitles.forEach(tabTitle => {
      this.tabs.push({id: tabTitle.toLowerCase(), title: tabTitle})
    });
  }
}
