import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample {
  displayedColumns = ['league', 'player', 'paydate', 'paid', 'comp'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  league: string;
  player: string;
  paydate: string;
  paid: string;
  comp: string;
}

const ELEMENT_DATA: Element[] = [
  {
    league: 'Test League',
    player: 'Travis Kruse',
    paydate: '01/02/2024',
    paid: '1.00',
    comp: '0.20',
  },
  {
    league: 'Test League',
    player: 'Travis Kruse',
    paydate: '01/02/2024',
    paid: '1.00',
    comp: '0.20',
  },
  {
    league: 'Test League',
    player: 'Travis Kruse',
    paydate: '01/02/2024',
    paid: '1.00',
    comp: '0.20',
  },
  {
    league: 'Test League',
    player: 'Robert Sudduth',
    paydate: '01/02/2024',
    paid: '0.50',
    comp: '0.10',
  },
];

/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
