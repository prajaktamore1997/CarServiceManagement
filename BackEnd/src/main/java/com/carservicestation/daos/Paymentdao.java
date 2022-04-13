package com.carservicestation.daos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.carservicestation.entities.Payment;

public interface Paymentdao extends JpaRepository<Payment, Integer>{

}
