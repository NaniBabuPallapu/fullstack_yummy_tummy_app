package com.food.app.utils;

import java.util.HashMap;
import java.util.Map;

public class ApiResponse<T>{

    private String message;
    private T data;
    private Map<String, String> errors = new HashMap<>();


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, String> errors) {
        this.errors = errors;
    }

    @Override
    public String toString() {
        return "ApiResponse{" +
                "message='" + message + '\'' +
                ", data=" + data +
                ", errors=" + errors +
                '}';
    }
}
