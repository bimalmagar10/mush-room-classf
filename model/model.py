from fastapi import HTTPException
from pathlib import Path
import pickle

root_directory = Path(__file__).resolve(True).parent.parent

with open(f"{root_directory}/notebook/label-encoders.pkl","rb") as f:
    label_encoder = pickle.load(f)
with open(f"{root_directory}/notebook/trained-mushroom-classification-model-v-1.pkl","rb") as f:
    model = pickle.load(f)
with open(f"{root_directory}/notebook/target-encoder.pkl","rb") as f:
    target_encoder = pickle.load(f)


def encode_input(input_data):
    for column,le in label_encoder.items():
            if column in input_data:
                try:
                    # Verify that the value exists in the encoder's known categories
                    if not all(input_data[column].isin(le.classes_)):
                        invalid_values = input_data[~input_data[column].isin(le.classes_)][column].tolist()
                        raise HTTPException(
                            status_code=400, 
                            detail=f"Invalid input for {column}: {invalid_values[-1]}. "
                                f"Expected one of {le.classes_.tolist()}."
                        )
                    input_data[column] = le.transform(input_data[column])
                except ValueError as e:
                    raise HTTPException(status_code=400, detail=f"Invalid input for {column}: {str(e)}")
    return input_data



def model_prediction(input_data):
    prediction = model.predict(input_data)
    return {
        "result":"p" if prediction[-1] == 1 else "e"
    }
