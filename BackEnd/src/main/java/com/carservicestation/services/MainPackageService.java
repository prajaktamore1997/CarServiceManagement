package com.carservicestation.services;

import java.util.List;

import com.carservicestation.entities.MainPackage;

public interface MainPackageService {
	List<MainPackage>  getAllMainPackage();
	MainPackage findById(int mpckId);
	MainPackage getMainPckByName(String mainPckNme);

}
