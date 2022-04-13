package com.carservicestation.dtos_Customer;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Customer;

public class CustomerInDto {
	  private String name;
	  private String city;
	  private String area;
	  private String  address;
	  private int  pincode;
	  private String  email;
	  private String  mobileNo;
	  private String  password;

	public CustomerInDto() {
		super();
	}

	public CustomerInDto(String name, String city, String area, String address, int pincode, String email,
			String mobileNo, String password) {
		super();
		this.name = name;
		this.city = city;
		this.area = area;
		this.address = address;
		this.pincode = pincode;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
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

	public static Customer toEntity(CustomerInDto dto) {
		Customer entity = new Customer();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}

	@Override
	public String toString() {
		return "CustomerInDto [name=" + name + ", city=" + city + ", area=" + area + ", address=" + address
				+ ", pincode=" + pincode + ", email=" + email + ", mobileNo=" + mobileNo + ", password=" + password
				+ "]";
	}
	
	
}