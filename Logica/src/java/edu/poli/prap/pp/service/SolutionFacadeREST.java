/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.service;

import edu.poli.prap.pp.data.Solution;
import edu.poli.prap.pp.data.Step;
import edu.poli.prap.pp.data.Users;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 *
 * @author User
 */
@Stateless
@Path("edu.poli.prap.pp.data.solution")
public class SolutionFacadeREST extends AbstractFacade<Solution> {

    @PersistenceContext(unitName = "LogicaPU")
    private EntityManager em;

    public SolutionFacadeREST() {
        super(Solution.class);
    }

    @POST
    //@Override
    @Consumes({"application/xml", "application/json"})
    public Solution create2(Solution entity) {
        super.create(entity);
        getEntityManager().flush();
        System.out.println(entity);
        return entity;
    }

    @PUT
    @Path("{id}")
    @Consumes({"application/xml", "application/json"})
    public void edit(@PathParam("id") Integer id, Solution entity) {
        super.edit(entity);
    }

    @PUT
    @Path("editbyuserandstep/{step}/{isuser}")
    @Consumes({"application/xml", "application/json"})
    public void editByUserAndStep(@PathParam("step") Integer step, @PathParam("isuser") Integer isuser, Solution entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({"application/xml", "application/json"})
    public Solution find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({"application/xml", "application/json"})
    public List<Solution> findAll() {
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({"application/xml", "application/json"})
    public List<Solution> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces("text/plain")
    public String countREST() {
        return String.valueOf(super.count());
    }

    @GET
    @Path("solution/{idstep}/{iduser}")
    @Produces({"application/xml", "application/json"})
    public Solution findByStep(@PathParam("idstep") Integer idstep, @PathParam("iduser") Integer iduser) {
        try {
            Step step = (Step) getEntityManager().createNamedQuery("Step.findByIdstep").setParameter("idstep", idstep).getSingleResult();
            Users user = (Users) getEntityManager().createNamedQuery("Users.findByIduser").setParameter("iduser", iduser).getSingleResult();
            return (Solution) getEntityManager().createNamedQuery("Solution.findByStep").setParameter("step", step).setParameter("iduser", user).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    @GET
    @Path("getall/{iduser}")
    @Produces({"application/xml", "application/json"})
    public List<Solution> getAll(@PathParam("iduser") Integer iduser) {
        return getEntityManager().createNamedQuery("Solution.findByIdUser").setParameter("iduser", iduser).getResultList();
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

}
