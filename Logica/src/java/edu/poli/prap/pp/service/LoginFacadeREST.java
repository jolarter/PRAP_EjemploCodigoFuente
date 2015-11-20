/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.service;

import edu.poli.prap.pp.logic.SessionManager;
import edu.poli.prap.pp.logic.data.Token;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 *
 * @author User
 */
@Stateless
@Path("edu.poli.prap.pp.data.login")
public class LoginFacadeREST {

    @PersistenceContext(unitName = "LogicaPU")
    private EntityManager em;

    private SessionManager sm = null;

    public LoginFacadeREST() {
        this.sm = SessionManager.getInstance();
    }

    @GET
    @Path("{mail}/{hash}")
    @Consumes({"application/xml", "application/json"})
    public Token login(@PathParam("mail") String mail, @PathParam("hash") String hash) {

        Token token = new Token();

        long total = (long) em.createNamedQuery("Users.checkLogin").setParameter("mail", mail).setParameter("password", hash).getSingleResult();

        if (total == 1) {
            token.setUsername(em.createNamedQuery("Users.getNameByMail", String.class).setParameter("mail", mail).getSingleResult());
            token.setUserid(em.createNamedQuery("Users.getIdByMail", Integer.class).setParameter("mail", mail).getSingleResult());
            token.setToken(this.sm.addSession(token));
            return token;
        }

        return token;
    }

    @GET
    @Path("checktoken/{token}")
    @Consumes({"application/xml", "application/json"})
    public Boolean checkhash(@PathParam("token") String token) {
        return sm.checkToken(token);
    }

}
