import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.canMatch === undefined && route.data?.['preload'] && route.path != null) {
      // 사전로딩할 모듈의 라우팅 규칙을 배열에 추가합니다.
      this.preloadedModules.push(route.path);

      // 라우팅 규칙을 확인하기 위해 콘솔에 출력합니다.
      console.log('Preloaded: ' + route.path);

      return load();
    } else {
      return of(null);
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/