package edu.escuelaing.arsw.sketch;

import java.util.ArrayList;

public class SharedMemory {
	private static final SharedMemory instance = new SharedMemory();
	
	private ArrayList<String> circles= new ArrayList<String>();
	
	private SharedMemory() {
		
	}
	
	public static SharedMemory getInstance() {
		return instance;
	}
	
	public void add(String value) {
		circles.add(value);
	}
	
	public String toString() {
		return circles.toString();
	}
}