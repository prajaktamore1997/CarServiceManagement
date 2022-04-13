package com.carservicestation.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int paymentId;
	private Date paymentDate;
	private float price;
	private String paymentMode;
	private String txnNo;
//one to one relationship with order
	@OneToOne(mappedBy = "payment")
	private Order order;

	public Payment() {
		
	}

	public Payment(int paymentId, Date paymentDate, float price, String paymentMode, String txnNo, Order order) {
		super();
		this.paymentId = paymentId;
		this.paymentDate = paymentDate;
		this.price = price;
		this.paymentMode = paymentMode;
		this.txnNo = txnNo;
		this.order = order;
	}

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public Date getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(Date paymentDate) {
		this.paymentDate = paymentDate;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getTxnNo() {
		return txnNo;
	}

	public void setTxnNo(String txnNo) {
		this.txnNo = txnNo;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", paymentDate=" + paymentDate + ", price=" + price
				+ ", paymentMode=" + paymentMode + ", txnNo=" + txnNo + "]";
	}

}
