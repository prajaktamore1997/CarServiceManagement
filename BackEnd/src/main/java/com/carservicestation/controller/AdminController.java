package com.carservicestation.controller;

import java.util.Arrays;
import java.util.List;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;
import com.carservicestation.dtos.AnnouncementDto;
import com.carservicestation.dtos.Complaintdto;
import com.carservicestation.dtos.Credential;
import com.carservicestation.dtos.CredentialPassword;
import com.carservicestation.dtos.Customerdto;
import com.carservicestation.dtos.EmpOnOrderFromOrder;
import com.carservicestation.dtos.Employeedto;
import com.carservicestation.dtos.MainSubPckdto;
import com.carservicestation.dtos.ManufacturerModeldto;
import com.carservicestation.dtos.Manufacturerdto;
import com.carservicestation.dtos.Modeldto;
import com.carservicestation.dtos.Orderdto;
import com.carservicestation.dtos.PendingOrdersdto;
import com.carservicestation.dtos.SubPackagedto;
import com.carservicestation.entities.Announcement;
import com.carservicestation.entities.Complaint;
import com.carservicestation.entities.Customer;
import com.carservicestation.entities.Employee;
import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;
import com.carservicestation.entities.Order;
import com.carservicestation.entities.SubPackage;
import com.carservicestation.services.AdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService AdminService;

	// admin login
	@PostMapping("/{id}")
	public ResponseEntity<Employee> getAdmin(@ModelAttribute Credential cred, @PathVariable("id") int id) {
		Employee c = AdminService.getAdmin(cred.getemail());
		return ResponseEntity.ok(c);
	}
	
	//forget-password
	@PostMapping("/forget-password")
	public ResponseEntity<String> chnagePassword(@RequestBody CredentialPassword cred) {
		Employee emp = AdminService.forgetPassword(cred);
		if(emp==null)
		return ResponseEntity.ok("not");
		return ResponseEntity.ok("done");
	}
	
	
	// to fetch data from db
	@GetMapping("/announcements/")
	public ResponseEntity<Stream<AnnouncementDto>> getAnnouncements() {
		List<Announcement> list = AdminService.getAllAnnouncement();
		Stream<AnnouncementDto> dtos = list.stream().map((announce) -> AnnouncementDto.fromEntity(announce));
		// entityManager.detach(list);
		list = null;
		return ResponseEntity.ok(dtos);

	}

	// to save and update announcement
	@PostMapping("/announcement/")
	public ResponseEntity<String> saveAnnouncement(@RequestBody AnnouncementDto dto) {
		Announcement data = AnnouncementDto.toEntity(dto);
		if (AdminService.saveAnnouncement(data) != null)
			return ResponseEntity.ok("Saved");
		return ResponseEntity.ok("Not Save");

	}

	// to delete announcement
	@DeleteMapping("/announcement/{id}")
	public ResponseEntity<String> deleteAnnouncement(@PathVariable("id") String id) {
		if (AdminService.deleteAnnouncement(id))
			return ResponseEntity.ok("Delete");
		return ResponseEntity.ok("Not Delete");

	}

	// save customers
	@PostMapping("/save-customer")
	public ResponseEntity<String> saveCustomer(@RequestBody Customerdto cdto) {
		Customer c = Customerdto.toEntity(cdto);
		c = AdminService.saveCustomer(c);
		if (c != null)
			return ResponseEntity.ok("Save");
		return ResponseEntity.ok("Not saved");

	}

	// Employee

	@PostMapping("/save-employee")
	public ResponseEntity<String> saveEmployee(@RequestBody Employeedto edto) {
System.out.println(edto);
		Employee e = Employeedto.toEntity(edto);
		e = AdminService.saveEmployee(e);
		if (e != null)
			return ResponseEntity.ok("Save");
		return ResponseEntity.ok("Not saved");

	}

	// reports

	@GetMapping("/customers") // convert stream into other object using arrays.asList( ) way -1
	public ResponseEntity<List<Object>> getAllCustomers() {
		List<Customer> custlist = AdminService.getAllCustomers();
		Object[] cdto = custlist.stream().map((c) -> Customerdto.fromEntity(c)).toArray();
		List<Object> list = Arrays.asList(cdto);
		list.forEach(System.out::println);
		return ResponseEntity.ok(list);
	}

	// delete-customer

	@DeleteMapping("/delete-customer/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable String id) {
		AdminService.deleteCustomer(id);
		return ResponseEntity.ok("Deleted");

	}

	@GetMapping("/employees/") // convert stream into other object using Collectors.toList( ) way -2 given b
								// Collectors
	public ResponseEntity<List<Employeedto>> getAllEmployees() {
		List<Employee> emplist = AdminService.getAllEmployees();
		List<Employeedto> edto = emplist.stream().map((e) -> Employeedto.fromEntity(e)).collect(Collectors.toList());
		edto.forEach(System.out::println);
		// entityManager.detach(emplist);
		emplist = null;
		return ResponseEntity.ok(edto);

	}

	// delete Employee

	@DeleteMapping("/delete-employee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable String id) {
		AdminService.deleteEmployee(id);
		return ResponseEntity.ok("Deleted");

	}

	// services
	@GetMapping("/servicepck/")
	public ResponseEntity<List<MainPackage>> getAllmainPck() {
		List<MainPackage> pck = AdminService.getMainPck();
		return ResponseEntity.ok(pck);

	}

	@DeleteMapping("/delete-main/{id}")
	public ResponseEntity<String> deleteMainPck(@PathVariable String id) {
		AdminService.deleteMainPck(id);
		return ResponseEntity.ok("Deleted");

	}

	// add-more-sub //adding more subpackage in existing mainpck
	@PutMapping("/add-more-sub/{id}")
	public ResponseEntity<String> addMoreSubPck(@PathVariable String id, @RequestBody SubPackagedto sub) {
		AdminService.subpcksave(id, sub);
		return ResponseEntity.ok("Added");

	}

	// delete subpackage data
	@DeleteMapping("/servicepck/{id}")
	public ResponseEntity<String> deletesubPck(@PathVariable String id) {
		if (AdminService.deleteSubPck(id))
			return ResponseEntity.ok("delete");
		return ResponseEntity.ok("Not delete");
	}

	// UPDATE subpackage data
	@PutMapping("/servicepck/{id}")
	public ResponseEntity<String> updatesubPck(@PathVariable String id,
			@RequestBody(required = false) MainSubPckdto mainsub) {
		SubPackage sub = MainSubPckdto.toEntitysubpck(mainsub);

		MainPackage main = MainSubPckdto.toEntity(mainsub);
		main.setMainPckId(mainsub.getMakeId());
		main.addsubpck(sub);
		SubPackage maindb = AdminService.subpcksave(sub);
		if (maindb != null)
			return ResponseEntity.ok("Updated");
		
		return ResponseEntity.ok("Not Updated");
	}

	// save or insert subpackage data into db
	@PostMapping("/savemainsubpck/{id}")
	public ResponseEntity<String> saveMainSubPck(@RequestBody(required = false) MainSubPckdto mainsub,
			@PathVariable String id) {
		SubPackage sub = MainSubPckdto.toEntitysubpck(mainsub);
		MainPackage main = MainSubPckdto.toEntity(mainsub);

		MainPackage maindb = AdminService.getMainPckByName(main);
		if (maindb != null && main.getMainPckName().equalsIgnoreCase(main.getMainPckName())) {
			maindb.addsubpck(sub);
			sub = AdminService.subpcksave(sub);
			return ResponseEntity.ok("Saved");
		}
		main.addsubpck(sub);
		main = AdminService.MainPckSave(main);
		sub = AdminService.subpcksave(sub);
		return ResponseEntity.ok("Saved");

	}

	// orders

	@GetMapping("/neworders") // fetch all orders where status == pending
	public ResponseEntity<List<PendingOrdersdto>> getPendingOrders() {
		List<Order> pendinglist = AdminService.getOrders();
		List<PendingOrdersdto> list = pendinglist.stream().map((o) -> PendingOrdersdto.fromEntity(o))
				.collect(Collectors.toList());
		pendinglist = null;
		return ResponseEntity.ok(list);

	}
	/// get-info

	@GetMapping("/get-info/{id}") // fetch all orders where emp == {id}
	public ResponseEntity<List<PendingOrdersdto>> getOrderOfEmp(@PathVariable String id) {
		List<Order> pendinglist = AdminService.geOrderOfEmp(id);
		List<PendingOrdersdto> list = pendinglist.stream().map((o) -> PendingOrdersdto.fromEntity(o))
				.collect(Collectors.toList());
		list.forEach(System.out::println);
		// entityManager.detach(pendinglist);
		pendinglist = null;

		return ResponseEntity.ok(list);

	}

	@GetMapping("/get-order-emp-info/{id}") // fetch all orders where emp == {id}
	public ResponseEntity<Object> getOrderOnEmp(@PathVariable String id) {
		Employee e = AdminService.getEmpOnOrder(id);
		e.setPassword("****");
		return ResponseEntity.ok(e);

	}

	@PutMapping("/emp-assign-order") // update empid in order table -- Assign emp for order
	public ResponseEntity<String> assignEmpForOrder(@RequestBody Orderdto orderdto) {
		if (AdminService.updateOrder(orderdto.getEmpId(), orderdto.getOrdersId(), orderdto.getOrdersStatus()) == 1)
			return ResponseEntity.ok("Assign");
		return ResponseEntity.ok("Error During Assign");
	}

	// fetchfreeemployee
	// not completed bec i we want compare state of list of each object with another
	// list of state of obj
