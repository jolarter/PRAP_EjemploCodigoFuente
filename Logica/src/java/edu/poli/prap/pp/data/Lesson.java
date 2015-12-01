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
import javax.persistence.Lob;
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
@Table(name = "lesson")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Lesson.findAll", query = "SELECT l FROM Lesson l"),
    @NamedQuery(name = "Lesson.findByIdlesson", query = "SELECT l FROM Lesson l WHERE l.idlesson = :idlesson"),
    @NamedQuery(name = "Lesson.findByIdcategory", query = "SELECT l FROM Lesson l WHERE l.category = :idcategory"),
    @NamedQuery(name = "Lesson.findByName", query = "SELECT l FROM Lesson l WHERE l.name = :name")})
public class Lesson implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "idlesson")
    private Integer idlesson;
    @Size(max = 100)
    @Column(name = "name")
    private String name;
    @Lob
    @Size(max = 2147483647)
    @Column(name = "description")
    private String description;
    @Lob
    @Size(max = 2147483647)
    @Column(name = "introduction")
    private String introduction;
    @JoinColumn(name = "category", referencedColumnName = "idcategory")
    @ManyToOne
    private Category category;
    @OneToMany(mappedBy = "lesson")
    private Collection<Step> stepCollection;

    public Lesson() {
    }

    public Lesson(Integer idlesson) {
        this.idlesson = idlesson;
    }

    public Integer getIdlesson() {
        return idlesson;
    }

    public void setIdlesson(Integer idlesson) {
        this.idlesson = idlesson;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @XmlTransient
    public Collection<Step> getStepCollection() {
        return stepCollection;
    }

    public void setStepCollection(Collection<Step> stepCollection) {
        this.stepCollection = stepCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idlesson != null ? idlesson.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Lesson)) {
            return false;
        }
        Lesson other = (Lesson) object;
        if ((this.idlesson == null && other.idlesson != null) || (this.idlesson != null && !this.idlesson.equals(other.idlesson))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "edu.poli.prap.pp.data.Lesson[ idlesson=" + idlesson + " ]";
    }
    
}
