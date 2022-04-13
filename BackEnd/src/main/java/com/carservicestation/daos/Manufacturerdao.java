package com.carservicestation.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carservicestation.entities.Manufacturer;
@Repository
public interface Manufacturerdao extends JpaRepository<Manufacturer, Integer>{

}
