import os
import sys
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
'''
https://firebase.google.com/docs/firestore/quickstart
To use the Firebase Admin SDK on your own server, use a service account.

Go to IAM & admin > Service accounts in the Cloud Platform Console. 
Generate a new private key and save the JSON file. 
Then use the file to initialize the SDK:
'''
cred = credentials.Certificate('../credentials.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
cards_ref = db.collection(u'cards')
docs = cards_ref.stream()
data = {
    u'name': u'Los Angeles',
    u'state': u'CA',
    u'country': u'USA'
}

def addCard(BOOSTER):
    '''
    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}\n')
        
    
    '''
    f = open(f"../src/img/{BOOSTER}/{BOOSTER}.txt",'r')
    content = f.read().split('\n')
    #how do I pass the card object to set. convert to dict with .__dict__ or builtin vars()
    #print(vars(card))
    #cards_ref.document(f'{card.ID}').set(card.__dict__)
    for line in content:
        ID,NAME,GRADE,NATION,TYPE,RARITY = line.split('|')
        card = Card(BOOSTER,ID,NAME,GRADE,NATION,TYPE,RARITY)
        #print(vars(card))
        cards_ref.document(f'{card.ID}').set(vars(card))
    


class Card:
    def __init__(self,SET,ID,NAME,GRADE,NATION,TYPE,RARITY):
        self.SET= SET
        self.ID= ID
        self.NAME= NAME
        self.GRADE= GRADE
        self.NATION= NATION
        self.TYPE= TYPE
        self.RARITY= RARITY
    def to_dict(self):
        return self
    def __repr__(self) -> str:
        rep = 'Card(' + self.SET + ',' + self.NAME + ')'
        return rep
load_dotenv()
SETS=["D-BT01","D-SD01","D-SD02","D-SD03","D-SD04","D-SD05"]
try:
    BOOSTER=sys.argv[1]
    SETS.index(BOOSTER) and print(f'Found: {BOOSTER}')
    addCard(BOOSTER)
except:
    print("no set")
#print(os.environ['apiKey'])
'''

#print(os.path.splitext("/path/to/some/file.txt")[0])
f = open(f"../src/img/{BOOSTER}/{BOOSTER}.txt",'r')
content = f.read().split('\n')
cards = [];

for line in content:
    ID,NAME,GRADE,NATION,TYPE,RARITY = line.split('|')
    card = Card(BOOSTER,ID,NAME,GRADE,NATION,TYPE,RARITY)


'''
####
#firestore config:  {credentials = os.environ['credentials'] }
# Open file D-SD01.txt.
# parse each line .split("|") 
#keys = [SET,ID,NAME,GRADE,NATION,TYPE,RARITY]
#values = str2.split(" | ")

#d = dict(zip(keys, values))

#for k, v in d.items():
#    print(k, v)





        
        
#let card = new Card(1,2,1,1,1,1);
#db.collection.("cards").doc() will be a random string to set the document name inside the collection
#db.collection.("cards").doc("card.ID.toString()") to set doc name as card.ID
#db.collection("cards").doc(card.ID.toString()).withConverter(cardConverter).set(new Card(1,1,1,1,1,1,1,1))




