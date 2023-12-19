package Gfgfg.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Gfgfg.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Пример
 */
@Entity(name = "IISGfgfgПример")
@Table(schema = "public", name = "Пример")
public class Primer {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "строка")
    private String строка;

    @Column(name = "номер")
    private Integer номер;

    @Column(name = "тит")
    private String тит;


    public Primer() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getстрока() {
      return строка;
    }

    public void setстрока(String строка) {
      this.строка = строка;
    }

    public Integer getномер() {
      return номер;
    }

    public void setномер(Integer номер) {
      this.номер = номер;
    }

    public String getтит() {
      return тит;
    }

    public void setтит(String тит) {
      this.тит = тит;
    }


}