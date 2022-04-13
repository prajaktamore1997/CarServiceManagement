package com.carservicestation.services;

import java.util.List;

import com.carservicestation.dtos_Customer.OrderInDto;
import com.carservicestation.dtos_Customer.SubPackageOutDto;
import com.carservicestation.entities.Cart;

public interface CartService {
	public Cart addIntoCart(OrderInDto tdto);
	public void removeFromCart(OrderInDto tdto);

	public List<SubPackageOutDto> getCartOfCust(int id);
}
