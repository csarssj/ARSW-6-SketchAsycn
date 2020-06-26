/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.escuelaing.eci.arsw.sketch;

import java.util.ArrayList;

/**
 *
 * @author ceseg
 */
public class SharedMemory {
     private static final SharedMemory instance = new SharedMemory();
	
	private ArrayList<String> al= new ArrayList<String>();
	
	private SharedMemory() {
		
	}
	
	public static SharedMemory getInstance() {
		return instance;
	}
	
	public void add(String value) {
		al.add(value);
	}
	
	public String toString() {
		return al.toString();
	}
}

