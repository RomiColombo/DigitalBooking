package com.grupo2.DigiRED.repository;

import com.grupo2.DigiRED.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {
    List<Products> findProductsByCategory_TitleAndCities_Name(String title, String name);
    List<Products> findProductsByCategory_Title(String title);
    List<Products> findProductsByCities_Name(String name);

    @Query("SELECT DISTINCT p FROM Products p LEFT JOIN Cities c LEFT JOIN Reservation r " +
            "WHERE c.name LIKE %:ciudad% and " +
            "(r.startDate is null or r.startDate < :fechaInicial or r.endDate > :fechaFinal)")
    List<Products> findAllAvailableProducts1(@Param("ciudad") String ciudad, Date fechaInicial, Date fechaFinal);


    @Query(value = "select products.id, products.name, products.description, cities.name as City " +
            "from products left join cities on products.cities_id = cities.id " +
            "left join reservations on products.id = reservations.product_id " +
            "where cities.name = %:ciudad% and (reservations.start_date is null " +
            "or reservations.start_date > DATE(%:fecha2%) " +
            "or reservations.end_date < DATE(%:fecha1%))",
            nativeQuery = true)
    List<Products> findAllAvailableProducts(@Param("ciudad") String ciudad,
                                            @Param("fecha1") Date fechaInicial, @Param("fecha2") Date fechaFinal);
}
