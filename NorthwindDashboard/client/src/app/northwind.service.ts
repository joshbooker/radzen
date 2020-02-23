import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { ConfigService } from './config.service';
import { ODataClient } from './odata-client';
import * as models from './northwind.model';

@Injectable()
export class NorthwindService {
  odata: ODataClient;
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('northwind');
    this.odata = new ODataClient(this.http, this.basePath, { legacy: false, withCredentials: true });
  }

  getCategories(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/Categories`, { filter, top, skip, orderby, expand, select, count });
  }

  createCategory(category: any) : Observable<any> {
    return this.odata.post(`/Categories`, category, {  }, []);
  }

  getCategoryById(categoryId: number) : Observable<any> {
    return this.odata.getById(`/Categories(${categoryId})`, {  });
  }

  deleteCategory(categoryId: number) : Observable<any> {
    return this.odata.delete(`/Categories(${categoryId})`, item => !(item.CategoryID == categoryId));
  }

  updateCategory(categoryId: number, category: any) : Observable<any> {
    return this.odata.patch(`/Categories(${categoryId})`, category, item => item.CategoryID == categoryId, {  }, []);
  }

  getCustomers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/Customers`, { filter, top, skip, orderby, expand, select, count });
  }

  createCustomer(customer: any) : Observable<any> {
    return this.odata.post(`/Customers`, customer, {  }, []);
  }

  getCustomerById(customerId: string) : Observable<any> {
    return this.odata.getById(`/Customers('${encodeURIComponent(customerId)}')`, {  });
  }

  deleteCustomer(customerId: string) : Observable<any> {
    return this.odata.delete(`/Customers('${encodeURIComponent(customerId)}')`, item => !(item.CustomerID == customerId));
  }

  updateCustomer(customerId: string, customer: any) : Observable<any> {
    return this.odata.patch(`/Customers('${encodeURIComponent(customerId)}')`, customer, item => item.CustomerID == customerId, {  }, []);
  }

  getCustomerCustomerDemos(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/CustomerCustomerDemos`, { filter, top, skip, orderby, expand, select, count });
  }

  createCustomerCustomerDemo(customerCustomerDemo: any) : Observable<any> {
    return this.odata.post(`/CustomerCustomerDemos`, customerCustomerDemo, {  }, ['Customer', 'CustomerDemographic']);
  }

  getCustomerCustomerDemoById(customerId: string, customerTypeId: string) : Observable<any> {
    return this.odata.getById(`/CustomerCustomerDemos('${encodeURIComponent(customerId)}','${encodeURIComponent(customerTypeId)}')`, {  });
  }

  deleteCustomerCustomerDemo(customerId: string, customerTypeId: string) : Observable<any> {
    return this.odata.delete(`/CustomerCustomerDemos('${encodeURIComponent(customerId)}','${encodeURIComponent(customerTypeId)}')`, item => !(item.CustomerID == customerId && item.CustomerTypeID == customerTypeId));
  }

  updateCustomerCustomerDemo(customerId: string, customerTypeId: string, customerCustomerDemo: any) : Observable<any> {
    return this.odata.patch(`/CustomerCustomerDemos('${encodeURIComponent(customerId)}','${encodeURIComponent(customerTypeId)}')`, customerCustomerDemo, item => item.CustomerID == customerId && item.CustomerTypeID == customerTypeId, {  }, ['Customer','CustomerDemographic']);
  }

  getCustomerDemographics(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/CustomerDemographics`, { filter, top, skip, orderby, expand, select, count });
  }

  createCustomerDemographic(customerDemographic: any) : Observable<any> {
    return this.odata.post(`/CustomerDemographics`, customerDemographic, {  }, []);
  }

  getCustomerDemographicById(customerTypeId: string) : Observable<any> {
    return this.odata.getById(`/CustomerDemographics('${encodeURIComponent(customerTypeId)}')`, {  });
  }

  deleteCustomerDemographic(customerTypeId: string) : Observable<any> {
    return this.odata.delete(`/CustomerDemographics('${encodeURIComponent(customerTypeId)}')`, item => !(item.CustomerTypeID == customerTypeId));
  }

  updateCustomerDemographic(customerTypeId: string, customerDemographic: any) : Observable<any> {
    return this.odata.patch(`/CustomerDemographics('${encodeURIComponent(customerTypeId)}')`, customerDemographic, item => item.CustomerTypeID == customerTypeId, {  }, []);
  }

  getEmployees(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/Employees`, { filter, top, skip, orderby, expand, select, count });
  }

  createEmployee(employee: any) : Observable<any> {
    return this.odata.post(`/Employees`, employee, {  }, []);
  }

  getEmployeeById(employeeId: number) : Observable<any> {
    return this.odata.getById(`/Employees(${employeeId})`, {  });
  }

  deleteEmployee(employeeId: number) : Observable<any> {
    return this.odata.delete(`/Employees(${employeeId})`, item => !(item.EmployeeID == employeeId));
  }

  updateEmployee(employeeId: number, employee: any) : Observable<any> {
    return this.odata.patch(`/Employees(${employeeId})`, employee, item => item.EmployeeID == employeeId, {  }, []);
  }

  getEmployeeTerritories(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/EmployeeTerritories`, { filter, top, skip, orderby, expand, select, count });
  }

  createEmployeeTerritory(employeeTerritory: any) : Observable<any> {
    return this.odata.post(`/EmployeeTerritories`, employeeTerritory, {  }, ['Employee', 'Territory']);
  }

  getEmployeeTerritoryById(employeeId: number, territoryId: string) : Observable<any> {
    return this.odata.getById(`/EmployeeTerritories(${employeeId},'${encodeURIComponent(territoryId)}')`, {  });
  }

  deleteEmployeeTerritory(employeeId: number, territoryId: string) : Observable<any> {
    return this.odata.delete(`/EmployeeTerritories(${employeeId},'${encodeURIComponent(territoryId)}')`, item => !(item.EmployeeID == employeeId && item.TerritoryID == territoryId));
  }

  updateEmployeeTerritory(employeeId: number, territoryId: string, employeeTerritory: any) : Observable<any> {
    return this.odata.patch(`/EmployeeTerritories(${employeeId},'${encodeURIComponent(territoryId)}')`, employeeTerritory, item => item.EmployeeID == employeeId && item.TerritoryID == territoryId, {  }, ['Employee','Territory']);
  }

  getNorthwindOrders(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/NorthwindOrders`, { filter, top, skip, orderby, expand, select, count });
  }

  createNorthwindOrder(northwindOrder: any) : Observable<any> {
    return this.odata.post(`/NorthwindOrders`, northwindOrder, {  }, ['Customer', 'Employee']);
  }

  getNorthwindOrderById(orderId: number) : Observable<any> {
    return this.odata.getById(`/NorthwindOrders(${orderId})`, {  });
  }

  deleteNorthwindOrder(orderId: number) : Observable<any> {
    return this.odata.delete(`/NorthwindOrders(${orderId})`, item => !(item.OrderID == orderId));
  }

  updateNorthwindOrder(orderId: number, northwindOrder: any) : Observable<any> {
    return this.odata.patch(`/NorthwindOrders(${orderId})`, northwindOrder, item => item.OrderID == orderId, {  }, ['Customer','Employee']);
  }

  getNorthwindOrderDetails(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/NorthwindOrderDetails`, { filter, top, skip, orderby, expand, select, count });
  }

  createNorthwindOrderDetail(northwindOrderDetail: any) : Observable<any> {
    return this.odata.post(`/NorthwindOrderDetails`, northwindOrderDetail, {  }, ['NorthwindOrder', 'NorthwindProduct']);
  }

  getNorthwindOrderDetailById(orderId: number, productId: number) : Observable<any> {
    return this.odata.getById(`/NorthwindOrderDetails(${orderId},${productId})`, {  });
  }

  deleteNorthwindOrderDetail(orderId: number, productId: number) : Observable<any> {
    return this.odata.delete(`/NorthwindOrderDetails(${orderId},${productId})`, item => !(item.OrderID == orderId && item.ProductID == productId));
  }

  updateNorthwindOrderDetail(orderId: number, productId: number, northwindOrderDetail: any) : Observable<any> {
    return this.odata.patch(`/NorthwindOrderDetails(${orderId},${productId})`, northwindOrderDetail, item => item.OrderID == orderId && item.ProductID == productId, {  }, ['NorthwindOrder','NorthwindProduct']);
  }

  getNorthwindProducts(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/NorthwindProducts`, { filter, top, skip, orderby, expand, select, count });
  }

  createNorthwindProduct(northwindProduct: any) : Observable<any> {
    return this.odata.post(`/NorthwindProducts`, northwindProduct, {  }, ['Supplier', 'Category']);
  }

  getNorthwindProductById(productId: number) : Observable<any> {
    return this.odata.getById(`/NorthwindProducts(${productId})`, {  });
  }

  deleteNorthwindProduct(productId: number) : Observable<any> {
    return this.odata.delete(`/NorthwindProducts(${productId})`, item => !(item.ProductID == productId));
  }

  updateNorthwindProduct(productId: number, northwindProduct: any) : Observable<any> {
    return this.odata.patch(`/NorthwindProducts(${productId})`, northwindProduct, item => item.ProductID == productId, {  }, ['Supplier','Category']);
  }

  getRegions(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/Regions`, { filter, top, skip, orderby, expand, select, count });
  }

  createRegion(region: any) : Observable<any> {
    return this.odata.post(`/Regions`, region, {  }, []);
  }

  getRegionById(regionId: number) : Observable<any> {
    return this.odata.getById(`/Regions(${regionId})`, {  });
  }

  deleteRegion(regionId: number) : Observable<any> {
    return this.odata.delete(`/Regions(${regionId})`, item => !(item.RegionID == regionId));
  }

  updateRegion(regionId: number, region: any) : Observable<any> {
    return this.odata.patch(`/Regions(${regionId})`, region, item => item.RegionID == regionId, {  }, []);
  }

  getSuppliers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/Suppliers`, { filter, top, skip, orderby, expand, select, count });
  }

  createSupplier(supplier: any) : Observable<any> {
    return this.odata.post(`/Suppliers`, supplier, {  }, []);
  }

  getSupplierById(supplierId: number) : Observable<any> {
    return this.odata.getById(`/Suppliers(${supplierId})`, {  });
  }

  deleteSupplier(supplierId: number) : Observable<any> {
    return this.odata.delete(`/Suppliers(${supplierId})`, item => !(item.SupplierID == supplierId));
  }

  updateSupplier(supplierId: number, supplier: any) : Observable<any> {
    return this.odata.patch(`/Suppliers(${supplierId})`, supplier, item => item.SupplierID == supplierId, {  }, []);
  }

  getTerritories(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/Territories`, { filter, top, skip, orderby, expand, select, count });
  }

  createTerritory(territory: any) : Observable<any> {
    return this.odata.post(`/Territories`, territory, {  }, ['Region']);
  }

  getTerritoryById(territoryId: string) : Observable<any> {
    return this.odata.getById(`/Territories('${encodeURIComponent(territoryId)}')`, {  });
  }

  deleteTerritory(territoryId: string) : Observable<any> {
    return this.odata.delete(`/Territories('${encodeURIComponent(territoryId)}')`, item => !(item.TerritoryID == territoryId));
  }

  updateTerritory(territoryId: string, territory: any) : Observable<any> {
    return this.odata.patch(`/Territories('${encodeURIComponent(territoryId)}')`, territory, item => item.TerritoryID == territoryId, {  }, ['Region']);
  }

  getApplicationUsers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/ApplicationUsers`, { filter, top, skip, orderby, expand, select, count });
  }

  createApplicationUser(applicationUser: any) : Observable<any> {
    return this.odata.post(`/ApplicationUsers`, applicationUser, {  }, []);
  }

  getApplicationUserById(id: string) : Observable<any> {
    return this.odata.getById(`/ApplicationUsers('${encodeURIComponent(id)}')`, {  });
  }

  deleteApplicationUser(id: string) : Observable<any> {
    return this.odata.delete(`/ApplicationUsers('${encodeURIComponent(id)}')`, item => !(item.Id == id));
  }

  updateApplicationUser(id: string, applicationUser: any) : Observable<any> {
    return this.odata.patch(`/ApplicationUsers('${encodeURIComponent(id)}')`, applicationUser, item => item.Id == id, {  }, []);
  }

  getApplicationRoles(filter: string | null, top: number | null, skip: number | null, orderby: string | null, expand: string | null, select: string | null, count: boolean | null) : Observable<any> {
    return this.odata.get(`/ApplicationRoles`, { filter, top, skip, orderby, expand, select, count });
  }

  createIdentityRole(identityRole: any) : Observable<any> {
    return this.odata.post(`/ApplicationRoles`, identityRole, {  }, []);
  }

  getIdentityRoleById(id: string) : Observable<any> {
    return this.odata.getById(`/ApplicationRoles('${encodeURIComponent(id)}')`, {  });
  }

  deleteIdentityRole(id: string) : Observable<any> {
    return this.odata.delete(`/ApplicationRoles('${encodeURIComponent(id)}')`, item => !(item.Id == id));
  }

  updateIdentityRole(id: string, identityRole: any) : Observable<any> {
    return this.odata.patch(`/ApplicationRoles('${encodeURIComponent(id)}')`, identityRole, item => item.Id == id, {  }, []);
  }
}
