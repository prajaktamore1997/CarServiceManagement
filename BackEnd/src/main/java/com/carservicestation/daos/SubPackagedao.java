package com.carservicestation.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import org.springframework.data.jpa.repository.Query;
import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.SubPackage;
@Repository
public interface SubPackagedao extends JpaRepository<SubPackage, Integer> {
	List<SubPackage> findByMainPackage(MainPackage m);
	
}
