package com.carservicestation.services;

import java.util.List;

import com.carservicestation.dtos.CredentialPassword;
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

public interface AdminService {

	Employee getAdmin(int id);

	Employee getAdmin(String mail);

	Employee forgetPassword(CredentialPassword cred);

	Announcement saveAnnouncement(Announcement data);

	List<Announcement> getAllAnnouncement();

	List<Customer> getAllCustomers();

	List<Employee> getAllEmployees();

	void deleteEmployee(String id);

	boolean deleteAnnouncement(String id);

	List<MainPackage> getMainPck();

	MainPackage MainPckSave(MainPackage main);

	void deleteMainPck(String id);

	void subpcksave(String id, SubPackagedto sub);

	SubPackage subpcksave(SubPackage sub);

	MainPackage getMainPckByName(MainPackage main);

	boolean deleteSubPck(String id);

	List<SubPackage> getsubPck();

	Customer saveCustomer(Customer c);

	List<Order> getPendingOrders();

	List<Order> getOrders();

	List<Order> getFreeEmpFromOrder();

	Order saveOrupdate(Order order);

	int updateOrder(int empId, int ordersId, String workStatus);

	Employee saveEmployee(Employee e);

	//because of this method get list using emp and cust id so i used get()
	List<Order> geOrderOfEmp(String sid);

	Employee getEmpOnOrder(String oid);

	void endSession();

	List<Complaint> getAllComplaint(String id);

	List<Complaint> getAllOrderComplaint(String oid);

	void setReposoneComplaint(String reply, String cid);

	boolean deleteComplaintFromComplaint(String cid);

	//car model
	List<Manufacturer> getAllVehicles();

	Manufacturer saveVehicle(Manufacturer m);

	List<Model> getAllModels(String mid);

	void deleteCustomer(String id);

	void editModel(String id, Model entity);

	void deleteModel(String id);

	Manufacturer AddedNewCompany(ManufacturerModeldto dto);

}