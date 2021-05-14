import os
from dotenv import load_dotenv

load_dotenv()

print(os.environ['apiKey'])



####
#firestore config:  {credentials = os.environ['credentials'] }
# Open file D-SD01.txt.
# parse each line .split("|") 
#keys = [SET,ID,NAME,GRADE,NATION,TYPE,RARITY]
#values = str2.split(" | ")

#d = dict(zip(keys, values))

#for k, v in d.items():
#    print(k, v)


#class Card{
#    constructor(SET,ID,NAME,GRADE,NATION,TYPE,RARITY){
#        this.SET= SET,
#        this.ID= ID,
#        this.NAME= NAME,
#        this.GRADE= GRADE,
#        this.NATION= NATION,
#        this.TYPE= TYPE,
#        this.RARITY= RARITY
#    }
#}


        
        
#let card = new Card(1,2,1,1,1,1);
#db.collection.("cards").doc() will be a random string to set the document name inside the collection
#db.collection.("cards").doc("card.ID.toString()") to set doc name as card.ID
#db.collection("cards").doc(card.ID.toString()).withConverter(cardConverter).set(new Card(1,1,1,1,1,1,1,1))




