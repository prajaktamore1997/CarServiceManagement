package com.carservicestation.services;
import com.carservicestation.entities.Customer;
public interface CustomerService {
	 Customer authenticate(String email,String password) ;
	 Customer save(Customer customer) ;
	 Customer findByCustId(int id) ;
	 Customer findByEmail(String email) ;
	 Customer findByEmailAndPassword(String email,String password) ;
	 Customer delete(Customer customer) ;
	Customer updatePassword(String email, String moBileNumber, String newPassward);	 
}
