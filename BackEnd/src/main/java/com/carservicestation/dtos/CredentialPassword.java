package com.carservicestation.dtos;

import java.util.Date;

public class CredentialPassword extends Credential{
private String mobile;
private Date birth;
public String getMobile() {
	return mobile;
}
public void setMobile(String mobile) {
	this.mobile = mobile;
}
public Date getBirth() {
	return birth;
}
public void setBirth(Date birth) {
	this.birth = birth;
}
@Override
public String toString() {
	return "CredentialPassword [mobile=" + mobile + ", birth=" + birth + ", toString()=" + super.toString() + "]";
}




}
