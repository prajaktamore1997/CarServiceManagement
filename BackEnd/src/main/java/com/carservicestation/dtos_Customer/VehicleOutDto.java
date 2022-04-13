package com.carservicestation.dtos_Customer;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Vehicle;

public class VehicleOutDto {
	int vehicleId;
	String VehicleRegNo;
	
	
	
	public VehicleOutDto() {
		super();
	}



	public VehicleOutDto(int vehicleId, String vehicleRegNo) {
		super();
		this.vehicleId = vehicleId;
		VehicleRegNo = vehicleRegNo;
	}



	public int getVehicleId() {
		return vehicleId;
	}



	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}



	public String getVehicleRegNo() {
		return VehicleRegNo;
	}



	public void setVehicleRegNo(String vehicleRegNo) {
		VehicleRegNo = vehicleRegNo;
	}
public static VehicleOutDto fromEntity(Vehicle v) {
	VehicleOutDto dto= new VehicleOutDto();
	BeanUtils.copyProperties(v, dto);
	return dto;
	
	}
	
	@Override
	public String toString() {
		return "VehicleOutDto [vehicleId=" + vehicleId + ", VehicleRegNo=" + VehicleRegNo + "]";
	}
	
}
