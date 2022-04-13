package com.carservicestation.dtos_Customer;

import java.util.Date;

public class TrackInDto {
int cid;
int oid;
String complaintSubject;
String complaintDetail;


public TrackInDto() {
	super();
}
public int getCid() {
	return cid;
}
public void setCid(int cid) {
	this.cid = cid;
}
public int getOid() {
	return oid;
}
public void setOid(int oid) {
	this.oid = oid;
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
@Override
public String toString() {
	return "TrackInDto [cid=" + cid + ", oid=" + oid + ", complaintSubject=" + complaintSubject + ", complaintDetail="
			+ complaintDetail + "]";
}

}
