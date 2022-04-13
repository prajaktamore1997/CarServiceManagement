package com.carservicestation.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carservicestation.entities.Complaint;
import com.carservicestation.entities.Customer;

public interface Complaintdao extends JpaRepository<Complaint, Integer>{
List<Complaint> findByCustomer(Customer c);
}
