package com.carservicestation.controller_Customer;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carservicestation.dtos_Customer.ComplaintOutDto;
import com.carservicestation.dtos_Customer.EmployeeOutDto;
import com.carservicestation.dtos_Customer.OrderInDto;
import com.carservicestation.dtos_Customer.OrderOutDto;
import com.carservicestation.dtos_Customer.Response;
import com.carservicestation.dtos_Customer.SubPackageOutDto;
import com.carservicestation.dtos_Customer.TrackInDto;
import com.carservicestation.dtos_Customer.VehicleOutDto;
import com.carservicestation.entities.Cart;
import com.carservicestation.entities.Complaint;
import com.carservicestation.entities.Order;
import com.carservicestation.services.CartService;
import com.carservicestation.services.CustomerService;
import com.carservicestation.services.OrderService;
import com.carservicestation.services.SubPackageService;
import com.carservicestation.services.VehicleService;

@CrossOrigin
@RequestMapping("/order")
@RestController
public class OrdersController {
	@Autowired
	SubPackageService subPackageService;
	@Autowired
	VehicleService vehicleService;
	@Autowired
	CustomerService customerService;
	@Autowired
	OrderService orderService;
	@Autowired
	CartService cartService;

	@PostMapping("/payment")
	public ResponseEntity<?> bookOrder(OrderInDto o) {
		Order order = orderService.bookOrder(o);
		if (order != null)
			return Response.success("successfully package purchased");
		return Response.error(new String("failed to purchase package ..try again "));

	}

	@PostMapping("/useservice")
	public ResponseEntity<?> useOrder(OrderInDto o) {
		Order order = orderService.useOrder(o);
		return Response.success("successfully appointment booked");
	}

	@GetMapping("/getall/{id}")
	public ResponseEntity<?> getAllOrders(@PathVariable int id) {

		List<Order> olist = orderService.findAllOrderOfCust(id);
		List<OrderOutDto> oDtoList = new ArrayList<OrderOutDto>();
		for (Order order : olist) {
			OrderOutDto odto = OrderOutDto.fromEntity(order);
			if (order.getVehicle() != null)
				odto.setCustomerVehicle(VehicleOutDto.fromEntity(order.getVehicle()));
			if (order.getSubpackage() == null) {
				SubPackageOutDto subdto = new SubPackageOutDto();
				subdto.setSubPckName("service not mentioned");
			} else {
				odto.setSubPck(SubPackageOutDto.fromEntity(order.getSubpackage()));
			}
			oDtoList.add(odto);
		}
		return Response.success(oDtoList);
	}

	@PostMapping("/gestatus")
	public ResponseEntity<?> getOrderStatus(TrackInDto tdto) {
		List<Order> olist = orderService.findAllOrderOfCust(tdto.getCid());

		List<OrderOutDto> oDtoList = new ArrayList<OrderOutDto>();
		for (Order order : olist) {
			OrderOutDto odto = OrderOutDto.fromEntity(order);
			if (order.getOrdersId() == tdto.getOid()) {
				if (order.getEmployee() != null) {
					odto.setEmployeeOutDto(EmployeeOutDto.fromEntity(order.getEmployee()));

				}
				if (order.getVehicle() != null)
					odto.setCustomerVehicle(VehicleOutDto.fromEntity(order.getVehicle()));
				if (order.getSubpackage() != null)
					odto.setSubPck(SubPackageOutDto.fromEntity(order.getSubpackage()));
				oDtoList.add(odto);
				return Response.success(oDtoList);
			}

		}

		return Response.success(oDtoList);

	}

	@PostMapping("/repair")
	public ResponseEntity<?> bookAppoitmentForRepair(OrderInDto o) {
		Order order = orderService.bookAppointment(o);
		if (order != null)
			return Response.success(new String("successfully Appointment booked"));

		return Response.error(new String("failed to Book Appointment complaint"));
	}

	@PostMapping("/complaint")
	public ResponseEntity<?> addComplaint(TrackInDto tdto) {
		Complaint complaint = orderService.addComplaint(tdto);
		if (complaint != null) {
			return Response.success(new String("successfully complaint booked"));
		}
		return Response.error(new String("enter valid order id for complaint"));

	}

	@GetMapping("/viewcomplaint/{id}")
	public ResponseEntity<?> getAllCompplaint(@PathVariable int id) {
		List<Complaint> complaintlist = orderService.getAllComplaint(id);
		List<ComplaintOutDto> oDtoList = new ArrayList<ComplaintOutDto>();
		int counter = 1;
		for (Complaint complaint : complaintlist) {
			ComplaintOutDto dto = new ComplaintOutDto();
			dto.setComplaintId(counter++);
			dto.setComplaintDate(complaint.getComplaintDate());
			dto.setComplaintSubject(complaint.getComplaintSubject());
			dto.setComplaintDetail(complaint.getComplaintDetail());
			dto.setComplaintResponse(complaint.getComplaintResponse());
			dto.setOrdersId(complaint.getOrder().getOrdersId());
			dto.setSubPckName(complaint.getOrder().getSubpackage().getSubPckName());
			oDtoList.add(dto);
		}

		return Response.success(oDtoList);

	}

	@PostMapping("/saveincart")
	public ResponseEntity<?> addIntoCart(OrderInDto tdto) {
		Cart cart = cartService.addIntoCart(tdto);
		if (cart == null)
			return Response.success(new String("alredy Added in cart "));
		return Response.success(new String("Successfully Added in Cart"));

	}

	@GetMapping("/getallcart/{id}")
	public ResponseEntity<?> getCartData(@PathVariable int id) {
		List<SubPackageOutDto> subPckOutdoList = cartService.getCartOfCust(id);
		if (subPckOutdoList != null)
			return Response.success(subPckOutdoList);
		return Response.error(new String("NO PACAKAGE IN CART "));
	}

	@PostMapping("/removefromcart")
	public ResponseEntity<?> removeFromCart(OrderInDto tdto) {
		cartService.removeFromCart(tdto);
		return Response.success(new String("removed from  Cart"));

	}

}
