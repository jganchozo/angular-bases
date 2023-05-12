import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3>Counter: {{counter}}</h3>

    <button class="btn btn-primary" (click)="increaseBy(+1)">+1</button>
    <button class="btn btn-primary ms-2" (click)="reset()">Reset</button>
    <button class="btn btn-primary ms-2" (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {
    constructor() { }

    ngOnInit() { }

    public counter: number = 10;
    public initialValue: number = 10;

    increaseBy(value: number): void {

        this.counter += value;
    }

    reset(): void {

        this.counter = this.initialValue;
    }
}