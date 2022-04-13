package com.carservicestation.dtos;

import java.util.ArrayList;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.SubPackage;

public class MainSubPckdto {

	private int makeId;
	private int subPckId;
	private String mainPckName;
	private String subPckName;
	private int validity;
	private int status;
	private float price;
	
	public MainSubPckdto() {
		// TODO Auto-generated constructor stub
	}
	
	public MainSubPckdto(int makeId, int subPckId, String mainPckName, String subPckName, int validity, int status,
			float price) {
		super();
		this.makeId = makeId;
		this.subPckId = subPckId;
		this.mainPckName = mainPckName;
		this.subPckName = subPckName;
		this.validity = validity;
		this.status = status;
		this.price = price;
	}

	public int getMakeId() {
		return makeId;
	}
	public void setMakeId(int makeId) {
		this.makeId = makeId;
	}
	public int getSubPckId() {
		return subPckId;
	}
	public void setSubPckId(int subPckId) {
		this.subPckId = subPckId;
	}
	public String getMainPckName() {
		return mainPckName;
	}
	public void setMainPckName(String mainPckName) {
		this.mainPckName = mainPckName;
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
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "MainSubPckdto [makeId=" + makeId + ", subPckId=" + subPckId + ", mainPckName=" + mainPckName
				+ ", subPckName=" + subPckName + ", validity=" + validity + ", status=" + status + ", price=" + price
				+ "]";
	}
	
	public static MainPackage toEntity(MainSubPckdto mainsub) {
		MainPackage main = new MainPackage();
		BeanUtils.copyProperties(mainsub, main);
		return main;
	}
	
	public static SubPackage toEntitysubpck(MainSubPckdto sub) {
		SubPackage submain = new SubPackage();
		BeanUtils.copyProperties(sub, submain);
		return submain;
	}
	public static MainSubPckdto fromEntity(MainPackage main) {
		MainSubPckdto mainsub= new MainSubPckdto();
		BeanUtils.copyProperties(main, mainsub);
		return mainsub;
	}
	
}
