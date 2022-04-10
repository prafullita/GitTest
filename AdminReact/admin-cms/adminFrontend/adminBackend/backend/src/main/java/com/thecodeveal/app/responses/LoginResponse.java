package com.thecodeveal.app.responses;

public class LoginResponse {
	
	private String token;
	private long UId;

	public String getToken() {
		return token;
	}
	
	public void setUId(long Uid) {
		this.UId = Uid;
	}
	
	public long getUId() {
		return UId;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
	
	

}
