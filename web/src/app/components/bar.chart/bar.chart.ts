import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'bar-chart',
    templateUrl: './templates/bar.chart.html',
    styleUrls: ['./styles/bar.chart.sass']
})

export class BarChart {
    readonly SVG_PADDING: number = 4;

    private _data: any[] = [];
    private width: number;
    private height: number;
    private _maxValue: number;

    @ViewChild("container")
    private container: ElementRef;

    @Input()
    name: string;

    @Input()
    color: string;

    @Input()
    value: number;

    @Input()
    set maxValue(value: number) {
        this._maxValue = value;
        this.draw();
    }

    get maxValue(): number {
        return this._maxValue;
    }

    @Input()
    set data(value: any[]) {
        this._data = value;
        this.draw();
    }

    get data(): any[] {
        return this._data;
    }


    private draw(): void {
        d3.select(this.container.nativeElement).select("*").remove();


        if (!this.data || this.data.length < 1 || !this.maxValue) return;

        this.height = this.container.nativeElement.offsetHeight;
        this.width = this.container.nativeElement.offsetWidth;

        let svg: any = d3.select(this.container.nativeElement)
            .append("svg")
            .attr("viewBox", "0 0 " + this.width + " " + this.height);

        let xDomain: any = d3.scaleLinear()
            .domain([0, this.maxValue])
            .range([this.SVG_PADDING, this.width - this.SVG_PADDING]);

        svg.append("rect")
            .attr("fill", this.color)
            .attr("x", xDomain(0))
            .attr("y", this.SVG_PADDING)
            .attr("width", xDomain(this.data[this.value]) - xDomain(0))
            .attr("height", this.height - (this.SVG_PADDING * 2));
    }

}