package com.carservicestation.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carservicestation.entities.Cart;

public  interface Cartdao extends JpaRepository<Cart, Integer>{
	List<Cart> findByCustId(int id);
	void deleteByCustIdAndSubPckId(int custId,int subPckId);
	Cart findByCustIdAndSubPckId(int custId,int subPckId);
}
