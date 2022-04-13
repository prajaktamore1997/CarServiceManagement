package com.carservicestation.dtos_Customer;

import java.util.Date;

public class OrderInDto {
	int custId;
	String vehicleRegNo;

	int subPckId;
	int modelId;
	int ordersId;
	String vehicleProblem;
	String serviceTime;
	String serviceDate;
	public OrderInDto() {
		super();
	}

	public OrderInDto(int custId, int subPckId, int modelId) {
		super();
		this.custId = custId;
		this.subPckId = subPckId;
		this.modelId = modelId;
	}

	public OrderInDto(int custId, String vehicleRegNo, int subPckId, int modelId) {
		super();
		this.custId = custId;
		this.vehicleRegNo = vehicleRegNo;
		this.subPckId = subPckId;
		this.modelId = modelId;
	}

	public String getServiceTime() {
		return serviceTime;
	}

	public void setServiceTime(String serviceTime) {
		this.serviceTime = serviceTime;
	}



	public int getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(int ordersId) {
		this.ordersId = ordersId;
	}

	public String getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(String serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getVehicleProblem() {
		return vehicleProblem;
	}

	public void setVehicleProblem(String vehicleProblem) {
		this.vehicleProblem = vehicleProblem;
	}

	public String getVehicleRegNo() {
		return vehicleRegNo;
	}

	public void setVehicleRegNo(String vehicleRegNo) {
		this.vehicleRegNo = vehicleRegNo;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public int getSubPckId() {
		return subPckId;
	}

	public void setSubPckId(int subPckId) {
		this.subPckId = subPckId;
	}

	public int getModelId() {
		return modelId;
	}

	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	@Override
	public String toString() {
		return "OrderInDto [custId=" + custId + ", vehicleRegNo=" + vehicleRegNo + ", subPckId=" + subPckId
				+ ", modelId=" + modelId + "]";
	}

	
}
