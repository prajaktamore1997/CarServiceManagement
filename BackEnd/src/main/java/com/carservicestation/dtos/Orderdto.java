package com.carservicestation.dtos;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Order;

public class Orderdto {
	private int ordersId;
	private int empId;
	private String ordersStatus;
	
	public Orderdto() {
		// TODO Auto-generated constructor stub
	}
	
	




	public int getOrdersId() {
		return ordersId;
	}


	public void setOrdersId(int ordersId) {
		this.ordersId = ordersId;
	}


	public int getEmpId() {
		return empId;
	}


	public void setEmpId(int empId) {
		this.empId = empId;
	}


	



	@Override
	public String toString() {
		return "Orderdto [ordersId=" + ordersId + ", empId=" + empId + ", ordersStatus=" + ordersStatus + "]";
	}






	public String getOrdersStatus() {
		return ordersStatus;
	}






	public void setOrdersStatus(String ordersStatus) {
		this.ordersStatus = ordersStatus;
	}






	public static Order toEntity(Orderdto orderdto) {
		Order o= new Order();
		BeanUtils.copyProperties(orderdto, o);
		
		return o;
	}
	
	
}
