package com.carservicestation.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Announcementdao extends JpaRepository<com.carservicestation.entities.Announcement, Integer> {

}
