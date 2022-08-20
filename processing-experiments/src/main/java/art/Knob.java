package art;

// A Knob is a value that was used to generate an art piece
// This class is used to save knobs as objects
// Stored knobs can be used to write them in the piece (e.g. in Draugr001.java) or to serialize these values for later usages
public class Knob {
    private String value; //value of the knob, default is ""
    private Float valueN; //numerical value of the knob, default is 0
    private float x; // x coordinate, used to determine where to write this knob as part of a piece, default is 0
    private float y; // y coordinate, used to determine where to write this knob as part of a piece, default is 0
    private boolean rand; //if true the value of the knob is determined randomly, else it's decided by the artist

    public Knob (String v){
        value = v;
        x = 0;
        y = 0;
        valueN=(float) 0;
    }

    public Knob (Float vn, boolean r_val){
        valueN = vn;
        rand = r_val;
        x = 0;
        y = 0;
        value="";
    }

    public Knob (String v, float x_val, float y_val){
        value = v;
        x = x_val;
        y = y_val;
    }

    public Knob (String v, float x_val, float y_val, boolean r_val){
        value = v;
        x = x_val;
        y = y_val;
        rand = r_val;
    }

    public Knob (String v, boolean r_val){
        value = v;
        x = 0;
        y = 0;
        rand = r_val;
    }

    public void setx (float x_val){x = x_val;}
    
    public void sety (float y_val){y = y_val;}

    public void setrand (Boolean r_val){rand = r_val;}

    public String getValue () {return value;}

    public Float getValueN () {return valueN;}

    public float getx () {return x;}

    public float gety () {return y;}

    public boolean getrand () {return rand;}

}