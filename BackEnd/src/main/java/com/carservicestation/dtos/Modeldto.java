package com.carservicestation.dtos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;
import com.carservicestation.entities.Vehicle;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


public class Modeldto {
	
	private int modelId;
	private String modelName;
	private String fueltype;
	



	
public Modeldto() {
	super();
	
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















@Override
public String toString() {
	return "Modeldto [modelId=" + modelId + ", modelName=" + modelName + ", fueltype=" + fueltype + "]";
}




public static Modeldto fromEntity(Model m) {
	Modeldto mdto= new Modeldto();
	BeanUtils.copyProperties(m,mdto);
	return mdto;
}

public static Model toEntity(Modeldto mdto) {
	Model m= new Model();
	BeanUtils.copyProperties(mdto, m);
	return m;
}
}
