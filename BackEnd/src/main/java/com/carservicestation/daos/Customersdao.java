package com.carservicestation.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carservicestation.entities.Customer;


@Repository
public interface Customersdao extends JpaRepository<Customer, Integer> {
	Customer findByEmailAndPassword(String email ,String password) ;
	 Customer findByEmail(String email) ;
}
