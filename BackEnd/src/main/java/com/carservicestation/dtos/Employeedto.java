package com.carservicestation.dtos;

import java.util.Date;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.carservicestation.entities.Customer;
import com.carservicestation.entities.Employee;


public class Employeedto {

	private int empId;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	private Date hireDate;
	private double salary;
	private float commissionPct;
	private String address;
	
	private Date DOB;
	private String role;
	private String password;

	
	public Employeedto() {
		// TODO Auto-generated constructor stub
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


	public Date getHireDate() {
		return hireDate;
	}


	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}


	public double getSalary() {
		return salary;
	}


	public void setSalary(double salary) {
		this.salary = salary;
	}


	public float getCommissionPct() {
		return commissionPct;
	}


	public void setCommissionPct(float commissionPct) {
		this.commissionPct = commissionPct;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Date getDOB() {
		return DOB;
	}


	public void setDOB(Date dOB) {
		DOB = dOB;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
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
				"Employeedto [empId=%s, firstName=%s, lastName=%s, email=%s, mobile=%s, hireDate=%s, salary=%s, commissionPct=%s, address=%s, DOB=%s, role=%s, password=%s]",
				empId, firstName, lastName, email, mobile, hireDate, salary, commissionPct, address, DOB, role,
				password);
	}
	
	
	public static Employeedto fromEntity(Employee e) {
		Employeedto edto= new Employeedto();
		BeanUtils.copyProperties(e, edto);
		return edto;
	}

	public static Employee toEntity(Employeedto edto) {
		Employee e= new Employee();
		BeanUtils.copyProperties(edto, e);
		return e;
	}

}
