package com.carservicestation.dtos;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Customer;

public class Customerdto {
	private int custId;
	private String name;
	private String city;
	private String area;
	private String address;
	private int pincode;
	private String email;
	private String mobileNo;
	private String password;

	public Customerdto() {
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

	@Override
	public String toString() {
		return String.format(
				"Customerdto [custId=%s, name=%s, city=%s, area=%s, address=%s, pincode=%s, email=%s, mobileNo=%s, password=%s]",
				custId, name, city, area, address, pincode, email, mobileNo, password);
	}

	public static Customerdto fromEntity(Customer c) {
		Customerdto cdto= new Customerdto();
		BeanUtils.copyProperties(c, cdto);
		return cdto;
	}

	public static Customer toEntity(Customerdto cdto) {
		Customer c= new Customer();
		BeanUtils.copyProperties(cdto, c);
		return c;
	}

}
