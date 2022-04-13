package com.carservicestation.controller_Customer;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carservicestation.dtos_Customer.MainPackageOutDto;
import com.carservicestation.dtos_Customer.Response;
import com.carservicestation.entities.MainPackage;

import com.carservicestation.services.MainPackageService;

@CrossOrigin
@RequestMapping("/services")
@RestController
public class MainPackageController {
	@Autowired
	MainPackageService mainPackageService;

	@GetMapping("/mainpackages")
	public ResponseEntity<?> getAllMainPackage() {
		List<MainPackage> list = mainPackageService.getAllMainPackage();
		List<MainPackageOutDto> dtolist = new ArrayList<MainPackageOutDto>();
		for (MainPackage mainPck : list) {
			dtolist.add(MainPackageOutDto.fromEntity(mainPck));
		}

		return Response.success(dtolist);

	}

}
