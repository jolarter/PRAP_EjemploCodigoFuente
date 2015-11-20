/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.service;

import edu.poli.prap.pp.data.Users;
import edu.poli.prap.pp.logic.SessionManager;
import edu.poli.prap.pp.util.Hash;
import edu.poli.prap.pp.util.Mail;
import java.util.Iterator;
import java.util.Set;
import javax.ejb.Stateless;
import javax.faces.validator.Validator;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.ValidatorFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 *
 * @author User
 */
@Stateless
@Path("edu.poli.prap.pp.data.register")
public class RegisterFacadeREST {

    @PersistenceContext(unitName = "LogicaPU")
    private EntityManager em;

    private SessionManager sm = null;

    public RegisterFacadeREST() {
        this.sm = SessionManager.getInstance();
    }

    @POST
    @Consumes({"application/xml", "application/json"})
    public boolean register(Users user) {

        if (user.getName() == null || user.getName().isEmpty() || user.getMail() == null || !Mail.isValidEmailAddress(user.getMail()) || user.getPassword() == null || !Hash.isValidSHA1(user.getPassword())) {
            System.out.println("no");
            return false;
        }

        em.persist(user);
        return true;
    }

}
