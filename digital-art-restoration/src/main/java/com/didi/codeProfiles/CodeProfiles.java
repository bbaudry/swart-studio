
package com.didi.codeProfiles;



import java.applet.*;

import java.io.*;

import java.net.*;

import java.util.*;

import java.awt.*;

import java.awt.event.*;



public class CodeProfiles extends Applet implements Runnable {
    
    
    
    int programLineIndexAsWritten[] = new int[256];  int i11 = line(80);
    
    long programLineExecutionCount[] = new long[256];  int i16 = line(132);
    
    int programTrace[] = new int[4096], lastLineCallInProgram;  int i1 = line(1);
    
    Line programLines[] = null;  int i6 = line(42);
    
    
    
    
    
    //============================================================================//
    
    //                                                                            //
    
    //   CodeProfiles was written August 9-15 2002 for CODeDOC; commissioned by   //
    
    //   Christiane Paul, Curator at the Whitney Museum of American Art, NY USA   //
    
    //                                                                            //
    
    //   The assignment was to write code that moves three points in space. The   //
    
    //   artists shared the code with one another and the public, to focus upon   //
    
    //   the code and process as well as artist comments on one another's code.   //
    
    //                                                                            //
    
    //   This code reads in its own source and displays it in a tiny font, then   //
    
    //   moves three points in "code space." It essentially comments on itself.   //
    
    //                                                                            //
    
    //   The white Insertion Point traces the code in the order it was written.   //
    
    //   The amber Fixation Point traces word by word as someone might read it.   //
    
    //   The green Execution Point shows a sample of how the computer reads it.   //
    
    //   The code lines themselves gradually get brighter as they execute more.   //
    
    //                                                                            //
    
    //   This code was written in my un-optimized prototyping style; built with   //
    
    //   meaning, visuals, usability, and fun taking priority over engineering.   //
    
    //   Thank you Greta Peterman and Marek Walczak for your valuable critique.   //
    
    //                                                                            //
    
    //   W. Bradford Paley                                        brad@didi.com   //
    
    //   Copyright (c) 2002, all rights reserved    related work at textarc.org   //
    
    //                                                                            //
    
    //============================================================================//
    
    
    
    
    
    
    
    //==============================================================================
    
    class Line {
        
        String s;
        
        int leadingPixels = -1, x, y, lineIndex, lineAsWrittenIndex, i1 = line(16);
        
        boolean hasLineCall = false;  int i2 = line(101);
        
        double brightness;  int i17 = line(134);
        
        
        
        public Line(String s) {  line(17);
            
            this.s = s;  line(18);
            
        }
        
    }
    
    
    
    
    
    //==============================================================================
    
    class Cubic {
        
        double a, b, c, d = line(151);
        
        
        
        public Cubic (double a, double b, double c, double d) {
            
            this.a = a; this.b = b; this.c = c; this.d = d;  line(152);
            
        }
        
        
        
        public double evaluate (double u) { line(182);
            
            return (((d*u) + c) * u + b) * u + a;
            
        }
        
    }
    
    
    
    
    
    //==============================================================================
    
    public CodeProfiles () {  line(2);
        
        setBackground(Color.black);  line(79);
        
    }
    
    
    
    
    
    //==============================================================================
    
    int drawnInsertionLine, drawnInsertionLineBackup, drawnInsertionPoint,
    
    drawnFixationLine, drawnFixationPoint, drawnPC = line(75);
    
    Line lineDrawnLarger, lastLineDrawnLarger;  int i14 = line(117);
    
    double lineDrawnLargerRatio = 1./3.;  int i25 = line(244);
    
