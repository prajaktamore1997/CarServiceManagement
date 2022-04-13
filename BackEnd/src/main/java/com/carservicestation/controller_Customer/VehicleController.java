package com.carservicestation.controller_Customer;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carservicestation.dtos_Customer.MakeOutDto;
import com.carservicestation.dtos_Customer.ModelOutDto;
import com.carservicestation.dtos_Customer.Response;
import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;
import com.carservicestation.services.VehicleService;

@CrossOrigin
@RequestMapping("/vehicle")
@RestController
public class VehicleController {
	@Autowired
	VehicleService vehicleService;

	@GetMapping("/make")
	public ResponseEntity<?> getAllMake() {
		List<Manufacturer> makeList = vehicleService.getAllMake();
		List<MakeOutDto> dtoList = new ArrayList<MakeOutDto>();
		if (makeList != null) {
			for (Manufacturer m : makeList)
				dtoList.add(MakeOutDto.fromEntityt(m));

		}
		return Response.success(dtoList);

	}

	@GetMapping("/model/{id}")
	public ResponseEntity<?> getAllModel(@PathVariable int id) {
		Manufacturer m = vehicleService.findById(id);
		List<Model> modelList = vehicleService.findByManufacturer(m);
		List<ModelOutDto> dtoList = new ArrayList<ModelOutDto>();
		if (modelList != null) {
			for (Model model : modelList)
				dtoList.add(ModelOutDto.fromEntityt(model));

		}
		return Response.success(dtoList);

	}
}
