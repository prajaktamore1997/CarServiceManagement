package com.carservicestation.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "complaint")
public class Complaint {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int complaintId;
	private String complaintSubject;
	private String complaintDetail;
	private String complaintResponse;
	@Temporal(TemporalType.DATE)
	private Date complaintDate;

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "custId")
	private Customer customer;

	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.REMOVE, CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "ordersId")
	private Order order;

	public Complaint() {
		
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

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Complaint [complaintId=" + complaintId + ", complaintSubject=" + complaintSubject + ", complaintDetail="
				+ complaintDetail + ", complaintResponse=" + complaintResponse + ", complaintDate=" + complaintDate
				+ ", customer=" + customer + ", order=" + order + "]";
	}

}
