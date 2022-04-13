package com.carservicestation.dtos_Customer;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Customer;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CustomerOutDto {
	@JsonProperty
	private int custId;
	private String name;
	  private String city;
	  private String area;
	  private String  address;
	  private int  pincode;
	  private String  email;
	  private String  mobileNo;
	

	public CustomerOutDto() {
		super();
	}

	public CustomerOutDto(String name, String city, String area, String address, int pincode, String email,
			String mobileNo) {
		super();
		this.name = name;
		this.city = city;
		this.area = area;
		this.address = address;
		this.pincode = pincode;
		this.email = email;
		this.mobileNo = mobileNo;
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

	public static CustomerOutDto fromEntity(Customer c) {
		CustomerOutDto entity = new CustomerOutDto();
		BeanUtils.copyProperties(c, entity);
		return entity;
	}
	@Override
	public String toString() {
		return "CustomerOutDto [custId=" + custId + ", name=" + name + ", city=" + city + ", area=" + area
				+ ", address=" + address + ", pincode=" + pincode + ", email=" + email + ", mobileNo=" + mobileNo + "]";
	}
}
