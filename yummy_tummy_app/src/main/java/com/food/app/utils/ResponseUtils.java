package com.food.app.utils;

public class ResponseUtils {
    private ResponseUtils(){

    }


    public static <T> void updateResponse(ApiResponse response, T data, String message) {
        response.setData(data);
        response.setMessage(message);
    }
}
