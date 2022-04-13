package com.carservicestation.dtos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.SubPackage;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class SubPackagedto {
	
	private int subPckId;
	private String subPckName;
	private int validity;
	private float price;
	private int status;
	
	
	
	public SubPackagedto() {
		super();
		
	}

	



	public void setSubPckId(int subPckId) {
		this.subPckId = subPckId;
	}





	public void setSubPckName(String subPckName) {
		this.subPckName = subPckName;
	}


public static SubPackage toEntity(SubPackagedto subdto) {
	SubPackage sub=new SubPackage();
	BeanUtils.copyProperties(subdto, sub);
	return sub;
}








	public int getSubPckId() {
		return subPckId;
	}

	
	public String getSubPckName() {
		return subPckName;
	}


	public int getValidity() {
		return validity;
	}

	public void setValidity(int validity) {
		this.validity = validity;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}





	@Override
	public String toString() {
		return "SubPackage [subPckId=" + subPckId + ", subPckName=" + subPckName + ", validity=" + validity + ", price="
				+ price + ", status=" + status + "]";
	}





}
