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
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author User
 */
@Entity
@Table(name = "level")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Level.findAll", query = "SELECT l FROM Level l"),
    @NamedQuery(name = "Level.findByIdlevel", query = "SELECT l FROM Level l WHERE l.idlevel = :idlevel"),
    @NamedQuery(name = "Level.findByName", query = "SELECT l FROM Level l WHERE l.name = :name"),
    @NamedQuery(name = "Level.findByPoints", query = "SELECT l FROM Level l WHERE l.points = :points")})
public class Level implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idlevel")
    private Integer idlevel;
    @Size(max = 25)
    @Column(name = "name")
    private String name;
    @Column(name = "points")
    private Integer points;
    @OneToMany(mappedBy = "level")
    private Collection<Usr> usrCollection;

    public Level() {
    }

    public Level(Integer idlevel) {
        this.idlevel = idlevel;
    }

    public Integer getIdlevel() {
        return idlevel;
    }

    public void setIdlevel(Integer idlevel) {
        this.idlevel = idlevel;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    @XmlTransient
    public Collection<Usr> getUsrCollection() {
        return usrCollection;
    }

    public void setUsrCollection(Collection<Usr> usrCollection) {
        this.usrCollection = usrCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idlevel != null ? idlevel.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Level)) {
            return false;
        }
        Level other = (Level) object;
        if ((this.idlevel == null && other.idlevel != null) || (this.idlevel != null && !this.idlevel.equals(other.idlevel))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "edu.poli.prap.pp.data.Level[ idlevel=" + idlevel + " ]";
    }
    
}