    void step () {
        
        
        
        //  start all three points we're moving where the mouse was clicked
        
        if (lineToStartTraces != null) {  line(251);
            
            
            
            //  point the fixation point at this line
            
            drawnFixationPoint = 0;  line(230);
            
            drawnFixationLine = lineUnderMouseIndex;  line(224);
            
            
            
            //  point the insertion point at this line
            
            drawnInsertionPoint = drawnInsertionLineBackup = 0;  line(232);
            
            
            
            //  if it has a line() call we're all set
            
            if (lineToStartTraces.hasLineCall) {
                
                drawnInsertionLine = lineToStartTraces.lineAsWrittenIndex;
                
                line(231);
                
                
                
                //  otherwise find a line() call
                
            } else {
                
                
                
                //  start where the mouse was clicked
                
                int i = lineToStartTraces.lineIndex;  line(235);
                
                
                
                //  go forward until we see a line() call
                
                while (i != 0 && ! programLines[i].hasLineCall) {
                    
                    i = ++i % programLines.length;  line(252);
                    
                    drawnInsertionLineBackup--; line(234);
                    
                }
                
                
                
                if (i == 0) drawnInsertionLine = lastLineCallInProgram;
                
                else drawnInsertionLine = programLines[i].lineAsWrittenIndex;
                
                line(233);
                
            }
            
            resetTraceVectors = true;  line(225);
            
            
            
            //  have drawnPC wait until this line is executed, then trace
            
            drawnPCWaitTargetLine = drawnInsertionLine;  line(236);
            
            
            
            lineToStartTraces = null;  line(253);
            
        }
        
        
        
        
        
        //  increase a ratio (used to reveal cropped lines) if we're lingering
        
        if (lastLineDrawnLarger == lineDrawnLarger)  { line(246);
            
            lineDrawnLargerRatio = Math.min(1., lineDrawnLargerRatio * 1.05);
            
        } else {
            
            lineDrawnLargerRatio = 1./3.;  line(247);
            
            lastLineDrawnLarger = lineDrawnLarger;  line(245);
            
        }
        
        
        
        //--------------------------------------------------------------------------
        
        //  step the pseudo-fixation point to show how a person might read the code
        
        //  (word by word: quickly)
        
        
        
        //  first check to see if we need to step to the next line
        
        Line lastLine = programLines[drawnFixationLine];  line(206);
        
        
        
        if (programLines[drawnFixationLine] == null ||
            
            drawnFixationPoint >= programLines[drawnFixationLine].s.length()-1) {
            
            line(95);
            
            
            
            //  step to the next line to be read
            
            do {
                
                drawnFixationLine = (++drawnFixationLine) % programLines.length;
                
                line(83);
                
            } while (programLines[drawnFixationLine] == null ||
                     
                     programLines[drawnFixationLine].s.trim().length() == 0);
            
            line(98);
            
            
            
            //  and reset the fixation point
            
            drawnFixationPoint = 0;  line(96);
            
        }
        
        
        
        //  step the fixation point past the next word
        
        drawnFixationPoint = programLines[drawnFixationLine].s.
        
        indexOf(" ", drawnFixationPoint);  line(93);
        
        if (programLines[drawnFixationLine].s.
            
            indexOf("              ", drawnFixationPoint) != -1)
            
            drawnFixationPoint += 14;  line(216);
        
        if (drawnFixationPoint == -1) drawnFixationPoint =
            
            programLines[drawnFixationLine].s.length()-2;  line(94);
        
        drawnFixationPoint++;  line(97);
        
        
        
        //  follow this point if we catch it
        
        if (lineDrawnLarger == lastLine)
            
            lineDrawnLarger = programLines[drawnFixationLine]; line(205);
        
        
        
        //--------------------------------------------------------------------------
        
        //  step the pseudo-insertion point to show how the code was written
        
        //  (character by character: slowly)
        
        
        
        //  increment the insertion point, and if it's at the end of the line
        
        lastLine = programLines[programLineIndexAsWritten[drawnInsertionLine]+
                                
                                drawnInsertionLineBackup];  line(210);
        
        if (++drawnInsertionPoint >
            
            programLines[programLineIndexAsWritten[drawnInsertionLine]+
                         
                         drawnInsertionLineBackup].s.trim().length()) {  line(91);
                
                
                
                //  either back up less (in code space)
                
                if (drawnInsertionLineBackup < 0) {
                    
                    drawnInsertionLineBackup++;  line(106);
                    
                    
                    
                } else {  line(107);
                    
                    
                    
                    //  or step to the next line in the order that they were written
                    
                    do { drawnInsertionLine = (++drawnInsertionLine) %
                        
                        programLineIndexAsWritten.length;  line(84);
                        
                    } while (programLineIndexAsWritten[drawnInsertionLine] == 0);
                    
                    
                    
                    //  then back up in the actual code 'til there's another line() call
                    
                    drawnInsertionLineBackup = 0;  line(104);
                    
                    do {
                        
                        drawnInsertionLineBackup--;
                        
                    } while (drawnInsertionLine + drawnInsertionLineBackup > 0 &&
                             
                             programLineIndexAsWritten[drawnInsertionLine]+
                             
                             drawnInsertionLineBackup > 0 &&
                             
                             programLines[programLineIndexAsWritten[drawnInsertionLine]+
                                          
                                          drawnInsertionLineBackup].s.indexOf("//") != 0 &&
                             
                             programLines[programLineIndexAsWritten[drawnInsertionLine]+
                                          
                                          drawnInsertionLineBackup].hasLineCall == false);  line(105);
                    
                    
                    
                    drawnInsertionLineBackup++;  line(108);
                    
                }
                
                
                
                //  and always reset the insertion point to the beginning of the line
                
                drawnInsertionPoint = 0;  line(92);
                
            }
        
        
        
        //  follow this point if we catch it
        
        if (lineDrawnLarger == lastLine)
            
            lineDrawnLarger = programLines[programLineIndexAsWritten[drawnInsertionLine]+
                                           
                                           drawnInsertionLineBackup]; line(209);
        
        
        
        //--------------------------------------------------------------------------
        
        //  step the pseudo-program counter to show how a profiler reads the code
        
        //  (line by line: very quickly)
        
        if (drawnPCWaitTargetLine == -1) {
            
            lastLine = programLines[programLineIndexAsWritten[
                                                              
                                                              programTrace[drawnPC]]];  line(207);
            
            drawnPC = (++drawnPC) % programTrace.length;  line(74);
            
            
            
            //  get a fresh sample of execution trace once we've shown the full array
            
            //  (use the current insertion point to hash the sample a little)
            
            if (drawnPC == 0) pc = -drawnInsertionLine * 10;  line(99);
            
            
            
            //  follow this point if we catch it
            
            if (lineDrawnLarger == lastLine)
                
                lineDrawnLarger = programLines[programLineIndexAsWritten[
                                                                         
                                                                         programTrace[drawnPC]]]; line(208);
            
        }
        
    }
    
    
    
    
    
