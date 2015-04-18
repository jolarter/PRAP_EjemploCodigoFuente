/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.data;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author User
 */
@Entity
@Table(name = "solution")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Solution.findAll", query = "SELECT s FROM Solution s"),
    @NamedQuery(name = "Solution.findByIdsolution", query = "SELECT s FROM Solution s WHERE s.idsolution = :idsolution"),
    @NamedQuery(name = "Solution.findByStartdate", query = "SELECT s FROM Solution s WHERE s.startdate = :startdate"),
    @NamedQuery(name = "Solution.findByEnddate", query = "SELECT s FROM Solution s WHERE s.enddate = :enddate"),
    @NamedQuery(name = "Solution.findByAttempt", query = "SELECT s FROM Solution s WHERE s.attempt = :attempt"),
    @NamedQuery(name = "Solution.findByPoints", query = "SELECT s FROM Solution s WHERE s.points = :points"),
    @NamedQuery(name = "Solution.findByIscompleted", query = "SELECT s FROM Solution s WHERE s.iscompleted = :iscompleted"),
    @NamedQuery(name = "Solution.findByCode", query = "SELECT s FROM Solution s WHERE s.code = :code")})
public class Solution implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idsolution")
    private Integer idsolution;
    @Column(name = "startdate")
    @Temporal(TemporalType.DATE)
    private Date startdate;
    @Column(name = "enddate")
    @Temporal(TemporalType.DATE)
    private Date enddate;
    @Column(name = "attempt")
    private Integer attempt;
    @Column(name = "points")
    private Integer points;
    @Column(name = "iscompleted")
    private Boolean iscompleted;
    @Column(name = "code")
    private Integer code;
    @JoinColumn(name = "step", referencedColumnName = "idstep")
    @ManyToOne
    private Step step;
    @JoinColumn(name = "usr", referencedColumnName = "iduser")
    @ManyToOne
    private Usr usr;

    public Solution() {
    }

    public Solution(Integer idsolution) {
        this.idsolution = idsolution;
    }

    public Integer getIdsolution() {
        return idsolution;
    }

    public void setIdsolution(Integer idsolution) {
        this.idsolution = idsolution;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public Integer getAttempt() {
        return attempt;
    }

    public void setAttempt(Integer attempt) {
        this.attempt = attempt;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Boolean getIscompleted() {
        return iscompleted;
    }

    public void setIscompleted(Boolean iscompleted) {
        this.iscompleted = iscompleted;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Step getStep() {
        return step;
    }

    public void setStep(Step step) {
        this.step = step;
    }

    public Usr getUsr() {
        return usr;
    }

    public void setUsr(Usr usr) {
        this.usr = usr;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idsolution != null ? idsolution.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Solution)) {
            return false;
        }
        Solution other = (Solution) object;
        if ((this.idsolution == null && other.idsolution != null) || (this.idsolution != null && !this.idsolution.equals(other.idsolution))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "edu.poli.prap.pp.data.Solution[ idsolution=" + idsolution + " ]";
    }
    
}
