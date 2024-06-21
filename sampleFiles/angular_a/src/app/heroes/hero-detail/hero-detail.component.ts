import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) {
  }


  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getHero(params.get('id')!)));
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // HeroList 컴포넌트에 하이라이트를 표시하기 위해 히어로의 id가 존재하면 전달합니다.
    // 'foo' 프로퍼티는 사용하지 않지만 이렇게 전달할 수도 있습니다.
    this.router.navigate(['/superheroes', {id: heroId, foo: 'foo'}]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/