package com.carservicestation.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.carservicestation.entities.MainPackage;
@Repository
public interface MainPackagedao extends JpaRepository<MainPackage, Integer> {

	@Query("from MainPackage m where m.mainPckName=?1")
	MainPackage findByName(String mainPckName);

	
}
