package com.carservicestation.dtos_Customer;

import org.springframework.beans.BeanUtils;

import com.carservicestation.entities.Manufacturer;

public class MakeOutDto {
	private int makeId;
	private String makeName;
	
	
	public MakeOutDto() {
		super();
	}


	public MakeOutDto(int makeId, String makeName) {
		super();
		this.makeId = makeId;
		this.makeName = makeName;
	}


	public int getMakeId() {
		return makeId;
	}


	public void setMakeId(int makeId) {
		this.makeId = makeId;
	}


	public String getMakeName() {
		return makeName;
	}


	public void setMakeName(String makeName) {
		this.makeName = makeName;
	}


	@Override
	public String toString() {
		return "MakeOutDto [makeId=" + makeId + ", makeName=" + makeName + "]";
	}
	public static MakeOutDto fromEntityt(Manufacturer m) {
		MakeOutDto dto=new MakeOutDto();
		BeanUtils.copyProperties(m, dto);
		return dto;
		}

}
