package com.carservicestation.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AdminException {
	@ExceptionHandler({RuntimeException.class})
	public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
		// either use map for returning multiple values
		Map<String, Object> map = new HashMap<>();
		map.put("status", "error");
		map.put("error", ex.getMessage());

		return ResponseEntity.ok(map);
	}
}
