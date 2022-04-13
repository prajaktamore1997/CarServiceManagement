package com.carservicestation.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.carservicestation.entities.Customer;
import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Order;

@Repository
public interface Orderdao extends JpaRepository<Order, Integer>{
	@Query("from Order o where  o.customer=?1 ORDER BY o.ordersDate desc")
	List<Order> findByCustomer(Customer c);
	Order findByOrdersIdAndCustomer(int id,Customer c);

	

}
