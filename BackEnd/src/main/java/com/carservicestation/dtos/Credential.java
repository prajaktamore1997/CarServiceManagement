package com.carservicestation.dtos;

public class Credential {

	private String email;
	private String password;
	
	public Credential() {
		// TODO Auto-generated constructor stub
	}

	public String getemail() {
		return email;
	}

	public void setemail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Credential [email=" + email + ", password=" + password + "]";
	}
	
}