    //==============================================================================
    
    long lastUpdateTime = 0;  int i10 = line(69);
    
    boolean go = true;  int i23 = line(243);
    
    Line lineToStartTraces = null;  int i26 = line(254);
    
    public void run () {



        programLines = readFile(getParameter("fileName"));  line(32);
        
        
        
        addMouseMotionListener(new MouseMotionAdapter() {
            
            public void mouseMoved(MouseEvent e) {
                
                lineDrawnLarger = findLineUnderMouse(e);  line(116);
                
            }});
        
        
        
        addMouseListener(new MouseAdapter() {
            
            public void mousePressed(MouseEvent e) {
                
                lineDrawnLarger = findLineUnderMouse(e);  line(250);
                
            }
            
            public void mouseClicked(MouseEvent e) {
                
                lineToStartTraces = findLineUnderMouse(e);  line(248);
                
            }});
        
        
        
        while (go) {
            
            
            
            //  step forward in the state of the world model
            
            step();  line(73);
            
            
            
            //  draw the whole world again
            
            drawAll(getGraphics());  line(72);
            
            
            
            //  insure at least 15 milliseconds between draws
            
            try {
                
                Thread.sleep(Math.max(0,
                                      
                                      15 - (System.currentTimeMillis() - lastUpdateTime)));  line(70);
                
            } catch (Exception e) { e.printStackTrace();  }
            
            lastUpdateTime = System.currentTimeMillis();  line(71);
            
        }
        
    }
    
    
    
    
    
    //==============================================================================
    
    int lineUnderMouseIndex;  int i22 = line(227);
    
    public Line findLineUnderMouse (MouseEvent e) {  line(114);
        
        
        
        Line lineUnderMouse = null;  line(119);
        
        lineUnderMouseIndex = -1;  line(226);
        
        for (int i = 0; i < programLines.length; i++) {
            
            if (e.getX() > (programLines[i].x - programLines[i].leadingPixels) &&
                
                e.getX() < (programLines[i].x -
                            
                            programLines[i].leadingPixels + columnWidth) &&
                
                e.getY() > programLines[i].y - 3 &&
                
                e.getY() < programLines[i].y) {
                
                lineUnderMouse = programLines[lineUnderMouseIndex = i];
                
                line(118);
                
                break;
                
            }
            
            
            
        }  line(115);
        
        
        
        return lineUnderMouse;
        
    }
    
    
    
    
    
    //==============================================================================
    
    int pc = 0, drawnPCWaitTargetLine = -1;  int i5 = line(38);
    
    int line (int i) { return line(i, false); }
    
    int line (int i, boolean recur) {  if (recur) line(3);
        
        
        
        //  if a click made us wait for this line to execute, stop waiting and trace
        
        if (drawnPCWaitTargetLine == i) {
            
            drawnPC = pc = 0;  if (recur) line(237);
            
            drawnPCWaitTargetLine = -1;  if (recur) line(240);
            
        }
        
        
        
        //  trace execution
        
        if (programTrace != null && pc < programTrace.length &&
            
            drawnPCWaitTargetLine == -1)
            
            programTrace[Math.max(0, Math.min(pc++, programTrace.length-1))] = i;
        
        if (recur) line(39);
        
        
        
        //  count the number of times this line is executed
        
        if (programLineExecutionCount != null)
            
            programLineExecutionCount[i]++;  if (recur) line(133);
        
        
        
        return i;
        
    }
    
    
    
    
    
    //==============================================================================
    
    void brightenExecutedLines (Graphics g, boolean all) {  line(135);
        
        
        
        //  loop through all lines as written and update their brightness
        
        for (int i = 0; i < programLineIndexAsWritten.length; i++) {  line(140);
            
            
            
            //  calculate a new brightness level
            
            double newBrightness =
            
            (Math.log((double) programLineExecutionCount[i] + 1));  line(141);
            
            
            
            //  if it's different enough
            
            if (all || (programLines != null && (Math.abs(newBrightness -
                                                          
                                                          programLines[programLineIndexAsWritten[i]].brightness) > .4)) &&
                
                programLineIndexAsWritten[i] != 0) {
                
                line(143);
                
                
                
                //  find the line we want to check
                
                int index = programLineIndexAsWritten[i], backup = 0;  line(137);
                
                
                
                //  set the new level
                
                programLines[index].brightness = newBrightness;  line(142);
                
                
                
                //  set the new color
                
                int greenComponent = (int) Math.min(150,
                                                    
                                                    70 + programLines[index].brightness * 2);  line(149);
                
                g.setColor(
                           
                           new Color(greenComponent/3, greenComponent, greenComponent/3));
                
                line(136);
                
                
                
                //  draw the line again (and those before it until another line() call)
                
                if (programLines != null && programLines[index] != null) {
                    
                    
                    
                    do {
                        
                        g.drawString(programLines[index+backup].s,
                                     
                                     programLines[index+backup].x,
                                     
                                     programLines[index+backup].y);  line(138);
                        
                        
                        
                        backup--;
                        
                        
                        
                    } while (index+backup > 0 &&
                             
                             programLines[index+backup].s.indexOf("//") != 0 &&
                             
                             programLines[index+backup].hasLineCall == false); line(139);
                    
                }
                
            }
            
        }
        
    }
    
    
    
    
    
