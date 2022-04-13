package com.carservicestation.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "model")
public class Model {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int modelId;
	@Column(name = "modelname")
	private String modelName;
	private String fueltype;

	@OneToMany(mappedBy = "model", cascade = { CascadeType.REMOVE })
	List<Vehicle> vehicleList;

	@ManyToOne
	@JoinColumn(name = "makeId")
	private Manufacturer manufacturer;

	public Model() {
		super();
		vehicleList = new ArrayList<Vehicle>();

	}

	public Model(int modelId, String modelName, String fueltype, List<Vehicle> vehicleList, Manufacturer manufacturer) {
		super();
		this.modelId = modelId;
		this.modelName = modelName;
		this.fueltype = fueltype;
		this.vehicleList = vehicleList;
		this.manufacturer = manufacturer;
	}

	public int getModelId() {
		return modelId;
	}

	public void setModelId(int modelId) {
		this.modelId = modelId;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getFueltype() {
		return fueltype;
	}

	public void setFueltype(String fueltype) {
		this.fueltype = fueltype;
	}

	public Manufacturer getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
	}

	public List<Vehicle> getVehicleList() {
		return vehicleList;
	}

	public void setVehicleList(List<Vehicle> vehicleList) {
		this.vehicleList = vehicleList;
	}

	/*
	 * @Override public String toString() { return "Model [modelId=" + modelId +
	 * ", modelName=" + modelName + ", fueltype=" + fueltype + ", vehicleList=" +
	 * vehicleList + ", manufacturer=" + manufacturer + "]"; }
	 */
	@Override
	public String toString() {
		return "Model [modelId=" + modelId + ", modelName=" + modelName + ", fueltype=" + fueltype + "]";
	}
}
