package com.carservicestation.dtos;

public class AdminSideCustomerDto {

	private int custId;
	private String name;
	private String city;
	private String area;
	private String address;
	private int pincode;
	private String email;
	private String mobileNo;
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
	@Override
	public String toString() {
		return "AdminSideCustomerDto [custId=" + custId + ", name=" + name + ", city=" + city + ", area=" + area
				+ ", address=" + address + ", pincode=" + pincode + ", email=" + email + ", mobileNo=" + mobileNo + "]";
	}
	
	
	
}
