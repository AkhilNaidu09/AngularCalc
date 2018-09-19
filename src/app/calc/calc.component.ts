import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html'
})

export class CalcComponent implements OnInit {
    current: any;
    @Output() myNewEvent = new EventEmitter();
    constructor() {
        this.current = '';
    }

    calculate(value) {
        if (value == '<x') {
            if (this.current.length > 0) {
                this.current = this.current.toString();
                this.current = this.current.slice(0, -1);
            }
            if (this.current == '0' || !this.current) {
                this.current = 0;
            }

        }
        else if (value == '√') {
            this.current = Math.sqrt(this.current);
        }
        else if (value === 'C') {
            this.current = '0';
        }
        else if (value == '=') {
            this.current = eval(this.current);
        }
        else {
            if (this.current == '0') {
                this.current = value;
            }
            else {
                this.current = this.current + value;
            }
        }
        this.myNewEvent.emit(this.current);
    }
    ngOnInit() {
    }

}
