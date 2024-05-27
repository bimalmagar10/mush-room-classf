from fastapi import FastAPI,HTTPException
from pydantic import BaseModel,Field
import pandas as pd
from pathlib import Path
from model.model import encode_input,model_prediction

root_directory = Path(__file__).resolve(True).parent.parent.parent


app = FastAPI()





# {
#   "cap_shape": "x",
#   "cap_surface": "s",
#   "cap_color": "y",
#   "bruises": "t",
#   "odor": "a",
#   "gill_attachment": "f",
#   "gill_spacing": "c",
#   "gill_size": "b",
#   "gill_color": "k",
#   "stalk_shape": "e",
#   "stalk_root": "c",
#   "stalk_surface_above_ring": "s",
#   "stalk_surface_below_ring": "s",
#   "stalk_color_above_ring": "w",
#   "stalk_color_below_ring": "w",
#   "veil_color": "w",
#   "ring_number": "o",
#   "ring_type": "p",
#   "spore_print_color": "n",
#   "population": "n",
#   "habitat": "g"
# }


class Mushroom(BaseModel):
    cap_shape:object#['x', 'b', 's', 'f', 'k', 'c']
    cap_surface:object #['s', 'y', 'f', 'g']
    cap_color:object #['n', 'y', 'w', 'g', 'e', 'p', 'b', 'u', 'c', 'r']
    bruises:object #['t', 'f']
    odor:object #['p', 'a', 'l', 'n', 'f', 'c', 'y', 's', 'm']
    gill_attachment:object #['f', 'a']
    gill_spacing:object #['c', 'w']
    gill_size:object   #['n', 'b']
    gill_color:object #['k', 'n', 'g', 'p', 'w', 'h', 'u', 'e', 'b', 'r', 'y', 'o']
    stalk_shape:object #['e', 't']
    stalk_root:object #['e', 'c', 'b', 'r', '?']
    stalk_surface_above_ring:object # ['s', 'f', 'k', 'y']
    stalk_surface_below_ring:object #['s', 'f', 'y', 'k']
    stalk_color_above_ring:object #['w', 'g', 'p', 'n', 'b', 'e', 'o', 'c', 'y'
    stalk_color_below_ring:object #['w', 'p', 'g', 'b', 'n', 'e', 'y', 'o', 'c']
    veil_color:object #['w', 'n', 'o', 'y']
    ring_number:object #['o', 't', 'n']
    ring_type:object #['p', 'e', 'l', 'f', 'n']
    spore_print_color:object #['k', 'n', 'u', 'h', 'w', 'r', 'o', 'y', 'b'
    population:object #['s', 'n', 'a', 'v', 'y', 'c']
    habitat:object #['u', 'g', 'm', 'd', 'p', 'w', 'l']

def replace_underscore_with_dash(input_dict):
    return {key.replace("_","-"):value for key,value in input_dict.items()} 

@app.post("/predict")
def predict_edible_poisonous(data:Mushroom):
    missing_fields = [field for field, value in data.dict().items() if value is None]
    if missing_fields:
        raise HTTPException(status_code=422, detail=f"{', '.join(missing_fields)} required!")

    data = replace_underscore_with_dash(data.dict())
    input_data = pd.DataFrame([data])
    input_data = input_data.astype("category")

    label_encoded_data = encode_input(input_data)
    
    return model_prediction(label_encoded_data)

