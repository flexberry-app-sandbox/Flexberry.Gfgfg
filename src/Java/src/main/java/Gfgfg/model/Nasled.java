package Gfgfg.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gfgfg.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Наслед
 */
@Entity(name = "IISGfgfgНаслед")
@Table(schema = "public", name = "Наслед")
public class Nasled {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "тит")
    private String тит;


    public Nasled() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getтит() {
      return тит;
    }

    public void setтит(String тит) {
      this.тит = тит;
    }


}