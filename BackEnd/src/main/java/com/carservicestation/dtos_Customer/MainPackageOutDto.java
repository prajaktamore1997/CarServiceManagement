package com.carservicestation.dtos_Customer;


import org.springframework.beans.BeanUtils;
import com.carservicestation.entities.MainPackage;


public class MainPackageOutDto {

	int mainPckId;
	String mainPckName;
	
	public MainPackageOutDto() {
	}


	public MainPackageOutDto(int mainPckId, String mainPckName) {
		this.mainPckId = mainPckId;
		this.mainPckName = mainPckName;
	}


	public int getMainPckId() {
		return mainPckId;
	}


	public void setMainPckId(int mainPckId) {
		this.mainPckId = mainPckId;
	}


	public String getMainPckName() {
		return mainPckName;
	}


	public void setMainPckName(String mainPckName) {
		this.mainPckName = mainPckName;
	}


	public static MainPackageOutDto fromEntity(MainPackage entity) {
		MainPackageOutDto dto = new MainPackageOutDto();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
	@Override
	public String toString() {
		return "MainPackage [mainPckId=" + mainPckId + ", mainPckName=" + mainPckName + "]";
	}


	}