    //==============================================================================
    
    Line[] readFile (String fileName) {  line(4);
        
        
        
        Vector v = new Vector();  line(10);
        
        
        
        try {  line(7);
            
            
            
            //  open the file
            
            InputStream is = (new URL(getCodeBase() + fileName)).openStream();
            
            line(5);
            
            BufferedReader br = new BufferedReader (new InputStreamReader(is));
            
            line(19);
            
            
            
            //  read every line in it
            
            Line l;  line(12);
            
            do {  line(13);
                
                l = readLine(br);  line(9);
                
                if (l != null) v.addElement(l);  line(11);
                
            } while (l != null);  line(14);
            
            
            
            is.close();  line(6);
            
            
            
        } catch (Exception e) { System.err.println(e); }  line(8);
        
        
        
        //  put all the lines we read into an array of Line objects
        
        Line lines[] = new Line[v.size()];  line(33);
        
        for (int i = 0; i < v.size(); i++) {
            
            lines[i] = (Line) v.elementAt(i);  line(48);
            
            
            
            //  remember where we are in the program
            
            lines[i].lineIndex = i;
            
            
            
            //  if there's a call to line() here put the index of this Line in
            
            //  programLineIndexAsWritten
            
            int lineCallPos = lines[i].s.indexOf("line(");  line(85);
            
            int lineCallEndPos = lines[i].s.indexOf(")", lineCallPos);  line(82);
            
            if (lineCallPos != -1 &&
                
                Character.isDigit(lines[i].s.charAt(lineCallEndPos-1))) {
                
                
                
                //  remember if there's a call to line() in this line
                
                lines[i].hasLineCall = true;  line(103);
                
                
                
                //  this array finds the line index from the time it was written
                
                //  (the parameter to line() )
                
                programLineIndexAsWritten[lastLineCallInProgram =
                                          
                                          lines[i].lineAsWrittenIndex = Integer.parseInt(
                                                                                         
                                                                                         lines[i].s.substring(lineCallPos + 5, lineCallEndPos))] = i;
                
                line(81);
                
                
                
            }
            
        }
        
        return lines;
        
    }
    
    
    
    
    
    //==============================================================================
    
    byte buffer[] = new byte[1000]; int i3 = line(31);
    
    Line readLine (BufferedReader br) {  line(15);
        
        int length = 0;  line(20);
        
        int ch = 0;  line(21);
        
        
        
        try {  line(22);
            
            while ((ch = br.read()) != '\n' && ch != '\r' && ch != -1)
                
                buffer[length++] = (byte) ch;  line(23);
            
            
            
            //  -1 means EOF
            
            if (ch == -1) return null;  line(24);
            
            
            
            //  skip a line feed if this was a carriage return
            
            if (ch == '\r') {  line(25);
                
                ch = br.read();  line(26);
                
            }  line(27);
            
            
            
        } catch (Exception e) { return null; }  line(28);
        
        
        
        if (length == 0) return new Line("");  line(29);
        
        
        
        return new Line(new String(buffer, 0, length + line(30) * 0) + " ");
        
        
        
    }
    
    
    
    
    
    //==============================================================================
    
    Image cacheImage, offscreenImage;  int i7 = line(54);
    
    Graphics cacheGraphics, offscreenGraphics;  int i8 = line(55);
    
    boolean drawCacheNeeded = true, resetTraceVectors = false; int i9 = line(62);
    
    Vector pastPCPositions = null;  int i13 = line(109);
    
    Vector pastFixationPositions = null;  int i18 = line(177);
    
    Line lastFixationLine;  int i21 = line(200);
    
    Vector pastInsertionPositions = null;  int i19 = line(184);
    
    Line lastInsertionLine;  int i20 = line(197);
    
