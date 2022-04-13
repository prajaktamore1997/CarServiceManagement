package com.carservicestation.services;

import java.util.List;

import com.carservicestation.dtos_Customer.OrderInDto;
import com.carservicestation.dtos_Customer.TrackInDto;
import com.carservicestation.entities.Complaint;
import com.carservicestation.entities.Order;

public interface OrderService {
	public Order bookOrder(OrderInDto odto);

	public List<Order> findAllOrderOfCust(int id);

	public Order useOrder(OrderInDto odto);

	public Order bookAppointment(OrderInDto odto);

	public List<Complaint> getAllComplaint(int custId);

	public Complaint addComplaint(TrackInDto dto);

}
