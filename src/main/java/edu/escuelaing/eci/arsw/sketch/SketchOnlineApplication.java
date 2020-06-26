    package edu.escuelaing.eci.arsw.sketch;


import edu.escuelaing.eci.arsw.sketch.Sketch.SharedSketch;
import java.util.ArrayList;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SketchOnlineApplication {
    
    @Resource
    private HttpServletRequest request;
    
    public static void main(String[] args) {
        SpringApplication.run(SketchOnlineApplication.class, args);
    }
     @GetMapping("/status")
    public String status() {
        sessionManagement();
        String name = (String) request.getSession().getAttribute("name");
        return "{\"status\":\"Greetings from Spring Boot. "
                + name + ". "
                + java.time.LocalDate.now() + ", "
                + java.time.LocalTime.now()
                + ". " + "The server is Runnig!\"}";
    }

    @GetMapping("/setname")
    public String setName(@RequestParam (value = "name", defaultValue = "anonimo") String name) {
        request.getSession().setAttribute("name", name);
        SharedMemory.getInstance().add(name);
        return String.format("Hello %s!", name);
    }

    private void sessionManagement() {
        System.out.println(request.getSession(true).getId());
    }
    @PostMapping("/getSketch")
     public  ArrayList<String> getSketch() { 
         String name = (String) request.getSession().getAttribute("name");
         return null;
    }     

    
    @PostMapping("/setSketch")    
    @ResponseBody
    public void setSketch(){     
    }
    
}
