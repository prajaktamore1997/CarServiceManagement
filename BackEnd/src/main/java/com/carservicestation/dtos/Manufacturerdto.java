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
public class Manufacturerdto {
	
	
	private int makeId;
	private String makeName;
	private String modelName;
	private String fuelType;
	

public Manufacturerdto(int makeId, String makeName, String modelName, String fuelType, List<Model> modelList) {
		super();
		this.makeId = makeId;
		this.makeName = makeName;
		this.modelName = modelName;
		this.fuelType = fuelType;
		this.modelList = modelList;
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

private List<Model> modelList;

public Manufacturerdto() {
	super();
}
//public Manufacturerdto(int makeId, String makeName, List<Model> modelList) {
//	super();
//	this.makeId = makeId;
//	this.makeName = makeName;
//	this.modelList = modelList;
//}
public int getMakeId() {
	return makeId;
}
public void setMakeId(int makeId) {
	this.makeId = makeId;
}
public String getMakeName() {
	return makeName;
}
public void setMakeName(String makeName) {
	this.makeName = makeName;
}
public List<Model> getModelList() {
	return modelList;
}
public void setModelList(List<Model> modelList) {
	this.modelList = modelList;
}

@Override
public String toString() {
	return "Manufacturerdto [makeId=" + makeId + ", makeName=" + makeName + ", modelName=" + modelName + ", fuelType="
			+ fuelType + ", modelList=" + modelList + "]";
}

public static Manufacturerdto fromEntity(Manufacturer m) {
	Manufacturerdto mdto= new Manufacturerdto();
	BeanUtils.copyProperties(m,mdto);
	return mdto;
}

public static Manufacturer toEntity(Manufacturerdto mdto) {
	Manufacturer m= new Manufacturer();
	BeanUtils.copyProperties(mdto, m);
	return m;
}

}
