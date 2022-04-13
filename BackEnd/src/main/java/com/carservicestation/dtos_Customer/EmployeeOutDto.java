package com.carservicestation.dtos_Customer;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Employee;
import com.carservicestation.entities.SubPackage;

public class EmployeeOutDto {
	private int empId;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	public EmployeeOutDto() {
		super();
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "EmployeeOutDto [empId=" + empId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", mobile=" + mobile + "]";
	}
	
	public static EmployeeOutDto fromEntity(Employee entity) {
		EmployeeOutDto dto = new EmployeeOutDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
	
}
