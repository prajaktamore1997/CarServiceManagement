package com.carservicestation.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.beans.BeanUtils;
import org.springframework.format.annotation.DateTimeFormat;

import com.carservicestation.entities.Model;
import com.carservicestation.entities.Order;

public class PendingOrdersdto {
	//order
	private int ordersId;
	private Date ordersDate;
	private String ordersStatus;
	private int redeemStatus;
	private Date serviceDate;
	private String serviceTime;
	private String vehicleProblem;
	
	//subpck
	private int subPckId;
	private String subPckName;
	private int validity;
	private int status;
	
	//customer
	private int custId;
	private String name;
	private String city;
	private String area;
	private String address;
	private String email;
	private String mobileNo;
	
	//payment
	int paymentId;
	
	Date paymentDate;
	float price;
	String paymentMode;
	String txnNo;
	
	//complaint
	int complaintId;
	String complaintSubject;
	String complaintDetail;
	String complaintResponse;
	Date complaintDate;
	
	//vehicle
	int vehicleId;
	String VehicleRegNo;
	private Model model;
	
	
	//emp
//	private int empId;
//	private String firstName;
//	private String lastName;
	
	
	public PendingOrdersdto() {
		// TODO Auto-generated constructor stub
	}
	
	
	public int getOrdersId() {
		return ordersId;
	}
	public void setOrdersId(int ordersId) {
		this.ordersId = ordersId;
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
	public String getVehicleProblem() {
		return vehicleProblem;
	}
	public void setVehicleProblem(String vehicleProblem) {
		this.vehicleProblem = vehicleProblem;
	}
	public int getSubPckId() {
		return subPckId;
	}
	public void setSubPckId(int subPckId) {
		this.subPckId = subPckId;
	}
	public String getSubPckName() {
		return subPckName;
	}
	public void setSubPckName(String subPckName) {
		this.subPckName = subPckName;
	}
	public int getValidity() {
		return validity;
	}
	public void setValidity(int validity) {
		this.validity = validity;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
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
	public int getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}
	public Date getPaymentDate() {
		return paymentDate;
	}
	public void setPaymentDate(Date paymentDate) {
		this.paymentDate = paymentDate;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	public String getTxnNo() {
		return txnNo;
	}
	public void setTxnNo(String txnNo) {
		this.txnNo = txnNo;
	}
	public int getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	public String getComplaintSubject() {
		return complaintSubject;
	}
	public void setComplaintSubject(String complaintSubject) {
		this.complaintSubject = complaintSubject;
	}
	public String getComplaintDetail() {
		return complaintDetail;
	}
	public void setComplaintDetail(String complaintDetail) {
		this.complaintDetail = complaintDetail;
	}
	public String getComplaintResponse() {
		return complaintResponse;
	}
	public void setComplaintResponse(String complaintResponse) {
		this.complaintResponse = complaintResponse;
	}
	public Date getComplaintDate() {
		return complaintDate;
	}
	public void setComplaintDate(Date complaintDate) {
		this.complaintDate = complaintDate;
	}
	public int getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}
	public String getVehicleRegNo() {
		return VehicleRegNo;
	}
	public void setVehicleRegNo(String vehicleRegNo) {
		VehicleRegNo = vehicleRegNo;
	}
	public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
//	public int getEmpId() {
//		return empId;
//	}
//	public void setEmpId(int empId) {
//		this.empId = empId;
//	}
//	public String getFirstName() {
//		return firstName;
//	}
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	public String getLastName() {
//		return lastName;
//	}
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
	
	
	
	
	public static PendingOrdersdto fromEntity(Order o) {
		PendingOrdersdto odto= new PendingOrdersdto();
		BeanUtils.copyProperties(o, odto);
		odto.setCustId(o.getCustomer().getCustId());
		odto.setName(o.getCustomer().getName());
		odto.setCity(o.getCustomer().getCity());
		odto.setArea(o.getCustomer().getArea());
		odto.setAddress(o.getCustomer().getAddress());
		odto.setMobileNo(o.getCustomer().getMobileNo());
//		odto.setEmpId(o.getEmployee().getEmpId());
//		odto.setFirstName(o.getEmployee().getFirstName());
//		odto.setLastName(o.getEmployee().getLastName());
		odto.setPaymentId(o.getPayment().getPaymentId());
		odto.setPaymentDate(o.getPayment().getPaymentDate());
		odto.setPaymentMode(o.getPayment().getPaymentMode());
		odto.setPrice(o.getPayment().getPrice());
		odto.setVehicleId(o.getVehicle().getVehicleId());
		odto.setVehicleRegNo(o.getVehicle().getVehicleRegNo());
		return odto;
	}


	@Override
	public String toString() {
		return "PendingOrdersdto [ordersId=" + ordersId + ", ordersDate=" + ordersDate + ", ordersStatus="
				+ ordersStatus + ", redeemStatus=" + redeemStatus + ", serviceDate=" + serviceDate + ", serviceTime="
				+ serviceTime + ", vehicleProblem=" + vehicleProblem + ", subPckId=" + subPckId + ", subPckName="
				+ subPckName + ", validity=" + validity + ", status=" + status + ", custId=" + custId + ", name=" + name
				+ ", city=" + city + ", area=" + area + ", address=" + address + ", email=" + email + ", mobileNo="
				+ mobileNo + ", paymentId=" + paymentId + ", paymentDate=" + paymentDate + ", price=" + price
				+ ", paymentMode=" + paymentMode + ", txnNo=" + txnNo + ", complaintId=" + complaintId
				+ ", complaintSubject=" + complaintSubject + ", complaintDetail=" + complaintDetail
				+ ", complaintResponse=" + complaintResponse + ", complaintDate=" + complaintDate + ", vehicleId="
				+ vehicleId + ", VehicleRegNo=" + VehicleRegNo + ", model=" + model + "]";
	}
	
}
