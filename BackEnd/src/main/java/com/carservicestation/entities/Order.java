package com.carservicestation.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "orders")
public class Order {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int ordersId;
	@Temporal(TemporalType.DATE)
	private Date ordersDate;
	private String ordersStatus;
	private int redeemStatus;
	@Temporal(TemporalType.DATE)
	private Date serviceDate;
	private String serviceTime;
	private String vehicleProblem;
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "paymentId")
	private Payment payment;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "CustId")
	private Customer customer;

	@OneToMany(mappedBy = "order")
	private List<Complaint> complaintlist;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	@JoinColumn(name = "empId")
	private Employee employee;

	@ManyToOne(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	@JoinColumn(name = "subPckId")
	private SubPackage subpackage;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "vehicleId")
	private Vehicle vehicle;

	public Order() {
	}

	public Order(int ordersId, Date ordersDate, String ordersStatus, int redeemStatus, Date serviceDate,
			String serviceTime, Customer customer, List<Complaint> complaintlist, Employee employee,
			SubPackage subpackage, Vehicle vehicle, Payment payment) {
		super();
		this.ordersId = ordersId;
		this.ordersDate = ordersDate;
		this.ordersStatus = ordersStatus;
		this.redeemStatus = redeemStatus;
		this.serviceDate = serviceDate;
		this.serviceTime = serviceTime;
		this.customer = customer;
		this.complaintlist = complaintlist;
		this.employee = employee;
		this.subpackage = subpackage;
		this.vehicle = vehicle;
		this.payment = payment;
	}

	public Date getOrdersDate() {
		return ordersDate;
	}

	public void setOrdersDate(Date ordersDate) {
		this.ordersDate = ordersDate;
	}

	public String getOrdersStatus() {
		return ordersStatus;
	}

	public void setOrdersStatus(String ordersStatus) {
		this.ordersStatus = ordersStatus;
	}

	public int getRedeemStatus() {
		return redeemStatus;
	}

	public void setRedeemStatus(int redeemStatus) {
		this.redeemStatus = redeemStatus;
	}

	public Date getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(Date serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getServiceTime() {
		return serviceTime;
	}

	public void setServiceTime(String serviceTime) {
		this.serviceTime = serviceTime;
	}

	public int getOrdersId() {
		return ordersId;
	}

	public void setOrdersId(int ordersId) {
		this.ordersId = ordersId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Complaint> getComplaintlist() {
		return complaintlist;
	}

	public void setComplaintlist(List<Complaint> complaintlist) {
		this.complaintlist = complaintlist;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public SubPackage getSubpackage() {
		return subpackage;
	}

	public void setSubpackage(SubPackage subpackage) {
		this.subpackage = subpackage;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public String getVehicleProblem() {
		return vehicleProblem;
	}

	public void setVehicleProblem(String vehicleProblem) {
		this.vehicleProblem = vehicleProblem;
	}

	@Override
	public String toString() {
		return "Order [ordersId=" + ordersId + ", ordersDate=" + ordersDate + ", ordersStatus=" + ordersStatus
				+ ", redeemStatus=" + redeemStatus + ", serviceDate=" + serviceDate + ", serviceTime=" + serviceTime
				+ ", vehicleProblem=" + vehicleProblem + "]";
	}

}
