package com.carservicestation.services;

import java.text.ParseException;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import java.util.List;
import java.util.Random;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservicestation.daos.Complaintdao;
import com.carservicestation.daos.Employeesdao;
import com.carservicestation.daos.Modeldao;
import com.carservicestation.daos.Orderdao;
import com.carservicestation.daos.Paymentdao;
import com.carservicestation.daos.Vehicledao;
import com.carservicestation.dtos_Customer.OrderInDto;
import com.carservicestation.dtos_Customer.OrderOutDto;
import com.carservicestation.dtos_Customer.Response;
import com.carservicestation.dtos_Customer.SubPackageOutDto;
import com.carservicestation.dtos_Customer.TrackInDto;
import com.carservicestation.dtos_Customer.VehicleOutDto;
import com.carservicestation.entities.Complaint;
import com.carservicestation.entities.Customer;
import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Model;
import com.carservicestation.entities.Order;
import com.carservicestation.entities.Payment;
import com.carservicestation.entities.SubPackage;
import com.carservicestation.entities.Vehicle;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	Modeldao modeldao;
	@Autowired
	SubPackageService subService;
	@Autowired
	CustomerService customerService;
	@Autowired
	Vehicledao vdao;
	@Autowired
	Orderdao orderdao;
	@Autowired
	Employeesdao empdao;
	@Autowired
	Complaintdao complaintdao;
	@Autowired
	Paymentdao paymentdao;

	@Override
	public Order bookOrder(OrderInDto odto) {
		Customer c = customerService.findByCustId(odto.getCustId());
		Model m = modeldao.findById(odto.getModelId()).orElse(null);
		SubPackage s = subService.findById(odto.getSubPckId());
		List<Vehicle> vlist = c.getVehicleList();
		Vehicle v = null;
		Vehicle myvehicle;
		if (vlist != null) {
			for (Vehicle veh : vlist) {
				if (veh.getVehicleRegNo().equals(odto.getVehicleRegNo())) {
					v = veh;
					break;
				}
			}
		}
		if (v == null) {
			v = new Vehicle();
			v.setVehicleRegNo(odto.getVehicleRegNo());
			v.addModelForVehicle(m);
			v.setCustomer(c);
			Vehicle vv = vdao.save(v);
			c.addVehicleInCustomerVehicleList(v);
			Customer cust = customerService.save(c);
		}
		Order o = new Order();
		o.setOrdersDate(new Date());
		o.setOrdersStatus("Booked");
		o.setRedeemStatus(0);
		o.setCustomer(c);
		o.setSubpackage(s);
		o.setVehicle(v);
		Payment pay = new Payment();
		pay.setPrice(o.getSubpackage().getPrice());
		pay.setPaymentDate(o.getOrdersDate());
		pay.setPaymentMode("UPI");
		int leftLimit = 48;
		int rightLimit = 122;
		int targetStringLength = 10;
		Random random = new Random();

		String generatedString = random.ints(leftLimit, rightLimit + 1)
				.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(targetStringLength)
				.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();
		pay.setTxnNo(generatedString);
		o.setPayment(pay);
		orderdao.save(o).getPayment();
		v.getOrderlist().add(o);
		vdao.save(v);
		return o;
	}

	@Override
	public List<Order> findAllOrderOfCust(int id) {
		Customer c = customerService.findByCustId(id);
		List<Order> olist = orderdao.findByCustomer(c);
		return olist;
	}

	@Override
	public Order useOrder(OrderInDto odto) {
		Customer c = customerService.findByCustId(odto.getCustId());
		Order o = orderdao.findById(odto.getOrdersId()).orElse(null);
		o.setRedeemStatus(1);
		o.setVehicleProblem(odto.getVehicleProblem());
		o.setServiceTime(odto.getServiceTime());
		try {
			o.setServiceDate(new SimpleDateFormat("yyyy-MM-dd").parse(odto.getServiceDate()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		o.setOrdersStatus("Pending");
		orderdao.save(o);
		return null;

	}

	@Override
	public Order bookAppointment(OrderInDto odto) {
		Customer c = customerService.findByCustId(odto.getCustId());
		Model m = modeldao.findById(odto.getModelId()).orElse(null);
		SubPackage s = subService.findById(odto.getSubPckId());
		List<Vehicle> vlist = c.getVehicleList();
		Vehicle v = null;
		Vehicle myvehicle;
		if (vlist != null) {
			for (Vehicle veh : vlist) {
				if (veh.getVehicleRegNo().equals(odto.getVehicleRegNo())) {
					v = veh;
					break;
				}
			}
		}
		if (v == null) {
			v = new Vehicle();
			v.setVehicleRegNo(odto.getVehicleRegNo());
			v.addModelForVehicle(m);
			v.setCustomer(c);
			Vehicle vv = vdao.save(v);
			c.addVehicleInCustomerVehicleList(v);
			Customer cust = customerService.save(c);
		}

		Order o = new Order();
		o.setOrdersDate(new Date());
		o.setOrdersStatus("Pending");
		o.setRedeemStatus(1);
		o.setCustomer(c);
		o.setSubpackage(s);
		o.setVehicle(v);
		o.setVehicleProblem(odto.getVehicleProblem());
		o.setServiceTime(odto.getServiceTime());
		try {
			o.setServiceDate(new SimpleDateFormat("yyyy-MM-dd").parse(odto.getServiceDate()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		Payment pay = new Payment();

		pay.setPrice(o.getSubpackage().getPrice());
		pay.setPaymentDate(o.getServiceDate());
		pay.setPaymentMode("Cash");

		int leftLimit = 48;
		int rightLimit = 122;
		int targetStringLength = 10;
		Random random = new Random();

		String generatedString = random.ints(leftLimit, rightLimit + 1)
				.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(targetStringLength)
				.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();

		pay.setTxnNo(generatedString);
		o.setPayment(pay);
		orderdao.save(o).getPayment();
		v.getOrderlist().add(o);
		vdao.save(v);
		return o;
	}

	@Override
	public Complaint addComplaint(TrackInDto tdto) {

		Customer c = customerService.findByCustId(tdto.getCid());
		Order o = orderdao.findByOrdersIdAndCustomer(tdto.getOid(), c);
		if (o == null)
			return null;
		Complaint complaint = new Complaint();
		complaint.setComplaintDate(new Date());
		complaint.setComplaintSubject(tdto.getComplaintSubject());
		complaint.setComplaintDetail(tdto.getComplaintDetail());
		complaint.setCustomer(c);
		complaint.setOrder(o);
		complaint = complaintdao.save(complaint);
		orderdao.findById(tdto.getOid()).orElse(null).getComplaintlist().forEach(System.out::println);
		customerService.findByCustId(tdto.getCid()).getComplaintList().forEach(System.out::println);
		return complaint;
	}

	@Override
	public List<Complaint> getAllComplaint(int custId) {
		Customer c = customerService.findByCustId(custId);

		List<Complaint> complaintlist = complaintdao.findByCustomer(c);
		return complaintlist;
	}

}
