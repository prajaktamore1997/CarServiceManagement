package com.carservicestation.services;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carservicestation.daos.Announcementdao;
import com.carservicestation.daos.Complaintdao;
import com.carservicestation.daos.Customersdao;
import com.carservicestation.daos.Employeesdao;
import com.carservicestation.daos.MainPackagedao;
import com.carservicestation.daos.Manufacturerdao;
import com.carservicestation.daos.Modeldao;
import com.carservicestation.daos.Orderdao;
import com.carservicestation.daos.SubPackagedao;
import com.carservicestation.dtos.CredentialPassword;
import com.carservicestation.dtos.EmpOnOrderFromOrder;
import com.carservicestation.dtos.ManufacturerModeldto;
import com.carservicestation.dtos.SubPackagedto;
import com.carservicestation.entities.Announcement;
import com.carservicestation.entities.Complaint;
import com.carservicestation.entities.Customer;
import com.carservicestation.entities.Employee;
import com.carservicestation.entities.MainPackage;
import com.carservicestation.entities.Manufacturer;
import com.carservicestation.entities.Model;
import com.carservicestation.entities.Order;
import com.carservicestation.entities.SubPackage;



@Service
@Transactional
public class AdminServiceImpl implements AdminService{
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private	Complaintdao complaintdao;
	
	@Autowired
	private Manufacturerdao mandao;
	@Autowired
	private Orderdao orderdao;	
	
	@Autowired
	private Employeesdao empdao;
	@Autowired
	private Announcementdao anndao;
	@Autowired
	private Customersdao custdao;
@Autowired
	private MainPackagedao mainpackagedao;
@Autowired
private SubPackagedao subpckdao;
@Autowired
private Modeldao modeldao;

	@Override
	public Employee getAdmin(int id) {
		return empdao.getById(id);
	}

	@Override
	public Employee getAdmin(String mail) {
		return empdao.findByEmail(mail);
	}
	
	@Override
	public Employee forgetPassword(CredentialPassword cred) {
		if(cred!=null) {
		Employee emp = empdao.findByEmail(cred.getemail());
		if(emp.getMobile().equalsIgnoreCase(cred.getMobile()) ) {
			emp.setPassword(cred.getPassword());
			empdao.save(emp);
			return emp;
		}
			
		}
		return null;
	}
	
	@Override
	public Announcement saveAnnouncement(Announcement data) {
		if(data!=null) {
		return	anndao.save(data);
		}
		return null;
	}

	@Override
	public List<Announcement> getAllAnnouncement() {
		return anndao.findAll();
	}

	@Override
	public List<Customer> getAllCustomers() {
		return custdao.findAll();
	}

	@Override
	public List<Employee> getAllEmployees() {
		return empdao.findAll();
	}
	
	@Override
	public void deleteEmployee(String id) {
		empdao.delete(empdao.getById(Integer.parseInt(id)));
	}

	@Override
	public boolean deleteAnnouncement(String id) {
		if(id!=null) {
			anndao.deleteById(Integer.parseInt(id));
			return true;
		}
		return false;
	}

	@Override
	public List<MainPackage> getMainPck() {
		return mainpackagedao.findAll();
	}

	@Override
	public MainPackage MainPckSave(MainPackage main) {
		return mainpackagedao.save(main);
	}
	@Override
	public void deleteMainPck(String id) {
		mainpackagedao.delete(mainpackagedao.getById(Integer.parseInt(id)));
	}
	

	@Override
	public void subpcksave(String id,SubPackagedto sub) {
		mainpackagedao.getById(Integer.parseInt(id)).addsubpck(SubPackagedto.toEntity(sub));
	}

	@Override
	public SubPackage subpcksave(SubPackage sub) {
		return subpckdao.save(sub);
	}

	@Override
	public MainPackage getMainPckByName(MainPackage main) {
		if(main!=null) {
			MainPackage mainDb = mainpackagedao.findByName(main.getMainPckName());
			return mainDb;
		}
		return null;
	}

	@Override
	public boolean deleteSubPck(String id) {
		if(id!=null) {
			subpckdao.delete(subpckdao.getById(Integer.parseInt(id)));
			return true;
		}
		return false;
	}

	@Override
	public List<SubPackage> getsubPck() {
		return subpckdao.findAll();
	}

