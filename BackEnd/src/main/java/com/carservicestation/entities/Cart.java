package com.carservicestation.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Table(name = "cart")
@Entity
public class Cart {
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Id
		private int id;
		private int custId;
		private int subPckId;
		
	
		public Cart() {
			super();
		}
		public Cart(int id, int custId, int subPckId) {
			super();
			this.id = id;
			this.custId = custId;
			this.subPckId = subPckId;
		}
		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public int getCustId() {
			return custId;
		}

		public void setCustId(int custId) {
			this.custId = custId;
		}

		public int getSubPckId() {
			return subPckId;
		}

		public void setSubPckId(int subPckId) {
			this.subPckId = subPckId;
		}
		@Override
		public String toString() {
			return "Cart [id=" + id + ", custId=" + custId + ", subPckId=" + subPckId + "]";
		}
	
}