    public synchronized void drawAll (Graphics g) {  line(53);
        
        
        
        //  don't even try if we don't have a full-sized window yet
        
        if (size().width < 21 || size().height < 21) {  line(255);
            
            return;
            
        }
        
        
        
        //--------------------------------------------------------------------------
        
        //  get an offscreen buffer: double-buffering for smooth animation
        
        if (offscreenImage == null ||
            
            size().width != offscreenImage.getWidth(this) ||
            
            size().height != offscreenImage.getHeight(this)) {  line(56);
            
            
            
            setFont(new Font("Courier", Font.PLAIN,
                             
                             Math.max(1, size().width / 320)));  line(78);
            
            
            
            offscreenImage = createImage(size().width, size().height);  line(57);
            
            offscreenGraphics = offscreenImage.getGraphics();  line(58);
            
            resetTraceVectors = true;  line(228);
            
        }
        
        
        
        //  get a cache buffer: so we don't have to draw everything every frame
        
        if (cacheImage == null ||
            
            size().width != cacheImage.getWidth(this) ||
            
            size().height != cacheImage.getHeight(this)) {  line(59);
            
            cacheImage = createImage(size().width, size().height);  line(60);
            
            cacheGraphics = cacheImage.getGraphics();  line(61);
            
            drawCacheNeeded = true;  line(63);
            
        }
        
        
        
        //  be safe--check to see if we got what we wanted above
        
        if (cacheGraphics == null || offscreenGraphics == null)
            
            return; line(131);
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  draw the cache if it needs refreshing
        
        if (drawCacheNeeded) drawCache(cacheGraphics);  line(66);
        
        
        
        //  fix the cache if there are changes in it
        
        if (programLines != null)
            
            brightenExecutedLines(cacheGraphics, false);  line(144);
        
        
        
        //  copy the graphics cache into the back buffer
        
        offscreenGraphics.drawImage(cacheImage, 0, 0, this);  line(67);
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  draw the traces
        
        if (resetTraceVectors) {  line(229);
            
            pastPCPositions = new Vector();  line(217);
            
            pastFixationPositions = new Vector();  line(218);
            
            pastInsertionPositions = new Vector();  line(219);
            
            resetTraceVectors = false;
            
        }
        
        drawFixationTrace(g);
        
        drawInsertionTrace(g);
        
        drawExecutionTrace(g);
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  draw the line under the mouse or stuck to a point larger and brighter
        
        Line lineRecentlyDrawnLarger = lineDrawnLarger;  line(124);
        
        if (lineRecentlyDrawnLarger != null) { line(121);
            
            offscreenGraphics.setColor(new Color(30, 255, 30));  line(120);
            
            offscreenGraphics.setFont(
                                      
                                      new Font(getFont().getName(), getFont().getStyle(), 12));  line(122);
            
            offscreenGraphics.drawString(lineRecentlyDrawnLarger.s,  (int) Math.min(
                                                                                    
                                                                                    size().width - lineDrawnLargerRatio *
                                                                                    
                                                                                    getFontMetrics(offscreenGraphics.getFont()).
                                                                                    
                                                                                    stringWidth(lineRecentlyDrawnLarger.s.trim()),
                                                                                    
                                                                                    lineRecentlyDrawnLarger.x), lineRecentlyDrawnLarger.y);  line(123);
            
            offscreenGraphics.setFont(getFont());  line(125);
            
        }
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  draw the line the pseudo-program counter is pointing to
        
        offscreenGraphics.setColor(Color.green);  line(85);
        
        int index = programLineIndexAsWritten[programTrace[drawnPC]],
        
        backup = 0;  line(100);
        
        
        
        if (drawnPCWaitTargetLine == -1 && programTrace[drawnPC] != 0 &&
            
            programLines != null && programLines[index] != null) {
            
            
            
            do {
                
                offscreenGraphics.drawString(programLines[index+backup].s,
                                             
                                             programLines[index+backup].x, programLines[index+backup].y);
                
                line(86);
                
                
                
                //  remember the position if it's not a blank line
                
                if (programLines[index+backup].s.trim().length() != 0 &&
                    
                    programLines[index+backup].y > 1 && drawnPC < pc) {
                    
                    pastPCPositions.insertElementAt(
                                                    
                                                    new Point(programLines[index+backup-1].x,
                                                              
                                                              programLines[index+backup-1].y),
                                                    
                                                    Math.max(0, pastPCPositions.size() + backup));
                    
                }  line(110);
                
                
                
                backup--;
                
                
                
            } while (index+backup > 0 &&
                     
                     programLines[index+backup].s.indexOf("//") != 0 &&
                     
                     programLines[index+backup].hasLineCall == false);  line(102);
            
        }
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  draw the fixation point
        
        if (programLines != null) {  line(113);
            
            offscreenGraphics.setColor(new Color(255, 255*7/8, 0));  line(87);
            
            
            
            //  if it's the attended line draw it larger and brighter
            
            if (lineRecentlyDrawnLarger == programLines[drawnFixationLine])
                
                offscreenGraphics.setFont(new Font(getFont().getName(),
                                                   
                                                   getFont().getStyle(), 12));  line(126);
            
            
            
            offscreenGraphics.drawString(
                                         
                                         programLines[drawnFixationLine].s.substring(0, drawnFixationPoint),
                                         
                                         (int) Math.min(size().width - lineDrawnLargerRatio *
                                                        
                                                        getFontMetrics(offscreenGraphics.
                                                                       
                                                                       getFont()).stringWidth(programLines[drawnFixationLine].s.trim()),
                                                        
                                                        programLines[drawnFixationLine].x),
                                         
                                         programLines[drawnFixationLine].y);  line(88);
            
            
            
            //  remember the position if it's not a blank line
            
            if (lastFixationLine == null ||
                
                lastFixationLine != programLines[drawnFixationLine] &&
                
                programLines[drawnFixationLine].s.trim().length() != 0 &&
                
                programLines[drawnFixationLine].y > 1) {
                
                pastFixationPositions.addElement(
                                                 
                                                 new Point(programLines[drawnFixationLine].x +
                                                           
                                                           getFontMetrics(getFont()).stringWidth(
                                                                                                 
                                                                                                 programLines[drawnFixationLine].s.trim()),
                                                           
                                                           programLines[drawnFixationLine].y));  line(178);
                
                pastFixationPositions.addElement(
                                                 
                                                 new Point(programLines[drawnFixationLine].x,
                                                           
                                                           programLines[drawnFixationLine].y));  line(201);
                
            }
            
            lastFixationLine = programLines[drawnFixationLine];  line(202);
            
            
            
            //  if it's the line drawn larger put the font back to normal
            
            if (lineRecentlyDrawnLarger == programLines[drawnFixationLine])
                
                offscreenGraphics.setFont(getFont());  line(127);
            
            
            
        }
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  draw the insertion point
        
        offscreenGraphics.setColor(Color.white);  line(89);
        
        if (programLineIndexAsWritten[drawnInsertionLine] != 0) {
            
            
            
            Line insertionLine = programLines[programLineIndexAsWritten[
                                                                        
                                                                        drawnInsertionLine]+drawnInsertionLineBackup];  line(148);
            
            
            
            //  if it's the attended line draw it larger and brighter
            
            if (lineRecentlyDrawnLarger == insertionLine)
                
                offscreenGraphics.setFont(new Font(getFont().getName(),
                                                   
                                                   getFont().getStyle(), 12));  line(146);
            
            
            
            offscreenGraphics.drawString(
                                         
                                         insertionLine.s.substring(0, drawnInsertionPoint),
                                         
                                         (int) Math.min(size().width - lineDrawnLargerRatio *
                                                        
                                                        getFontMetrics(offscreenGraphics.getFont()).
                                                        
                                                        stringWidth(insertionLine.s.trim()),
                                                        
                                                        insertionLine.x), insertionLine.y);  line(90);
            
            
            
            //  remember the position if it's not a blank line
            
            if (lastInsertionLine == null ||
                
                lastInsertionLine != insertionLine &&
                
                insertionLine.s.trim().length() != 0 &&
                
                insertionLine.y > 1) {
                
                pastInsertionPositions.addElement(
                                                  
                                                  new Point(insertionLine.x, insertionLine.y));  line(199);
                
                pastInsertionPositions.addElement(
                                                  
                                                  new Point(insertionLine.x +
                                                            
                                                            getFontMetrics(getFont()).stringWidth(
                                                                                                  
                                                                                                  insertionLine.s.trim()),
                                                            
                                                            insertionLine.y));  line(185);
                
            }
            
            lastInsertionLine = insertionLine;  line(198);
            
            
            
            //  if it's the line drawn larger put the font back to normal
            
            if (lineRecentlyDrawnLarger == insertionLine)
                
                offscreenGraphics.setFont(getFont());  line(147);
            
        }
        
        
        
        
        
        //--------------------------------------------------------------------------
        
        //  copy the graphics cache into the back buffer   
        
        g.drawImage(offscreenImage, 0, 0, this);  line(68);
        
    }
    
    
    
    
    
