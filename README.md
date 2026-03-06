# Coffee Quality Predictor

## Live Demo

🌐 Website  
https://ahmed-dadoue.github.io/Coffee-Quality-Predictor/

🤖 AI App  
https://coffee-quality-predictor-f7vhhhhgmf3rprfth3yjie.streamlit.app


Coffee Quality Predictor is a Streamlit machine learning app that estimates a coffee taste score from brewing inputs such as bean quality, roast level, grind size, water temperature, and brew time.

The application allows users to experiment with different coffee brewing parameters and see how they influence the predicted taste quality.

## Features

- Interactive controls for brewing inputs
- Predicted coffee taste score
- Short explanation block describing the result
- Search for strong brewing settings based on the model
- History of recent attempts
- Recipe heatmap for brew time and water temperature
- Temperature effect visualization
- Dataset preview inside the application

## Tech Stack

- Python
- Streamlit
- pandas
- scikit-learn
- RandomForestRegressor
- Altair
- joblib

## Project Structure

.
├── app.py  
├── train.py  
├── coffee_quality_dataset.csv  
├── model.joblib  
├── requirements.txt  
├── index.html  
├── styles.css  
├── script.js  
└── assets/

- app.py – main Streamlit application  
- train.py – script used to train the machine learning model  
- coffee_quality_dataset.csv – dataset used during training  
- model.joblib – saved trained model  
- requirements.txt – Python dependencies  
- index.html / styles.css / script.js – optional frontend files  
- assets/ – folder for screenshots used in the README  

## Run Locally

Create a virtual environment

python -m venv .venv

Activate the environment

. .\.venv\Scripts\Activate.ps1

Install dependencies

pip install -r requirements.txt

Run the application

streamlit run app.py

If Streamlit is not recognized

python -m streamlit run app.py

## Model Training

The machine learning model can be retrained using the training script

python train.py

## Deploy to Streamlit Community Cloud

1. Push this project to GitHub  
2. Open Streamlit Community Cloud  
3. Click **Create App**  
4. Select your GitHub repository  
5. Set the main file to `app.py`  
6. Deploy the application

## Screenshots

Add screenshots to the `assets/` folder and reference them like this

![Application](assets/app.png)

## Notes

This project demonstrates how machine learning can be used to explore relationships between coffee brewing parameters and predicted taste quality.