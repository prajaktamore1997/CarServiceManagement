package com.carservicestation.services;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.carservicestation.daos.MainPackagedao;
import com.carservicestation.entities.MainPackage;

@Transactional
@Service
public class MainPackageServiceImpl implements MainPackageService {
	@Autowired
	private MainPackagedao mainPackage;

	public List<MainPackage> getAllMainPackage() {
		return mainPackage.findAll();

	}

	public MainPackage findById(int id) {
		Optional<MainPackage> mp = mainPackage.findById(id);
		return mp.orElse(null);
	}

	@Override
	public MainPackage getMainPckByName(String mainPckNme) {
		MainPackage mainpck = mainPackage.findByName(mainPckNme);
		return mainpck;
	}
}
