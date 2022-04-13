package com.carservicestation.entities;

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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(value = { "mainPackage", "orderlist" })
@Entity
@Table(name = "subpackage")
public class SubPackage {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int subPckId;
	private String subPckName;
	private int validity;
	private float price;
	private int status;

	@OneToMany(mappedBy = "subpackage", cascade = { CascadeType.PERSIST }, orphanRemoval = true)
	private List<Order> orderlist;

	@ManyToOne(cascade = { CascadeType.PERSIST, })
	@JoinColumn(name = "mainPckId")
	private MainPackage mainPackage;

	public SubPackage() {
		super();
		this.orderlist = new ArrayList<Order>();
	}

	public void setSubPckId(int subPckId) {
		this.subPckId = subPckId;
	}

	public void setSubPckName(String subPckName) {
		this.subPckName = subPckName;
	}

	public SubPackage(int subPckId, String subPckName, int validity, float price, int status, List<Order> orderlist,
			MainPackage mainPackage) {
		super();
		this.subPckId = subPckId;
		this.subPckName = subPckName;
		this.validity = validity;
		this.price = price;
		this.status = status;
		this.orderlist = new ArrayList<Order>();
		this.mainPackage = mainPackage;
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

	public List<Order> getOrderlist() {
		return orderlist;
	}

	public void setOrderlist(List<Order> orderlist) {
		this.orderlist = orderlist;
	}

	public MainPackage getMainPackage() {
		return mainPackage;
	}

	public void setMainPackage(MainPackage mainPackage) {
		this.mainPackage = mainPackage;
	}

	@Override
	public String toString() {
		return "SubPackage [subPckId=" + subPckId + ", subPckName=" + subPckName + ", validity=" + validity + ", price="
				+ price + ", status=" + status + ", mainPackage=" + mainPackage + "]";
	}

}
