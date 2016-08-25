package controllers;

import com.google.gson.Gson;

import play.mvc.Controller;
import play.mvc.Result;

public class TestController extends Controller {

	public Result getPatientInfo(String patientName) {

		System.out.println("Details from server " + patientName);
		
		Gson gson = new Gson();
		return ok(gson.toJson("Return Pateint Details...."));
	}

}
