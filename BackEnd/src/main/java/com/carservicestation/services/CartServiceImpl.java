package com.carservicestation.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservicestation.daos.Cartdao;
import com.carservicestation.dtos_Customer.OrderInDto;
import com.carservicestation.dtos_Customer.SubPackageOutDto;
import com.carservicestation.entities.Cart;

@Service
@Transactional
public class CartServiceImpl implements CartService {
	@Autowired
	Cartdao cartdao;
	@Autowired
	SubPackageService subPackageService;
	@Autowired
	VehicleService vehicleService;
	@Autowired
	CustomerService customerService;
	@Autowired
	OrderService orderService;

	@Override
	public Cart addIntoCart(OrderInDto tdto) {
		Cart c = cartdao.findByCustIdAndSubPckId(tdto.getCustId(), tdto.getSubPckId());
		if (c != null)
			return null;
		Cart cart = new Cart(0, tdto.getCustId(), tdto.getSubPckId());
		cart = cartdao.save(cart);
		return cart;

	}

	@Override
	public List<SubPackageOutDto> getCartOfCust(int id) {
		List<SubPackageOutDto> subPckOutdoList = new ArrayList<SubPackageOutDto>();
		List<Cart> cartlist = cartdao.findByCustId(id);
		for (Cart crt : cartlist) {
			subPckOutdoList.add(SubPackageOutDto.fromEntity(subPackageService.findById(crt.getSubPckId())));
		}
		return subPckOutdoList;

	}

	@Override
	public void removeFromCart(OrderInDto tdto) {
		cartdao.deleteByCustIdAndSubPckId(tdto.getCustId(), tdto.getSubPckId());
	}
}
