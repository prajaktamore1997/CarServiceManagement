package com.carservicestation.dtos;

import java.util.Date;
import java.util.List;
import java.util.ListIterator;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Order;

public class EmpOnOrderFromOrder {
	private int ordersId;
	private Date ordersDate;
	private String ordersStatus;
	private int redeemStatus;
	private Date serviceDate;
	private String serviceTime;
	private String vehicleProblem;
	
	private Employee employee;
	
	public EmpOnOrderFromOrder() {
		// TODO Auto-generated constructor stub
	}

	public int getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(int ordersId) {
		this.ordersId = ordersId;
	}

	public Date getOrdersDate() {
		return ordersDate;
	}

	public void setOrdersDate(Date ordersDate) {
		this.ordersDate = ordersDate;
	}

	public String getOrdersStatus() {
		return ordersStatus;
	}

	public void setOrdersStatus(String ordersStatus) {
		this.ordersStatus = ordersStatus;
	}

	public int getRedeemStatus() {
		return redeemStatus;
	}

	public void setRedeemStatus(int redeemStatus) {
		this.redeemStatus = redeemStatus;
	}

	public Date getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(Date serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getServiceTime() {
		return serviceTime;
	}

	public void setServiceTime(String serviceTime) {
		this.serviceTime = serviceTime;
	}

	public String getVehicleProblem() {
		return vehicleProblem;
	}

	public void setVehicleProblem(String vehicleProblem) {
		this.vehicleProblem = vehicleProblem;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "EmpOnOrderFromOrder [ordersId=" + ordersId + ", ordersDate=" + ordersDate + ", ordersStatus="
				+ ordersStatus + ", redeemStatus=" + redeemStatus + ", serviceDate=" + serviceDate + ", serviceTime="
				+ serviceTime + ", vehicleProblem=" + vehicleProblem + ", employee=" + employee + "]";
	}
	
	public static EmpOnOrderFromOrder fromEntity(Order o) {
		EmpOnOrderFromOrder empOnOrder= new EmpOnOrderFromOrder();
		BeanUtils.copyProperties(o, empOnOrder);
		return empOnOrder;
	}

//	public static List<Employee> getFreeEmp(List<EmpOnOrderFromOrder> listOfFreeEmp, List<Employee> emplist) {
//		if(emplist != null && listOfFreeEmp != null)
//		{
//
//			 Stream<Object>	ee=emplist.stream().map((emp)->listOfFreeEmp.stream().map((oemp)->oemp.getemp(emp)));
//			 return null;
//		}
//			
//		return null;
//	}

	private Object getemp(Employee emp) {
		if(this.getEmployee().equals(emp))
		return emp;
		return null;
	}
	
	
}
