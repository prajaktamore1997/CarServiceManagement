package com.carservicestation.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carservicestation.entities.Vehicle;
@Repository
public interface Vehicledao extends JpaRepository<Vehicle , Integer>{
	
}
