package com.carservicestation.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vehicle")
public class Vehicle {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int vehicleId;
	private String VehicleRegNo;

	@OneToMany(mappedBy = "vehicle", cascade = CascadeType.PERSIST)
	private List<Order> orderlist;

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "modelId")
	private Model model;

	@ManyToOne
	@JoinColumn(name = "custId")
	private Customer customer;

	public Vehicle() {
		super();
		orderlist = new ArrayList<Order>();
	}

	public Vehicle(int vehicleId, String vehicleRegNo, List<Order> orderlist, Model model, Customer customer) {
		super();
		this.vehicleId = vehicleId;
		VehicleRegNo = vehicleRegNo;
		this.orderlist = orderlist;
		this.model = model;
		this.customer = customer;
	}

	public int getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getVehicleRegNo() {
		return VehicleRegNo;
	}

	public void setVehicleRegNo(String vehicleRegNo) {
		VehicleRegNo = vehicleRegNo;
	}

	public List<Order> getOrderlist() {
		return orderlist;
	}

	public void setOrderlist(List<Order> orderlist) {
		this.orderlist = orderlist;
	}

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "Vehicle [vehicleId=" + vehicleId + ", VehicleRegNo=" + VehicleRegNo + ", model=" + model + ", customer="
				+ customer + "]";
	}

	public void addOrderForVehicle(Order o) {
		this.orderlist.add(o);
		o.setVehicle(this);
	}

	public void addModelForVehicle(Model m) {
		this.model = m;
		m.getVehicleList().add(this);
	}

}
