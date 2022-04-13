package com.carservicestation.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "announcement")
public class Announcement {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "annId")
	@Id
	private int id;
	@Column(name = "annSubject")
	private String subject;
	@Column(name = "annData")
	private String data;
	@Temporal(TemporalType.DATE)
	@Column(name = "annDate")
	private Date date;
	@Column(name = "isNew")
	private int flag;

	public Announcement() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}

	@Override
	public String toString() {
		return "Announcement [id=" + id + ", subject=" + subject + ", data=" + data + ", date=" + date + ", flag="
				+ flag + "]";
	}


}
