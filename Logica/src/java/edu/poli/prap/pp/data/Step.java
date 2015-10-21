/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.data;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author h4x0r
 */
@Entity
@Table(name = "step")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Step.findAll", query = "SELECT s FROM Step s"),
    @NamedQuery(name = "Step.findByIdstep", query = "SELECT s FROM Step s WHERE s.idstep = :idstep"),
    @NamedQuery(name = "Step.findByIdLesson", query = "SELECT s FROM Step s JOIN s.lesson l WHERE l.idlesson = :idlesson ORDER BY s.idstep"),
    @NamedQuery(name = "Step.findByName", query = "SELECT s FROM Step s WHERE s.name = :name"),
    @NamedQuery(name = "Step.findByChallenge", query = "SELECT s FROM Step s WHERE s.challenge = :challenge"),
    @NamedQuery(name = "Step.findByPoints", query = "SELECT s FROM Step s WHERE s.points = :points"),
    @NamedQuery(name = "Step.findByCode", query = "SELECT s FROM Step s WHERE s.code = :code"),
    @NamedQuery(name = "Step.findByExpression", query = "SELECT s FROM Step s WHERE s.expression = :expression")})
public class Step implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idstep")
    private Integer idstep;
    @Size(max = 50)
    @Column(name = "name")
    private String name;
    @Size(max = 100)
    @Column(name = "challenge")
    private String challenge;
    @Column(name = "points")
    private Integer points;
    @Size(max = 25)
    @Column(name = "code")
    private String code;
    @Size(max = 100)
    @Column(name = "expression")
    private String expression;
    @OneToMany(mappedBy = "step")
    private Collection<Solution> solutionCollection;
    @JoinColumn(name = "lesson", referencedColumnName = "idlesson")
    @ManyToOne
    private Lesson lesson;

    public Step() {
    }

    public Step(Integer idstep) {
        this.idstep = idstep;
    }

    public Integer getIdstep() {
        return idstep;
    }

    public void setIdstep(Integer idstep) {
        this.idstep = idstep;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getChallenge() {
        return challenge;
    }

    public void setChallenge(String challenge) {
        this.challenge = challenge;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    @XmlTransient
    public Collection<Solution> getSolutionCollection() {
        return solutionCollection;
    }

    public void setSolutionCollection(Collection<Solution> solutionCollection) {
        this.solutionCollection = solutionCollection;
    }

    public Lesson getLesson() {
        return lesson;
    }

    public void setLesson(Lesson lesson) {
        this.lesson = lesson;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idstep != null ? idstep.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Step)) {
            return false;
        }
        Step other = (Step) object;
        if ((this.idstep == null && other.idstep != null) || (this.idstep != null && !this.idstep.equals(other.idstep))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "edu.poli.prap.pp.data.Step[ idstep=" + idstep + " ]";
    }
    
}
