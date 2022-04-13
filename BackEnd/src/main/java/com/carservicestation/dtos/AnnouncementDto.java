package com.carservicestation.dtos;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import org.springframework.format.annotation.DateTimeFormat;

import com.carservicestation.entities.Announcement;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AnnouncementDto {

	private int id;
	private String subject;
	private String data;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date date;
	@JsonProperty("flag") // imp
	private int flag;

	public AnnouncementDto() {
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

	public int getIsNew() {
		return flag;
	}

	public void setIsNew(int isNew) {
		this.flag = isNew;
	}

	@Override
	public String toString() {
		return "Announcement [id=" + id + ", subject=" + subject + ", data=" + data + ", date=" + date + ", flag="
				+ flag + "]";
	}

	public static AnnouncementDto fromEntity(Announcement ann) {
		AnnouncementDto a = new AnnouncementDto();
		a.setIsNew(ann.getFlag());
		BeanUtils.copyProperties(ann, a);
		return a;

	}

	public static Announcement toEntity(AnnouncementDto andto) {
		Announcement ann = new Announcement();
		ann.setFlag(andto.getIsNew());
		BeanUtils.copyProperties(andto, ann);
		return ann;

	}
}
