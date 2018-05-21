import { Component, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from "lodash";

@Component({
    selector: 'pager',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnDestroy, OnChanges {

    @Input() allItems: any;

    @Input() pageSize: number = 50;

    @Input() currentPageIndex: number = 1;

    // @Output() onPageChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {

        for (let propName in changes) {

            if (propName == "allItems") {

                let currentValue = changes[propName].currentValue;
                let previousValue = changes[propName].previousValue;

                if (currentValue != undefined)
                    currentValue = JSON.stringify(changes[propName].currentValue);

                if (previousValue != undefined)
                    previousValue = JSON.stringify(changes[propName].previousValue);

                if (currentValue != previousValue)
                    this.setPage();
            }
        }
    }

    ngOnDestroy() {
        // this.onPageChange.unsubscribe();
    }

    setPage(pageIndex?: number) {

        pageIndex = pageIndex || this.currentPageIndex;
        
        if (pageIndex > 0 && pageIndex <= this.totalPages) {
            this.currentPageIndex = pageIndex;
        }
        else {
            this.currentPageIndex = 1;
        }

        let startIndex = (this.currentPageIndex - 1) * this.pageSize;

        let endIndex = startIndex + this.pageSize - 1;

        if (this.allItems) {

            let pageItems = this.allItems.slice(startIndex, endIndex + 1);

            // this.onPageChange.emit(pageItems);
        }
    }

    get totalPages(): number {

        if (this.allItems) {

            if (this.allItems.length <= this.pageSize)
                return 1;
            else
                return _.ceil(this.allItems.length / this.pageSize);
        }

        return 0;
    }

    get pageRange(): Array<number> {

        let pageRange: Array<number> = [];

        for (let pageIndex = 1; pageIndex <= this.totalPages; pageIndex++) {
            pageRange.push(pageIndex);
        }

        return pageRange;
    }
}