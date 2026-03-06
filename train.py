"""Train the coffee taste prediction model and save it as model.joblib."""

from pathlib import Path

import joblib
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split


DATASET_PATH = Path("coffee_quality_dataset.csv")
MODEL_PATH = Path("model.joblib")
TARGET_COLUMN = "taste_score"
FEATURE_COLUMNS = [
    "beans_quality",
    "roast_level",
    "grind_size",
    "water_temp",
    "brew_time",
]
TEST_SIZE = 0.2
RANDOM_STATE = 42
MODEL_NAME = "RandomForestRegressor"
MODEL_CONFIG = {
    "n_estimators": 100,
    "random_state": RANDOM_STATE,
}


def load_dataset(path: Path) -> pd.DataFrame:
    """Load the training dataset from disk."""
    return pd.read_csv(path)


def build_model() -> RandomForestRegressor:
    """Create the regression model used by the Streamlit application."""
    return RandomForestRegressor(**MODEL_CONFIG)


def main() -> None:
    """Train, evaluate, and persist the coffee quality model."""
    dataset = load_dataset(DATASET_PATH)

    features = dataset[FEATURE_COLUMNS]
    target = dataset[TARGET_COLUMN]

    X_train, X_test, y_train, y_test = train_test_split(
        features,
        target,
        test_size=TEST_SIZE,
        random_state=RANDOM_STATE,
    )

    model = build_model()
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    mae = mean_absolute_error(y_test, predictions)

    joblib.dump(model, MODEL_PATH)

    print("Coffee Quality Predictor Training")
    print(f"Dataset path: {DATASET_PATH}")
    print(f"Rows: {len(dataset)}")
    print(f"Features: {', '.join(FEATURE_COLUMNS)}")
    print(f"Target: {TARGET_COLUMN}")
    print(f"Model: {MODEL_NAME}")
    print(f"Model config: {MODEL_CONFIG}")
    print(f"Train rows: {len(X_train)}")
    print(f"Test rows: {len(X_test)}")
    print(f"Mean Absolute Error: {mae:.4f}")
    print(f"Saved model to: {MODEL_PATH}")


if __name__ == "__main__":
    main()
