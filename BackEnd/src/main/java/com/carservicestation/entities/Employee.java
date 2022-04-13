package com.carservicestation.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties("orderList")
@Entity
@Table(name = "employee")
public class Employee {
@Id
	private int empId;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	@Temporal(TemporalType.DATE)
	private Date hireDate;
	private double salary;
	private float commissionPct;
	private String address;
	@Temporal(TemporalType.DATE)
	private Date DOB;
	private String role;
	private String password;
	
	@OneToMany(mappedBy = "employee")
	List<Order> orderList;

	
	public Employee() {
		orderList=new ArrayList<Order>()	;
	}
	
	public Employee(int empId, String firstName, String lastName, String email, String mobile, Date hireDate,
			double salary, float commissionPct, String address, Date dOB, String role, String password,
			List<Order> orderList) {
		super();
		this.empId = empId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.hireDate = hireDate;
		this.salary = salary;
		this.commissionPct = commissionPct;
		this.address = address;
		DOB = dOB;
		this.role = role;
		this.password = password;
		this.orderList = orderList;
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
	
	public List<Order> getOrderList() {
		return orderList;
	}
	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", mobile=" + mobile + ", hireDate=" + hireDate + ", salary=" + salary + ", commissionPct="
				+ commissionPct + ", address=" + address + ", DOB=" + DOB + ", role=" + role + ", password=" + password
				+ "]";
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee other = (Employee) obj;
		if (empId != other.empId)
			return false;
		return true;
	}
	
	
	
}
