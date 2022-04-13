package com.carservicestation.services;

import java.util.List;

import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;

public interface VehicleService {
	List<Model> findByManufacturer(Manufacturer m);

	List<Manufacturer> getAllMake();

	Manufacturer findById(int id);
}
