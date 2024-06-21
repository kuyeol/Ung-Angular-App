import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SelectivePreloadingStrategyService } from '../../selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sessionId!: Observable<string>;
  token!: Observable<string>;
  modules: string[] = [];

  constructor(
    private route: ActivatedRoute,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // 세션 ID가 있으면 가져옵니다.
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'));

    // 프래그먼트가 있으면 가져옵니다.
    this.token = this.route
      .fragment
      .pipe(map(fragment => fragment || 'None'));
  }
}
