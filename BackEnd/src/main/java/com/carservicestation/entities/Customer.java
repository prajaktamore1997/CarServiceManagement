package com.carservicestation.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;



@Table(name = "customer")
@Entity
public class Customer {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int custId;
	private String name;
	private String city;
	private String area;
	private String address;
	private int pincode;
	private String email;
	private String mobileNo;
	private String password;
	
	@OneToMany(mappedBy = "customer")
	List<Order> orderlist;
/*
	@OneToMany(mappedBy = "customer")
	List<Vehicle> vehicleList; */
	
	@OneToMany(mappedBy = "customer",cascade = CascadeType.PERSIST)
	List<Vehicle> vehicleList;

	@OneToMany(mappedBy = "customer")
	List<Complaint> complaintList;

	
	public Customer() {
		super();
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public List<Order> getOrderlist() {
		return orderlist;
	}

	public void setOrderlist(List<Order> orderlist) {
		this.orderlist = orderlist;
	}

	public List<Vehicle> getVehicleList() {
		return vehicleList;
	}

	public void setVehicleList(List<Vehicle> vehicleList) {
		this.vehicleList = vehicleList;
	}

	public List<Complaint> getComplaintList() {
		return complaintList;
	}

	public void setComplaintList(List<Complaint> complaintList) {
		this.complaintList = complaintList;
	}

	public void addVehicleInCustomerVehicleList(Vehicle v) {
		this.vehicleList.add(v);
		v.setCustomer(this);
	}
	
	
	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", name=" + name + ", city=" + city + ", area=" + area + ", address="
				+ address + ", pincode=" + pincode + ", email=" + email + ", mobileNo=" + mobileNo + ", password="
				+ password + "]";
	}

	
	
}
