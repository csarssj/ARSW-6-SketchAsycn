/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.escuelaing.eci.arsw.sketch.Sketch;

/**
 *
 * @author ceseg
 */
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author ceseg
 */
public class SharedSketch {
     private static final SharedSketch instance = new SharedSketch ();
	
	private Map<Integer,Integer> sketch= new HashMap<>();
	private List<Integer> points = new ArrayList<Integer>();
	private SharedSketch() {
		
	}
	
	public static SharedSketch  getInstance() {
		return instance;
	}
	
	public void add(Integer point) {
		points.add(point);
	}
	
	public List<Integer> getSketch() {
		return points;
	}
        public String toString() {
		return points.toString();
	}
}   


