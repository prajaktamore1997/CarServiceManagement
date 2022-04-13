package com.carservicestation.dtos_Customer;

import java.util.Date;

public class ComplaintOutDto {
	private	int complaintId;
	private	String complaintSubject;
	private	String complaintDetail;
	private	String complaintResponse;
	private	Date complaintDate;
	private String subPckName;
	private int ordersId;
	public ComplaintOutDto() {
		super();
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
	public String getSubPckName() {
		return subPckName;
	}
	public void setSubPckName(String subPckName) {
		this.subPckName = subPckName;
	}
	public int getOrdersId() {
		return ordersId;
	}
	public void setOrdersId(int ordersId) {
		this.ordersId = ordersId;
	}
	@Override
	public String toString() {
		return "ComplaintOutDto [complaintId=" + complaintId + ", complaintSubject=" + complaintSubject
				+ ", complaintDetail=" + complaintDetail + ", complaintResponse=" + complaintResponse
				+ ", complaintDate=" + complaintDate + ", subPckName=" + subPckName + ", ordersId=" + ordersId + "]";
	}

}
