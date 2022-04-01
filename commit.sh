#!/bin/bash
# Array with message from https://www.bibliotecapleyades.net/luna/esp_luna_4a.htm	
MESSAGES=("Good show. Sounds like a secondary" 
"the blue one that I described from the lunar module window is colored because it is glass coated" 
"the same texture as the Genesis Rock" 
"Dead on my mark"
"Mark. It's open."
"I can't believe it!"
"And I put that beauty in dry!"
"Dover. Dover. We'll start EVA-2 immediately."
"You'd better send a couple more guys up here. They'll have to try (garble)."
"Sounds familiar."
"Boy, I tell you, these EMUs and PLSSs are really super- fantastic! "
"We felt it under our feet." 
"It's a soft spot." 
"Where we stand, I tell you one thing. If this place had air, it'd sure be beautiful." 
"It's beautiful with or without air." 
"The scenery up on top of Stone Mountain, you'd have to be there to see this to believe it - those domes are incredible!"
"O.K., could you take a look at that smokey area there and see what you can see on the face?"
"Beyond the domes, the structure goes almost into the ravine that I described and one goes to the top." 
"In the northeast wall of the ravine you can't see the delineation." 
"To the northeast there are tunnels, to the north they are dipping east to about 30 degrees."
"O.K., Robert, I guess the big thing I want to report from the back side is that I took another look at the - the - cloverleaf in Aitken with the binocs." 
"And that southern dome (garble) to the east."
"We copy that, Ron. Is there any difference in the color of the dome and the Mare Aitken there?"
"Yes there is... That Condor, Condorsey, or Condorecet or whatever you want to call it there." 
"Condorecet Hotel is the one that has got the diamond shaped fill down in the uh - floor."
"Robert. Understand. Condorcet Hotel."
"Condor. Condorset. Alpha." 
"They've either caught a landslide on it or it's got a - and it doesn't look like (garble) in the other side of the wall in the northwest side."
"O.K., we copy that Northwest wall of Condorcet A."
"The area is oval or elliptical in shape. Of course, the ellipse is toward the top.")

# Seed random generator
RANDOM=$$$(date +%s)

# Get random expression...
commit_message=${MESSAGES[$(($RANDOM % ${#MESSAGES[@]} + 1 ))]} #${MESSAGES[ $RANDOM % ${#MESSAGES[@]} ]}

#generate commit command with random string as commit message
commit_output=`git commit -am "$commit_message"`
echo $commit_output

