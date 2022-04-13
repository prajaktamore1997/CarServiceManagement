package com.carservicestation.dtos;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Complaint;

@Entity
@Table(name = "complaint")
public class Complaintdto {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	int complaintId;
	String complaintSubject;
	String complaintDetail;
	String complaintResponse;
	Date complaintDate;
	private int custId;
	private int orderId;
	public Complaintdto() {
		// TODO Auto-generated constructor stub
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


	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	


@Override
	public String toString() {
		return "Complaintdto [complaintId=" + complaintId + ", complaintSubject=" + complaintSubject
				+ ", complaintDetail=" + complaintDetail + ", complaintResponse=" + complaintResponse
				+ ", complaintDate=" + complaintDate + ", custId=" + custId + ", orderId=" + orderId + "]";
	}
public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
public static Complaintdto fromEntity(Complaint cc) {
	Complaintdto c= new Complaintdto();
	BeanUtils.copyProperties(cc, c);
	c.setCustId(cc.getCustomer().getCustId());
	c.setOrderId(cc.getOrder().getOrdersId());
	return c;
}
	
	

}
