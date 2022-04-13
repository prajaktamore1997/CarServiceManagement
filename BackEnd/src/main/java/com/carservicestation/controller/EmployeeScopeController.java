package com.carservicestation.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.carservicestation.dtos.Credential;
import com.carservicestation.dtos.Employeedto;
import com.carservicestation.dtos.ReadyOrdersdto;
import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Order;
import com.carservicestation.services.EmployeeScopeService;

@CrossOrigin
@RestController
@RequestMapping("/emp")
public class EmployeeScopeController {


	@Autowired
	private EmployeeScopeService empscope;
	//get-info
	
	@GetMapping("/get-info/{id}")
	public ResponseEntity<Employeedto> getEmployee(@PathVariable("id") String id) {
		Employee e = empscope.getEmployee(id);
		Employeedto person = Employeedto.fromEntity(e);
		return ResponseEntity.ok(person);
	}
	
	//update-info
	
	@PostMapping("/update-info")
	public ResponseEntity<String> getEmployee(@RequestBody Employeedto dto) {
		Employee person = Employeedto.toEntity(dto);
		Employee e = empscope.update(person);
		if(e!=null)
		return ResponseEntity.ok("Updated");
		return ResponseEntity.ok("Error During Updated");
	}
	
	//get-emp-orders
	
	@GetMapping("/get-emp-orders/{id}")
	public ResponseEntity<List<ReadyOrdersdto>> getOrderOfEmp(@PathVariable("id") String id) {
		List<Order> orderList = empscope.getempOrders(id);
		List<ReadyOrdersdto> orderdto = orderList.stream().map((order)->ReadyOrdersdto.fromEntity(order)).collect(Collectors.toList());
		return ResponseEntity.ok(orderdto);
	}
	
	//update working status
	@GetMapping("/emp-work-status/{eid}/{oid}/{status}")
	public ResponseEntity<String> changeStatus(@PathVariable("eid") String empid,@PathVariable("oid") String orderid,@PathVariable("status") String workStatus) {
		if(empscope.changeWorkingstatus(empid,orderid,workStatus))
		return ResponseEntity.ok("Changed");
		return ResponseEntity.ok("Error During Changing");
	}
}
