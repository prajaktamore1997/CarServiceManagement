package com.carservicestation.services;

import java.util.List;

import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Order;

public interface EmployeeScopeService {

	List<Order> getempOrders(String oid);

	boolean changeWorkingstatus(String empid, String orderid, String workStatus);

	Employee getEmployee(String id);

	Employee update(Employee person);

}