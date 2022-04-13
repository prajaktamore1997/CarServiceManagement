package com.carservicestation.dtos_Customer;

import javax.persistence.Column;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;

public class ModelOutDto {
	private int modelId;
	private String modelName;
	private String fueltype;
	
	
	public ModelOutDto() {
		super();
	}


	public ModelOutDto(int modelId, String modelName, String fueltype) {
		super();
		this.modelId = modelId;
		this.modelName = modelName;
		this.fueltype = fueltype;
	}


	public int getModelId() {
		return modelId;
	}


	public void setModelId(int modelId) {
		this.modelId = modelId;
	}


	public String getModelName() {
		return modelName;
	}


	public void setModelName(String modelName) {
		this.modelName = modelName;
	}


	public String getFueltype() {
		return fueltype;
	}


	public void setFueltype(String fueltype) {
		this.fueltype = fueltype;
	}
	public static ModelOutDto fromEntityt(Model m) {
		ModelOutDto dto=new ModelOutDto();
		BeanUtils.copyProperties(m, dto);
		return dto;
		}

	@Override
	public String toString() {
		return "ModelOutDto [modelId=" + modelId + ", modelName=" + modelName + ", fueltype=" + fueltype + "]";
	}
	
}
