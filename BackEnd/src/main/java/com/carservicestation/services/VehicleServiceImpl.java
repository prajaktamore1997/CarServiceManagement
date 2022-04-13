package com.carservicestation.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservicestation.daos.Manufacturerdao;
import com.carservicestation.daos.Modeldao;
import com.carservicestation.daos.Vehicledao;
import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
	@Autowired
	Vehicledao vehicledao;
	@Autowired
	Manufacturerdao manufacturerdao;
	@Autowired
	Modeldao modeldao;

	@Override
	public List<Model> findByManufacturer(Manufacturer m) {
		List<Model> modelList = modeldao.findByManufacturer(m);
		return modelList;
	}

	@Override
	public List<Manufacturer> getAllMake() {
		List<Manufacturer> makeList = manufacturerdao.findAll();

		return makeList;
	}

	@Override
	public Manufacturer findById(int id) {
		Optional<Manufacturer> m = manufacturerdao.findById(id);
		return m.orElse(null);
	}

}
