package com.food.app.domain;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "location_id")
    private Integer locationId;

    @Size(max = 10)
    @Column(name = "door_number" ,length = 10)
    private String doorNumber;

    @Size(max = 100)
    @Column(name = "address_line_1", length = 50)
    private String addressLine1;

    @Size(max = 100)
    @Column(name = "address_line_2", length = 50)
    private String addressLine2;

    @Size(max = 20)
    @Column(name = "city", length = 15)
    private String city;

    @Size(max = 20)
    @Column(name = "state", length = 15)
    private String state;

    @Size(max = 20)
    @Column(name = "country", length = 15)
    private String country;

    @Size(max = 10)
    @Column(name = "pin_code", length = 10)
    private String pinCode;

  public Location() {
  }

  public Location(Integer locationId, String doorNumber, String addressLine1, String addressLine2, String city, String state, String country, String pinCode) {
    this.locationId = locationId;
    this.doorNumber = doorNumber;
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.state = state;
    this.country = country;
    this.pinCode = pinCode;
  }

  public Integer getLocationId() {
    return locationId;
  }

  public void setLocationId(Integer locationId) {
    this.locationId = locationId;
  }

  public String getDoorNumber() {
    return doorNumber;
  }

  public void setDoorNumber(String doorNumber) {
    this.doorNumber = doorNumber;
  }

  public String getAddressLine1() {
    return addressLine1;
  }

  public void setAddressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
  }

  public String getAddressLine2() {
    return addressLine2;
  }

  public void setAddressLine2(String addressLine2) {
    this.addressLine2 = addressLine2;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getPinCode() {
    return pinCode;
  }

  public void setPinCode(String pinCode) {
    this.pinCode = pinCode;
  }

  @Override
  public String toString() {
    return "Location{" +
      "locationId=" + locationId +
      ", doorNumber='" + doorNumber + '\'' +
      ", addressLine1='" + addressLine1 + '\'' +
      ", addressLine2='" + addressLine2 + '\'' +
      ", city='" + city + '\'' +
      ", state='" + state + '\'' +
      ", country='" + country + '\'' +
      ", pinCode='" + pinCode + '\'' +
      '}';
  }
}
