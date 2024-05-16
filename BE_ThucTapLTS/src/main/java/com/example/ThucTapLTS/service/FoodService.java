package com.example.ThucTapLTS.service;

import com.example.ThucTapLTS.dto.FoodDTO;
import com.example.ThucTapLTS.entity.CinemaEntity;
import com.example.ThucTapLTS.entity.FoodEntity;
import com.example.ThucTapLTS.entity.RoomEntity;
import com.example.ThucTapLTS.exception.CinemaNotFoundException;
import com.example.ThucTapLTS.exception.CustomException;
import com.example.ThucTapLTS.exception.FoodNotFoundException;
import com.example.ThucTapLTS.repository.FoodRepository;
import com.example.ThucTapLTS.service.imp.FoodServiceImp;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FoodService implements FoodServiceImp {
    @Autowired
    private FoodRepository foodRepository;

//    @Autowired
//    private RedisTemplate redisTemplate;

    @Override
    public void addFood(FoodEntity foodEntity) {
        foodRepository.save(foodEntity);
    }

    @Override
    public void editFood(FoodEntity foodEntity) {
        try {
            Optional<FoodEntity> foodEntityOptional = foodRepository.findById(foodEntity.getId());
        } catch (Exception e) {
            throw new FoodNotFoundException("Food not found");
        }
        addFood(foodEntity);
    }

    @Override
    public void deleteFood(int id) {
        try {
            Optional<FoodEntity> foodEntityOptional = foodRepository.findById(id);
            FoodEntity foodEntity = new FoodEntity();
            if (foodEntityOptional.isPresent()) {
                foodEntity = foodEntityOptional.get();
                foodEntity.setActive(false);
                foodRepository.save(foodEntity);
            }
        } catch (Exception ex) {
            throw new FoodNotFoundException("Food not found");
        }
    }

    public List<Object[]> foodSalesLast7Days() {
        List<Object[]> objects = foodRepository.foodSalesLast7Days(LocalDateTime.now().minusDays(7));
        for (Object[] obj : objects) {
            FoodEntity foodEntity = (FoodEntity) obj[0];
            foodEntity.setBillFoodEntityList(null);
        }
        return objects;
    }

    @Override
//    @Cacheable("listCategory")
    public List<FoodDTO> getAllCategory() {
        System.out.println("Có giá trị trên redis");
        List<FoodDTO> responseList = new ArrayList<>();
//        if (redisTemplate.hasKey("listCategory")) {
//            //  Nếu như có thì lấy giá trị lưu trữ trên redis
//            String data = redisTemplate.opsForValue().get("listFood").toString();
//            Type listType = new TypeToken<ArrayList<FoodDTO>>(){}.getType();
//            responseList = new Gson().fromJson(data, listType);
//        } else {
//            System.out.println("Không có giá trị trên redis");
//            List<FoodEntity> list = foodRepository.findAll();
//            for (FoodEntity data : list) {
//                FoodDTO foodDTO = new FoodDTO();
//                foodDTO.setNameOfFood(data.getNameOfFood());
//                foodDTO.setPrice(data.getPrice());
//                foodDTO.setImage(data.getImage());
//                foodDTO.setDescription(data.getDescription());
//                responseList.add(foodDTO);
//            }
//        }
//        Gson gson = new Gson();
//        String data = gson.toJson(responseList);
//        redisTemplate.opsForValue().set("listFood", data);
        return responseList;
    }
}
