package com.carservicestation.dtos_Customer;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Order;

public class OrderOutDto {
	private int ordersId;
	private Date ordersDate;
	private String ordersStatus;
	private int redeemStatus;
	private Date serviceDate;
	private String serviceTime;
	
	private SubPackageOutDto subPck;
	
	private VehicleOutDto customerVehicle;
	private EmployeeOutDto employeeOutDto;
	
	public EmployeeOutDto getEmployeeOutDto() {
		return employeeOutDto;
	}
	public void setEmployeeOutDto(EmployeeOutDto employeeOutDto) {
		this.employeeOutDto = employeeOutDto;
	}
	public SubPackageOutDto getSubPck() {
		return subPck;
	}
	public void setSubPck(SubPackageOutDto subPck) {
		this.subPck = subPck;
	}
	public VehicleOutDto getCustomerVehicle() {
		return customerVehicle;
	}
	public void setCustomerVehicle(VehicleOutDto customerVehicle) {
		this.customerVehicle = customerVehicle;
	}
	public OrderOutDto() {
		super();
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
	@Override
	public String toString() {
		return "OrderOutDto [ordersId=" + ordersId + ", ordersDate=" + ordersDate + ", ordersStatus=" + ordersStatus
				+ ", redeemStatus=" + redeemStatus + ", serviceDate=" + serviceDate + ", serviceTime=" + serviceTime
				+ "]";
	}
public static OrderOutDto  fromEntity(Order o) {
	OrderOutDto dto=new OrderOutDto();
	BeanUtils.copyProperties(o, dto);
	return dto;
	
}
}
