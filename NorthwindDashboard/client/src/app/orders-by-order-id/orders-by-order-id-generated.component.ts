/*
  This file is automatically generated. Any changes will be overwritten.
  Modify orders-by-order-id.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { GridComponent } from '@radzen/angular/dist/grid';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { AddOrderComponent } from '../add-order/add-order.component';
import { EditOrderComponent } from '../edit-order/edit-order.component';

import { NorthwindService } from '../northwind.service';
import { SecurityService } from '../security.service';

export class OrdersByOrderIdGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  northwind: NorthwindService;

  security: SecurityService;
  getNorthwindOrdersResult: any;
  getNorthwindOrdersCount: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.northwind = this.injector.get(NorthwindService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.northwind.getNorthwindOrders(`OrderID eq ${this.parameters.OrderID}`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, `Customer,Employee`, null, this.grid0.allowPaging)
    .subscribe((result: any) => {
      this.getNorthwindOrdersResult = result.value;

      this.getNorthwindOrdersCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0Add(event: any) {
    this.dialogService.open(AddOrderComponent, { parameters: {}, title: `Add Order` });
  }

  grid0Delete(event: any) {
    this.northwind.deleteNorthwindOrder(event.OrderID)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `NorthwindOrder deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete NorthwindOrder` });
    });
  }

  grid0LoadData(event: any) {
    this.northwind.getNorthwindOrders(`${event.filter ? event.filter + ' and ' : ''}OrderID eq ${this.parameters.OrderID}`, event.top, event.skip, `${event.orderby}`, `Customer,Employee`, null, event.top != null && event.skip != null)
    .subscribe((result: any) => {
      this.getNorthwindOrdersResult = result.value;

      this.getNorthwindOrdersCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditOrderComponent, { parameters: {OrderID: event.OrderID}, title: `Edit Order` });
  }

  customersButtonClick(event: any, data: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['customers-by-customer-id', data.CustomerID]);
  }

  button0Click(event: any, data: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.router.navigate(['order-details-by-order-id', data.OrderID]);
  }
}
