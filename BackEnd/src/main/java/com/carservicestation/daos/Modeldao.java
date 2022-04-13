package com.carservicestation.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;
@Repository
public interface Modeldao extends JpaRepository<Model, Integer>{
List<Model> findByManufacturer(Manufacturer m);
}
