package com.carservicestation.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Table(name = "mainpackage")
@Entity

public class MainPackage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mainPckId;
	private String mainPckName;

	@OneToMany(mappedBy = "mainPackage", cascade = { CascadeType.PERSIST, CascadeType.REMOVE }, orphanRemoval = true)
	private List<SubPackage> subPackageslist;

	public MainPackage(int mainPckId, String mainPckName) {
		super();
		this.mainPckId = mainPckId;
		this.mainPckName = mainPckName;
		this.subPackageslist = new ArrayList<SubPackage>();
	}

	public MainPackage() {
		super();
		this.subPackageslist = new ArrayList<SubPackage>();
	}

	public int getMainPckId() {
		return mainPckId;
	}

	public void setMainPckId(int mainPckId) {
		this.mainPckId = mainPckId;
	}

	public String getMainPckName() {
		return mainPckName;
	}

	public void setMainPckName(String mainPckName) {
		this.mainPckName = mainPckName;
	}

	public List<SubPackage> getSubPackageslist() {
		return subPackageslist;
	}

	public void setSubPackageslist(List<SubPackage> subPackageslist) {
		this.subPackageslist = subPackageslist;
	}

//	@Override
//	public String toString() {
//		return "MainPackage [mainPckId=" + mainPckId + ", mainPckName=" + mainPckName + ", subPackageslist="
//				+ subPackageslist + "]";
//	}

	public void addsubpck(SubPackage sub) {
		if (sub != null) {
			this.subPackageslist.add(sub);
			sub.setMainPackage(this);
		}
	}

	@Override
	public String toString() {
		return "MainPackage [mainPckId=" + mainPckId + ", mainPckName=" + mainPckName + "]";
	}

}
