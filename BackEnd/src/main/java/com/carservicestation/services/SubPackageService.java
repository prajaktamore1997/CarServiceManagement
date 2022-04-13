package com.carservicestation.services;

import java.util.List;
import com.carservicestation.entities.Customer;
import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.SubPackage;

public interface SubPackageService {
List<SubPackage>	findByMainPck(MainPackage m);
SubPackage findById(int id);


}
