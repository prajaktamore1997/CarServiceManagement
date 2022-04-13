package com.carservicestation.services;

import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.carservicestation.daos.Customersdao;
import com.carservicestation.entities.Customer;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	Customersdao customersdao;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Override
	public Customer authenticate(String email, String password) {
		Customer customer = findByEmail(email);
		
		if (customer != null  && passwordEncoder.matches(password, customer.getPassword())) {
				return customer;
		}
		return null;
	}

	@Override
	public Customer updatePassword(String email, String mobileNumber, String newPassword) {
		Customer customer = findByEmail(email);
		if (customer != null) {
			if (customer.getMobileNo().equals(mobileNumber)) {
				String encPassword = passwordEncoder.encode(newPassword);
				customer.setPassword(encPassword);
				customer = this.save(customer);
				return customer;
			} else
				return null;
		}
		return null;
	}

	@Override
	public Customer save(Customer customer) {
		String encPassword = passwordEncoder.encode(customer.getPassword());
		customer.setPassword(encPassword);
		return customersdao.save(customer);
	}

	@Override
	public Customer findByCustId(int id) {
		Optional<Customer> cust = customersdao.findById(id);
		return cust.orElse(null);
	}

	@Override
	public Customer findByEmail(String email) {
		return customersdao.findByEmail(email);
	}

	@Override
	public Customer findByEmailAndPassword(String email, String password) {
		return null;
	}

	@Override
	public Customer delete(Customer customer) {
		return null;
	}

}