	@Override
	public Customer saveCustomer(Customer c) {
		if(c!=null) {
			return custdao.save(c);
		}
		return null;
	}

	
	@Override
	public List<Order> getPendingOrders() {
		return orderdao.findAll().stream().filter((o)->o.getOrdersStatus().equalsIgnoreCase("Pending")).collect(Collectors.toList());
		
	}
	@Override
	public List<Order> getOrders() {
		return orderdao.findAll();
		
	}

	@Override
	public List<Order> getFreeEmpFromOrder() {
		
		return orderdao.findAll();
	}

	@Override
	public Order saveOrupdate(Order order) {
		return null;
	}

	@Override
	public int updateOrder(int empId, int ordersId, String workStatus) {
		System.out.println(empId+"  ;"+ordersId+"  :" +workStatus);
		Employee emp = entityManager.unwrap(Session.class).load(Employee.class, empId);
		Order o = entityManager.unwrap(Session.class).load(Order.class, ordersId);
		System.out.println("employee detail"+emp+"  order detail  "+o);
		if(emp==null) {
			o.setEmployee(emp);
			o.setOrdersStatus(workStatus);
			
			return 1;
		}else {
			o.setEmployee(emp);
			o.setOrdersStatus(workStatus);
			return 1;
		}
			
		
		 //orderdao.updateOrderbyEmpId(empId, ordersId)
	}

	@Override
	public Employee saveEmployee(Employee e) {
		// TODO Auto-generated method stub
		return empdao.save(e);
	}

	
	
	//because of this method get list using emp and cust id so i used get()
	@Override
	public List<Order> geOrderOfEmp(String sid) {
		int id=Integer.parseInt(sid);
		Employee emp = entityManager.unwrap(Session.class).get(Employee.class, id);  
		if(emp==null)
			return custdao.getById(id).getOrderlist();
		return empdao.getById(id).getOrderList();
	}


	@Override
	public Employee getEmpOnOrder(String oid) {
		int id=Integer.parseInt(oid);
		Order o = entityManager.unwrap(Session.class).load(Order.class, id);
		return o.getEmployee();
		}
	
	

	@Override
	public void endSession() {
		entityManager.clear();
	}

	@Override
	public List<Complaint> getAllComplaint(String id) {
		Customer cust= new Customer();
		cust.setCustId(Integer.parseInt(id));
		return complaintdao.findByCustomer(cust);
	}

	@Override
	public List<Complaint> getAllOrderComplaint(String oid) {
		int id=Integer.parseInt(oid);
		Order o = entityManager.unwrap(Session.class).load(Order.class, id);
		System.out.println(o);
		//o.getComplaintlist().forEach(System.out::println);
		return o.getComplaintlist();
	}


	@Override
	public void setReposoneComplaint(String reply, String cid) {
		int id=Integer.parseInt(cid);
		Complaint c = entityManager.unwrap(Session.class).load(Complaint.class, id);
		c.setComplaintResponse(reply);
		
	}

	@Override
	public boolean deleteComplaintFromComplaint(String cid) {
		int id=Integer.parseInt(cid);
		Complaint c = entityManager.unwrap(Session.class).load(Complaint.class, id);
		if(c!=null) {
			complaintdao.delete(c);
			return true;
		}
		return false;
	}

	
	
	//car model
		@Override
		public List<Manufacturer> getAllVehicles() {
			
			return mandao.findAll();
		}

		@Override
		public Manufacturer saveVehicle(Manufacturer m) {
			return mandao.save(m);
		}

		@Override
		public  List<Model> getAllModels(String mid) {
			int id = Integer.parseInt(mid);
			Manufacturer m = entityManager.unwrap(Session.class).load(Manufacturer.class, id);
			
			return m.getModelList();
		}

		@Override
		public void deleteCustomer(String id) {
			custdao.delete(custdao.getById(Integer.parseInt(id)));
			
		}

		
		@Override
		public void editModel(String id, Model entity) {
			Manufacturer m = mandao.getById(Integer.parseInt(id));
			m.addModel(modeldao.save(entity));
		}

		@Override
		public void deleteModel(String id) {
			modeldao.delete(modeldao.getById(Integer.parseInt(id)));
			
		}

		@Override
		public Manufacturer AddedNewCompany(ManufacturerModeldto dto) {
			Manufacturer m=new Manufacturer();
			m.setMakeName(dto.getMakeName());
			Model model= new Model();
			model.setFueltype(dto.getFuelType());
			model.setModelName(dto.getModelName());
			m.addModel(model);
			return mandao.save(m);
		}

		

		

		
}
