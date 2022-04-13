package com.carservicestation.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservicestation.daos.Announcementdao;
import com.carservicestation.daos.Employeesdao;
import com.carservicestation.daos.Orderdao;
import com.carservicestation.entities.Employee;
import com.carservicestation.entities.Order;

@Service
@Transactional
public class EmployeeScopeServiceImpl implements EmployeeScopeService {

	@Autowired
	private Orderdao orderdao;	
	@Autowired
	private EntityManager entityManager;
	@Autowired
	private Employeesdao empdao;
	@Autowired
	private Announcementdao anndao;
	
	@Override
	public List<Order> getempOrders(String oid) {
		int id=Integer.parseInt(oid);
		return  empdao.getById(id).getOrderList();
	}

	@Override
	public boolean changeWorkingstatus(String empid, String orderid, String workStatus) {
		int id=Integer.parseInt(orderid);
		int eId=Integer.parseInt(empid);
		Employee emp = entityManager.unwrap(Session.class).load(Employee.class, eId);
		Order o = entityManager.unwrap(Session.class).load(Order.class, id);
		if(emp.getOrderList().contains(o)) {
			o.setOrdersStatus(workStatus);
			return true;
		}else {
			o.setOrdersStatus(workStatus);
			return true;
		}
		
	}

	@Override
	public Employee getEmployee(String id) {
		return empdao.getById(Integer.parseInt(id));
	}

	@Override
	public Employee update(Employee person) {
		return empdao.save(person);
	}

}