//	@GetMapping("/fetchfreeemployee") // fetch all orders where status == pending
//	public ResponseEntity<String> getFreeEmployee() {
//		List<Order> OrderList = AdminService.getFreeEmpFromOrder();
//		List<Employee> emplist = AdminService.getAllEmployees();
//		List<EmpOnOrderFromOrder> listOfFreeEmp = OrderList.stream()
//				.map((order) -> EmpOnOrderFromOrder.fromEntity(order)).collect(Collectors.toList()); // getOrderEMployee
//																										// object
//		List<Employee> elist = EmpOnOrderFromOrder.getFreeEmp(listOfFreeEmp, emplist);
//		List<Employeedto> edto = elist.stream().map((e) -> Employeedto.fromEntity(e)).collect(Collectors.toList());
//		edto.forEach(System.out::println);
////		
////		emplist.forEach(System.out::println);
//
//		return ResponseEntity.ok("WORKINg");
//
//	}

	// session-end
	@GetMapping("/session-end") // fetch all orders where status == pending
	public ResponseEntity<String> endSession() {
		AdminService.endSession();
		return ResponseEntity.ok("ok");

	}

	// Complaint

	@GetMapping("/get-cust-complaint/{id}") // fetch all Complaint where custId == {id}
	public ResponseEntity<Stream<Complaintdto>> getComplaintOfCust(@PathVariable String id) {
		List<Complaint> clist = AdminService.getAllComplaint(id);
		Stream<Complaintdto> dtolist = clist.stream().map((cust) -> Complaintdto.fromEntity(cust));
		return ResponseEntity.ok(dtolist);

	}

	@GetMapping("/get-emp-complaint/{id}") // fetch all Complaint where custId == {id}
	public ResponseEntity<Stream<Complaintdto>> getComplaintOfEmp(@PathVariable String id) {
		List<Complaint> clist = AdminService.getAllOrderComplaint(id);
		Stream<Complaintdto> dtolist = clist.stream().map((cust) -> Complaintdto.fromEntity(cust));
		return ResponseEntity.ok(dtolist);

	}

	@PostMapping("/res-to-complaint/{id}") // fetch all Complaint where custId == {id}
	public ResponseEntity<String> setResponseOfComplaint(@PathVariable String id, @RequestBody String reply) {

		if (reply != null) {
			reply = reply.split(":")[1];
			reply = reply.substring(1, reply.length() - 2);

//			if()
//				return ResponseEntity.ok("Try again");
			AdminService.setReposoneComplaint(reply.trim(), id);
			return ResponseEntity.ok("Send");
		}

		return ResponseEntity.ok("Try again");

	}

	// delete complaint

	@DeleteMapping("/res-to-complaint/{id}") // fetch all Complaint where custId == {id}
	public ResponseEntity<String> deleteComplaint(@PathVariable String id) {
		if (AdminService.deleteComplaintFromComplaint(id))
			return ResponseEntity.ok("Delete");
		return ResponseEntity.ok("Error During Delete");
	}

	// Company Car

	// Car model
	@GetMapping("/get-all-vehicles") // get all
	public ResponseEntity<List<Manufacturerdto>> getAllVehicles() {

		List<Manufacturer> clist = AdminService.getAllVehicles();
		List<Manufacturerdto> dtolist = clist.stream().map((car) -> Manufacturerdto.fromEntity(car))
				.collect(Collectors.toList());
		return ResponseEntity.ok(dtolist);

	}

	// getmodels
	@GetMapping("/get-models/{id}")
	public ResponseEntity<List<Modeldto>> getmodels(@PathVariable String id) {
		System.out.println(id);
		List<Model> modellist = AdminService.getAllModels(id);
		List<Modeldto> mdto = modellist.stream().map((e) -> Modeldto.fromEntity(e)).collect(Collectors.toList());
		return ResponseEntity.ok(mdto);
	}

	@PostMapping("/save-company/{id}")
	public ResponseEntity<String> editModel(@RequestBody Modeldto dto, @PathVariable String id) {

		AdminService.editModel(id, Modeldto.toEntity(dto));

		return ResponseEntity.ok("Updated");

	}

	@DeleteMapping("/delete-model/{id}")
	public ResponseEntity<String> deleteModel(@PathVariable String id) {

		AdminService.deleteModel(id);

		return ResponseEntity.ok("Deleted");

	}

//		Adding new Company
	@PostMapping("/save-company")
	public ResponseEntity<String> SaveCompany(@RequestBody ManufacturerModeldto dto) {
		if (AdminService.AddedNewCompany(dto) != null)
			return ResponseEntity.ok("New_Added");
		return ResponseEntity.ok("Error During_Added");
	}

}
