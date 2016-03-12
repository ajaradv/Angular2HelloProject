import {Component, OnInit} from 'angular2/core';

@Component({
    template: `
        <h2>HEROES</h2>
        <ul class="items">
            <li *ngFor="#hero of heroes"
                (click)="onSelect(hero)">
                <span class="badge">{{ hero.id }}</span>
            </li>
        </ul>
    `
})


export class HeroListComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private _service: HeroService,
        private _router: Router
    ) {}


    onSelect(hero: Hero) {
        this._router.navigate( ['HeroDetail', {id: hero.id}]);
    }

}