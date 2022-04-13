package com.carservicestation.dtos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties("modelList")
public class ManufacturerModeldto {
	
	
	private String makeName;
	private String modelName;
	private String fuelType;
	

	public ManufacturerModeldto() {
		// TODO Auto-generated constructor stub
	}
	
	
@Override
	public String toString() {
		return "ManufacturerModeldto [makeName=" + makeName + ", modelName=" + modelName + ", fuelType=" + fuelType
				+ "]";
	}


public String getMakeName() {
		return makeName;
	}

	public void setMakeName(String makeName) {
		this.makeName = makeName;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

public static ManufacturerModeldto fromEntity(Manufacturer m) {
	ManufacturerModeldto mdto= new ManufacturerModeldto();
	BeanUtils.copyProperties(m,mdto);
	return mdto;
}

public static Manufacturer toEntity(ManufacturerModeldto mdto) {
	Manufacturer m= new Manufacturer();
	BeanUtils.copyProperties(mdto, m);
	return m;
}

}
