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

import com.carservicestation.dtos_Customer.Response;
import com.carservicestation.dtos_Customer.SubPackageOutDto;
import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.SubPackage;
import com.carservicestation.services.MainPackageService;
import com.carservicestation.services.SubPackageService;

@CrossOrigin
@RequestMapping("/services")
@RestController
public class SubPackageController {
	@Autowired
	SubPackageService subPackageService;
	@Autowired
	MainPackageService mainPackageService;

	@GetMapping("/subpackages/{mpckId}")
	public ResponseEntity<?> getSubPackagesByMainPck(@PathVariable int mpckId) {
		MainPackage mp = mainPackageService.findById(mpckId);

		List<SubPackage> splist = subPackageService.findByMainPck(mp);

		List<SubPackageOutDto> sbdtolist = new ArrayList<SubPackageOutDto>();
		for (SubPackage subPck : splist) {
			if (subPck != null && subPck.getStatus() == 1)
				sbdtolist.add(SubPackageOutDto.fromEntity(subPck));
		}
		sbdtolist.forEach(System.out::println);
		if (sbdtolist != null)
			return Response.success(sbdtolist);
		return Response.error(sbdtolist);
	}

	@GetMapping("/repair")
	public ResponseEntity<?> getRepairMaintenacePackage() {
		MainPackage mp = mainPackageService.getMainPckByName("Repair and Maintenance");
		List<SubPackage> splist = subPackageService.findByMainPck(mp);
		List<SubPackageOutDto> sbdtolist = new ArrayList<SubPackageOutDto>();
		for (SubPackage subPck : splist) {
			if (subPck != null && subPck.getStatus() == 1)
				return Response.success(SubPackageOutDto.fromEntity(subPck));
		}
		if (sbdtolist == null)
			return Response.error(sbdtolist);
		return null;
	}
}
