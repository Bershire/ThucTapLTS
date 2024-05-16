package com.example.ThucTapLTS.service.imp;

import com.example.ThucTapLTS.dto.FoodDTO;
import com.example.ThucTapLTS.entity.FoodEntity;

import java.util.List;

public interface FoodServiceImp {
    void addFood (FoodEntity foodEntity);

    void editFood (FoodEntity foodEntity);

    void deleteFood (int id);

    List<Object[]> foodSalesLast7Days();

    List<FoodDTO> getAllCategory();
}
