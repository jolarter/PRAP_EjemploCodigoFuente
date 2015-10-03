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
 * @author h4x0r
 */
@Entity
@Table(name = "solution")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Solution.findAll", query = "SELECT s FROM Solution s"),
    @NamedQuery(name = "Solution.findByIdsolution", query = "SELECT s FROM Solution s WHERE s.idsolution = :idsolution"),
    @NamedQuery(name = "Solution.findByStartDate", query = "SELECT s FROM Solution s WHERE s.startDate = :startDate"),
    @NamedQuery(name = "Solution.findByEndDate", query = "SELECT s FROM Solution s WHERE s.endDate = :endDate"),
    @NamedQuery(name = "Solution.findByTrials", query = "SELECT s FROM Solution s WHERE s.trials = :trials"),
    @NamedQuery(name = "Solution.findByPoints", query = "SELECT s FROM Solution s WHERE s.points = :points"),
    @NamedQuery(name = "Solution.findByComplete", query = "SELECT s FROM Solution s WHERE s.complete = :complete"),
    @NamedQuery(name = "Solution.findByCode", query = "SELECT s FROM Solution s WHERE s.code = :code")})
public class Solution implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idsolution")
    private Integer idsolution;
    @Column(name = "start_date")
    @Temporal(TemporalType.DATE)
    private Date startDate;
    @Column(name = "end_date")
    @Temporal(TemporalType.DATE)
    private Date endDate;
    @Column(name = "trials")
    private Integer trials;
    @Column(name = "points")
    private Integer points;
    @Column(name = "complete")
    private Boolean complete;
    @Column(name = "code")
    private Integer code;
    @JoinColumn(name = "step", referencedColumnName = "idstep")
    @ManyToOne
    private Step step;
    @JoinColumn(name = "iduser", referencedColumnName = "iduser")
    @ManyToOne
    private Users iduser;

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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Integer getTrials() {
        return trials;
    }

    public void setTrials(Integer trials) {
        this.trials = trials;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Boolean getComplete() {
        return complete;
    }

    public void setComplete(Boolean complete) {
        this.complete = complete;
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

    public Users getIduser() {
        return iduser;
    }

    public void setIduser(Users iduser) {
        this.iduser = iduser;
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