    //==============================================================================   
    
    void drawExecutionTrace (Graphics g) {
        
        
        
        //  if we just started a new sample of trace, start a new trace line   
        
        if (drawnPC == 0) pastPCPositions = new Vector();  line(150);
        
        
        
        //  trim the line to trace only the last 200 PC positions   
        
        while (pastPCPositions.size() > 200)
            
            pastPCPositions.removeElementAt(0);  line(111);
        
        
        
        //  draw from the tail forward   
        
        for (int i = 1; i < pastPCPositions.size(); i++) {
            
            
            
            //  fade it out slowly   
            
            int lineBrightness = Math.min(140, 20 + i +
                                          
                                          //  adjust to let short lines glow brightly    
                                          
                                          Math.max(0, 200 - pastPCPositions.size()));  line(211);
            
            
            
            offscreenGraphics.setColor(
                                       
                                       new Color(lineBrightness/8, lineBrightness, lineBrightness/8));
            
            
            
            offscreenGraphics.drawLine(
                                       
                                       ((Point) pastPCPositions.elementAt(i-1)).x,
                                       
                                       ((Point) pastPCPositions.elementAt(i-1)).y,
                                       
                                       ((Point) pastPCPositions.elementAt(i)).x,
                                       
                                       ((Point) pastPCPositions.elementAt(i)).y);  line(112);
            
        }
        
    }
    
    
    
    
    
    //==============================================================================   
    
