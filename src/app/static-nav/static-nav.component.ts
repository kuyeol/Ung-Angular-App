import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AsyncPipe, ViewportScroller} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-static-nav',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatNavList,
    MatIcon,
    RouterOutlet,
    RouterLink,
    MatListItem,
    MatIconButton,
    AsyncPipe
  ],
  templateUrl: './static-nav.component.html',
  styleUrls: ['./static-nav.component.css'],
})
export class StaticNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private viewportScroller: ViewportScroller,
    private activatedRoute: ActivatedRoute
  ) {}

  scrollToAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  scroll() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.scrollToAnchor(fragment);
      } else {
        this.scrollToTop();
      }
    });
  }

}
