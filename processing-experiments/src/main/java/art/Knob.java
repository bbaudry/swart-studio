package art;

public class Knob {
    private String value;
    private float x;
    private float y;
    private boolean rand; //if true the value of the knob is determined randomly, else it's decided by the artist

    public Knob (String v){
        value = v;
        x = 0;
        y = 0;
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

    public float getx () {return x;}

    public float gety () {return y;}

    public boolean getrand () {return rand;}

}