    void drawInsertionTrace (Graphics g) {
        
        
        
        //  trim the line to trace only the last 30 insertion positions   
        
        while (pastInsertionPositions.size() > 30)
            
            pastInsertionPositions.removeElementAt(0);  line(186);
        
        
        
        if (pastInsertionPositions.size() > 1) {  line(187);
            
            Cubic[][] insertionSpline = calculateNaturalCubic(pastInsertionPositions);
            
            line(188);
            
            
            
            Line insertionLine = programLines[programLineIndexAsWritten[
                                                                        
                                                                        drawnInsertionLine]+drawnInsertionLineBackup];  line(212);
            
            double lastStepRatio = (insertionLine.s.trim().length() == 0) ? 1. :
            
            (double) drawnInsertionPoint / insertionLine.s.trim().length();
            
            line(213);
            
            
            
            //  draw from the tail forward   
            
            double steps = 40;  line(189);
            
            for (int i = 0;
                 
                 i < insertionSpline.length -
                 
                 (lastStepRatio < .5 && lastStepRatio != 0. ? 2 : 1); i++) {
                
                
                
                //  fade it out slowly   
                
                int lineBrightness = Math.min(140, 20 + i*5 +
                                              
                                              Math.max(0, 30 - insertionSpline.length)*5);  line(204);
                
                offscreenGraphics.setColor(
                                           
                                           new Color(lineBrightness, lineBrightness, lineBrightness));
                
                
                
                //  figure out where to stop   
                
                int lastStep = (int) steps;  line(214);
                
                if (lastStepRatio < .5 && lastStepRatio != 0. &&
                    
                    i == insertionSpline.length - 3)
                    
                    lastStep = (int) (lastStepRatio * 2 * steps);
                
                else if (lastStepRatio >= .5 && i == insertionSpline.length - 2)
                    
                    lastStep = (int) ((lastStepRatio - .5) * 2 * steps);  line(215);
                
                
                
                //  do the drawing   
                
                Point p2, p1 = new Point(
                                         
                                         (int) Math.round(insertionSpline[i][0].evaluate(0)),
                                         
                                         (int) Math.round(insertionSpline[i][1].evaluate(0)));  line(194);
                
                
                
                for (int j = 1; j <= lastStep; j++) {
                    
                    p2 = new Point(
                                   
                                   (int) Math.round(insertionSpline[i][0].evaluate(j / steps)),
                                   
                                   (int) Math.round(insertionSpline[i][1].evaluate(j / steps)));
                    
                    line(195);
                    
                    if (p1 != null)
                        
                        offscreenGraphics.drawLine(p1.x, p1.y, p2.x, p2.y);
                    
                    line(190);
                    
                    p1 = p2;  line(196);
                    
                }
                
            }
            
        }
        
    }
    
    
    
    
    
    //==============================================================================   
    
    void drawFixationTrace (Graphics g) {
        
        
        
        //  trim the line to trace only the last 80 fixation positions   
        
        while (pastFixationPositions.size() > 80)
            
            pastFixationPositions.removeElementAt(0);  line(179);
        
        
        
        if (pastFixationPositions.size() > 1) {  line(183);
            
            Cubic[][] fixationSpline = calculateNaturalCubic(pastFixationPositions);
            
            line(180);
            
            
            
            //  draw from the tail forward   
            
            for (int i = 0; i < fixationSpline.length - 1; i++) {
                
                
                
                //  fade it out slowly   
                
                int lineBrightness = Math.min(120, 20 + (int) (i*1.5) +
                                              
                                              Math.max(0, 80 - fixationSpline.length)*2);  line(203);
                
                offscreenGraphics.setColor(
                                           
                                           new Color(lineBrightness, lineBrightness*7/8, lineBrightness/4));
                
                
                
                double steps = 13;  line(157);
                
                Point p2, p1 = new Point(
                                         
                                         (int) Math.round(fixationSpline[i][0].evaluate(0)),
                                         
                                         (int) Math.round(fixationSpline[i][1].evaluate(0)));  line(191);
                
                
                
                for (int j = 1; j <= steps; j++) {
                    
                    p2 = new Point(
                                   
                                   (int) Math.round(fixationSpline[i][0].evaluate(j / steps)),
                                   
                                   (int) Math.round(fixationSpline[i][1].evaluate(j / steps)));
                    
                    line(192);
                    
                    if (p1 != null)
                        
                        offscreenGraphics.drawLine(p1.x, p1.y, p2.x, p2.y);
                    
                    line(181);
                    
                    p1 = p2;  line(193);
                    
                }
                
            }
            
        }
        
    }
    
    
    
    
    
    //==============================================================================   
    
    void drawCache (Graphics g) {
        
        
        
        //  start with a "no-electron CRT" black background   
        
        g.setColor(Color.black);  line(44);
        
        g.fillRect(0, 0, size().width, size().height);  line(45);
        
        
        
        if (programLines != null && cacheImage.getHeight(this) != 0) {
            
            drawCode(g, cacheImage.getWidth(this), cacheImage.getHeight(this));
            
            line(64);
            
            
            
            //  we drew it   
            
            drawCacheNeeded = false;  line(65);
            
        }
        
    }
    
    
    
    
    
    //==============================================================================   
    
    int columnWidth;  int i27 = line(249);
    
    public void drawCode (Graphics g, int w, int h) {  line(41);
        
        int columns = 4, linesPerCol = (programLines.length+columns-1) / columns,
        
        margin = w/8, colSpacing = columnWidth = (w - margin*2 - getFontMetrics(
                                                                                
                                                                                g.getFont()).stringWidth(" ")*100) / (columns - 1);  line(49);
        
        double lineHeight = (h - margin*2) / (double) (linesPerCol+2);  line(50);
        
        
        
        //  draw the code in "early CRT phosphor" green   
        
        g.setColor(new Color(20, 80, 20));  line(46);
        
        
        
        //  draw every line of the code we have read   
        
        for (int i = 0; i < programLines.length; i++) {  line(43);
            
            if (programLines[i] != null) {
                
                
                
                //  trim leading spaces the first time we draw the line   
                
                if (programLines[i].leadingPixels == -1) {  line(128);
                    
                    programLines[i].leadingPixels =
                    
                    programLines[i].s.indexOf(programLines[i].s.trim()) *
                    
                    getFontMetrics(g.getFont()).stringWidth(" ");  line(129);
                    
                    
                    
                    //  trailing spaces make us pause in the word-by-word reading mode   
                    
                    programLines[i].s = programLines[i].s.trim() + "             ";
                    
                    line(130);
                    
                }
                
                
                
                programLines[i].x = margin + programLines[i].leadingPixels +
                
                (i / linesPerCol) * colSpacing;  line(76);
                
                programLines[i].y =
                
                margin + (int) ((i % linesPerCol) * lineHeight);  line(77);
                
                g.drawString(
                             
                             programLines[i].s, programLines[i].x, programLines[i].y);  line(47);
                
            }
            
        }
        
        
        
        brightenExecutedLines(g, true);  line(145);
        
    }
    
    
    
    
    
