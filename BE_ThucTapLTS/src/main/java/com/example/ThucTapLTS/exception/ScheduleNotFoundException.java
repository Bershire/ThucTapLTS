package com.example.ThucTapLTS.exception;

public class ScheduleNotFoundException extends RuntimeException{
    private String message;

    public ScheduleNotFoundException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}