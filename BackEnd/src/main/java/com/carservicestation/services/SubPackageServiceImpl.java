package com.carservicestation.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.carservicestation.daos.SubPackagedao;
import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.SubPackage;

@Service
@Transactional
public class SubPackageServiceImpl implements SubPackageService{
@Autowired
SubPackagedao subPackagedao;

	@Override
	public List<SubPackage> findByMainPck(MainPackage m) {
		return subPackagedao.findByMainPackage(m);
	}
	@Override
	public SubPackage findById(int id) {
		Optional<SubPackage> s = subPackagedao.findById(id);
		return s.orElse(null);
	}
}
