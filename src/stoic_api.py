from fastapi import FastAPI
from pydantic import BaseModel
import json

app = FastAPI()

class quote(BaseModel):
    quote: str
    author: str
    
# Read the JSON file and populate the quotes list    
with open('data/all_Phrases.json', 'r') as file:
    quotes = json.load(file)
    
@app.get("/")
def read_quotes():
    return quotes