    //==============================================================================   
    
    Thread thread; int i4 = line(34);
    
    public void start() {  line(35);
        
        thread = new Thread(this);  line(36);
        
        thread.start();  line(37);
        
    }
    
    
    
    
    
    //==============================================================================   
    
    public void stop() {  line(241);
        
        go = false;  line(242);
        
    }
    
    
    
    
    
    //==============================================================================   
    
    public void update (Graphics g) { paint(g); line(40); }
    
    
    
    
    
    //==============================================================================   
    
    public void paint (Graphics g) {  line(51);
        
        drawAll(g);  line(52);
        
    }
    
    
    
    
    
    //==============================================================================   
    
    Cubic[][] calculateNaturalCubic (Vector v) {  line(153);
        
        int i, n = v.size()-1;  line(159);
        
        double gammas[] = new double[n+1];  line(154);
        
        double deltaXs[] = new double[n+1];  line(155);
        
        double DXs[] = new double[n+1];  line(156);
        
        double deltaYs[] = new double[n+1];  line(175);
        
        double DYs[] = new double[n+1];  line(176);
        
        
        
        
        
        //--------------------------------------------------------------------------   
        
        //  gammas   
        
        gammas[0] = 1/2d;  line(158);
        
        for (i = 1; i < n; i++)
            
            gammas[i] = 1/(4-gammas[i-1]);  line(160);
        
        gammas[n] = 1/(2-gammas[n-1]);  line(161);
        
        
        
        
        
        //--------------------------------------------------------------------------   
        
        //  deltas for x   
        
        deltaXs[0] = 3 * (((Point) v.elementAt(1)).x - ((Point) v.elementAt(0)).x) *
        
        gammas[0];  line(162);
        
        for (i = 1; i < n; i++)
            
            deltaXs[i] =
            
            (3 * (((Point) v.elementAt(i+1)).x - ((Point) v.elementAt(i-1)).x) -
             
             deltaXs[i-1]) * gammas[i];  line(163);
        
        deltaXs[n] = (3 * (((Point) v.elementAt(n)).x - ((Point) v.elementAt(n-1)).x) -
                      
                      deltaXs[n-1]) * gammas[n];  line(164);
        
        
        
        //  Ds for x   
        
        DXs[n] = deltaXs[n];  line(165);
        
        for (i = n-1; i >= 0; i--)
            
            DXs[i] = deltaXs[i] - gammas[i] * DXs[i+1];   line(166);
        
        
        
        
        
        //--------------------------------------------------------------------------   
        
        //  deltas for y   
        
        deltaYs[0] = 3 * (((Point) v.elementAt(1)).y - ((Point) v.elementAt(0)).y) *
        
        gammas[0];  line(167);
        
        for (i = 1; i < n; i++)
            
            deltaYs[i] =
            
            (3 * (((Point) v.elementAt(i+1)).y - ((Point) v.elementAt(i-1)).y) -
             
             deltaYs[i-1]) * gammas[i];  line(168);
        
        deltaYs[n] = (3 * (((Point) v.elementAt(n)).y - ((Point) v.elementAt(n-1)).y) -
                      
                      deltaYs[n-1]) * gammas[n];  line(169);
        
        
        
        //  Ds for y   
        
        DYs[n] = deltaYs[n];  line(170);
        
        for (i = n-1; i >= 0; i--)
            
            DYs[i] = deltaYs[i] - gammas[i] * DYs[i+1];   line(171);
        
        
        
        
        
        //--------------------------------------------------------------------------   
        
        //  coefficients of the cubics   
        
        Cubic coefficients[][] = new Cubic[n][2];  line(172);
        
        for (i = 0; i < n; i++) {
            
            coefficients[i][0] = new Cubic(((Point) v.elementAt(i)).x, DXs[i],
                                           
                                           3 * (((Point) v.elementAt(i+1)).x - ((Point) v.elementAt(i)).x) -
                                           
                                           2 * DXs[i] - DXs[i+1],
                                           
                                           2 * (((Point) v.elementAt(i)).x - ((Point) v.elementAt(i+1)).x) +
                                           
                                           DXs[i] + DXs[i+1]);  line(173);
            
            
            
            coefficients[i][1] = new Cubic(((Point) v.elementAt(i)).y, DYs[i],
                                           
                                           3 * (((Point) v.elementAt(i+1)).y - ((Point) v.elementAt(i)).y) -
                                           
                                           2 * DYs[i] - DYs[i+1],
                                           
                                           2 * (((Point) v.elementAt(i)).y - ((Point) v.elementAt(i+1)).y) +
                                           
                                           DYs[i] + DYs[i+1]);  line(174);
            
        }
        
        return coefficients;
        
    }
    
}
