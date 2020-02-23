/*
  This file is automatically generated. Any changes will be overwritten.
  Modify products-by-supplier-id.component.ts instead.
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
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

import { NorthwindService } from '../northwind.service';
import { SecurityService } from '../security.service';

export class ProductsBySupplierIdGenerated implements AfterViewInit, OnInit, OnDestroy {
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
  getNorthwindProductsResult: any;
  getNorthwindProductsCount: any;
  product: any;
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
    this.northwind.getNorthwindProducts(`SupplierID eq ${this.parameters.SupplierID}`, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, `Supplier,Category`, null, this.grid0.allowPaging)
    .subscribe((result: any) => {
      this.getNorthwindProductsResult = result.value;

      this.getNorthwindProductsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;

      this.product = result.value[0];
    }, (result: any) => {

    });
  }

  grid0Add(event: any) {
    this.dialogService.open(AddProductComponent, { parameters: {}, title: `Add Product` });
  }

  grid0Delete(event: any) {
    this.northwind.deleteNorthwindProduct(event.ProductID)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `NorthwindProduct deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete NorthwindProduct` });
    });
  }

  grid0LoadData(event: any) {
    this.northwind.getNorthwindProducts(`${event.filter ? event.filter + ' and ' : ''}SupplierID eq ${this.parameters.SupplierID}`, event.top, event.skip, `${event.orderby}`, `Supplier,Category`, null, event.top != null && event.skip != null)
    .subscribe((result: any) => {
      this.getNorthwindProductsResult = result.value;

      this.getNorthwindProductsCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  grid0RowSelect(event: any) {
    this.dialogService.open(EditProductComponent, { parameters: {ProductID: event.ProductID}, title: `Edit Product` });
  }
}
