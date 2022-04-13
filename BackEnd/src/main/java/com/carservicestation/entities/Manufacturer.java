package com.carservicestation.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "manufacturer ")
public class Manufacturer {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int makeId;
	private String makeName;

	@OneToMany(mappedBy = "manufacturer", fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
	private List<Model> modelList;

	public Manufacturer() {
		super();
		this.modelList = new ArrayList<Model>();
	}

	public Manufacturer(int makeId, String makeName, List<Model> modelList) {
		super();
		this.makeId = makeId;
		this.makeName = makeName;
		this.modelList = new ArrayList<Model>();
	}

	public int getMakeId() {
		return makeId;
	}

	public void setMakeId(int makeId) {
		this.makeId = makeId;
	}

	public String getMakeName() {
		return makeName;
	}

	public void setMakeName(String makeName) {
		this.makeName = makeName;
	}

	public List<Model> getModelList() {
		return modelList;
	}

	public void setModelList(List<Model> modelList) {
		this.modelList = modelList;
	}

	public void addModel(Model m) {
		this.modelList.add(m);
		m.setManufacturer(this);
	}

	@Override
	public String toString() {
		return "Manufacturer [makeId=" + makeId + ", makeName=" + makeName + ", modelList=" + modelList + "]";
	}

}
