package com.carservicestation.controller_Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.carservicestation.dtos_Customer.CustomerInDto;
import com.carservicestation.dtos_Customer.CustomerOutDto;
import com.carservicestation.dtos_Customer.Response;
import com.carservicestation.entities.Customer;
import com.carservicestation.services.CustomerService;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class CustomerControllerImpl {
	@Autowired
	private CustomerService customerService;

	@PostMapping("/singup")
	public ResponseEntity<?> save(CustomerInDto customerDto) {
		Customer customer = CustomerInDto.toEntity(customerDto);
		customer = customerService.save(customer);
		CustomerOutDto customerOutDto = CustomerOutDto.fromEntity(customer);

		if (customerOutDto == null)
			return Response.error(customerOutDto);
		return Response.success(customerOutDto);
	}

	@PostMapping("/singin")
	public ResponseEntity<?> authenticate(CustomerInDto customerDto) {
		Customer customer = CustomerInDto.toEntity(customerDto);
		Customer cust = customerService.authenticate(customer.getEmail(), customer.getPassword());
		if (cust == null)
			return Response.error(new String("invalid credential"));
		CustomerOutDto customerOutDto = CustomerOutDto.fromEntity(cust);
		return Response.success(customerOutDto);
	}

	@PostMapping("/updatepassword")
	public ResponseEntity<?> updateUserdata(CustomerInDto customerDto) {
		Customer customer = CustomerInDto.toEntity(customerDto);
		Customer cust = customerService.updatePassword(customer.getEmail(), customer.getMobileNo(),
				customer.getPassword());
		if (cust == null)
			return Response.error(new String("invalid Email And Mobile Number"));
		CustomerOutDto customerOutDto = CustomerOutDto.fromEntity(customer);
		if (customerOutDto == null)
			return Response.error(customerOutDto);
		return Response.success(customerOutDto);
	}

	@GetMapping("/get/{custId}")
	public ResponseEntity<?> getUserById(@PathVariable int custId) {
		Customer customer = customerService.findByCustId(custId);
		CustomerOutDto customerOutDto = CustomerOutDto.fromEntity(customer);
		if (customerOutDto == null)
			return Response.error(customerOutDto);
		return Response.success(customerOutDto);
	}

	@PostMapping("/updateprofile/{CustId}")
	public ResponseEntity<?> updateProfileDetail(@PathVariable int CustId, CustomerInDto customerDto) {
		Customer customer = customerService.findByCustId(CustId);
		customer.setName(customerDto.getName());
		customer.setEmail(customerDto.getEmail());
		customer.setMobileNo(customerDto.getMobileNo());
		customer.setCity(customerDto.getCity());
		customer.setArea(customerDto.getArea());
		customer.setPincode(customerDto.getPincode());
		customer.setAddress(customerDto.getAddress());

		customer = customerService.save(customer);
		CustomerOutDto customerOutDto = CustomerOutDto.fromEntity(customer);

		if (customerOutDto == null)
			return Response.error(customerOutDto);
		return Response.success(customerOutDto);
	}
}