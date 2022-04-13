package com.carservicestation.dtos_Customer;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.SubPackage;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SubPackageOutDto {
	private int subPckId;
	private String subPckName;
	private int validity;
	private String status;
	private float price;
	
	
	public SubPackageOutDto() {
		super();
	}

	public SubPackageOutDto(int subPckId, String subPckName, int validity, String status, float price) {
		super();
		this.subPckId = subPckId;
		this.subPckName = subPckName;
		this.validity = validity;
		this.status = status;
		this.price = price;
	}
	

	public int getSubPckId() {
		return subPckId;
	}




	public void setSubPckId(int subPckId) {
		this.subPckId = subPckId;
	}




	public String getSubPckName() {
		return subPckName;
	}




	public void setSubPckName(String subPckName) {
		this.subPckName = subPckName;
	}




	public int getValidity() {
		return validity;
	}




	public void setValidity(int validity) {
		this.validity = validity;
	}




	public String getStatus() {
		return status;
	}




	public void setStatus(String status) {
		this.status = status;
	}




	public float getPrice() {
		return price;
	}




	public void setPrice(float price) {
		this.price = price;
	}

	public static SubPackageOutDto fromEntity(SubPackage entity) {
		SubPackageOutDto dto = new SubPackageOutDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}


	@Override
	public String toString() {
		return "SubPackageOutDto [subPckId=" + subPckId + ", subPckName=" + subPckName + ", validity=" + validity
				+ ", status=" + status + ", price=" + price + "]";
	}
	
}
