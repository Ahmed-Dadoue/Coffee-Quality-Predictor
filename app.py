from pathlib import Path

import altair as alt
import joblib
import pandas as pd
import streamlit as st


st.set_page_config(
    page_title="Coffee Quality Predictor",
    page_icon=":coffee:",
    layout="wide",
)


FEATURE_COLUMNS = [
    "beans_quality",
    "roast_level",
    "grind_size",
    "water_temp",
    "brew_time",
]
DATASET_PATH = Path("coffee_quality_dataset.csv")
MODEL_PATH = Path("model.joblib")
DEFAULT_PRESET_KEY = "Custom"
DEFAULT_INPUTS = {
    "beans_quality": 5,
    "roast_level": 2,
    "grind_size": 3,
    "water_temp": 92,
    "brew_time": 30,
}
PRESETS = {
    "Custom": None,
    "Balanced Coffee": {
        "beans_quality": 8,
        "roast_level": 2,
        "grind_size": 3,
        "water_temp": 94,
        "brew_time": 30,
    },
    "Cold Extraction": {
        "beans_quality": 7,
        "roast_level": 2,
        "grind_size": 3,
        "water_temp": 86,
        "brew_time": 30,
    },
    "Over Extracted": {
        "beans_quality": 7,
        "roast_level": 3,
        "grind_size": 2,
        "water_temp": 98,
        "brew_time": 55,
    },
    "Weak Coffee": {
        "beans_quality": 3,
        "roast_level": 1,
        "grind_size": 4,
        "water_temp": 88,
        "brew_time": 15,
    },
}
PRESET_ALIASES = {
    "Benutzerdefiniert": "Custom",
    "Ausgewogener Kaffee": "Balanced Coffee",
    "Kalte Extraktion": "Cold Extraction",
    "Ueberextrahiert": "Over Extracted",
    "Überextrahiert": "Over Extracted",
    "Schwacher Kaffee": "Weak Coffee",
    "مخصص": "Custom",
    "قهوة متوازنة": "Balanced Coffee",
    "استخلاص بارد": "Cold Extraction",
    "استخلاص زائد": "Over Extracted",
    "قهوة خفيفة": "Weak Coffee",
}
ROAST_LABELS = {
    1: "Light (1)",
    2: "Medium (2)",
    3: "Medium-Dark (3)",
    4: "Dark (4)",
}
GRIND_LABELS = {
    1: "Very fine (1)",
    2: "Fine (2)",
    3: "Medium (3)",
    4: "Coarse (4)",
    5: "Very coarse (5)",
}


def normalize_preset_key(value: str | None) -> str:
    if value in PRESETS:
        return value
    if value in PRESET_ALIASES:
        return PRESET_ALIASES[value]
    return DEFAULT_PRESET_KEY


def init_state() -> None:
    legacy_preset = st.session_state.get("selected_preset")
    current_preset = st.session_state.get("preset_key", legacy_preset)
    st.session_state.preset_key = normalize_preset_key(current_preset)

    if "history" not in st.session_state:
        st.session_state.history = []
    if "last_score" not in st.session_state:
        st.session_state.last_score = None

    for key, value in DEFAULT_INPUTS.items():
        st.session_state.setdefault(key, value)


@st.cache_resource
def load_model():
    return joblib.load(MODEL_PATH)


@st.cache_data(show_spinner=False)
def load_dataset():
    return pd.read_csv(DATASET_PATH)


@st.cache_data(show_spinner=False)
def find_best_settings(_model):
    candidate_rows = [
        {
            "beans_quality": beans_quality,
            "roast_level": roast_level,
            "grind_size": grind_size,
            "water_temp": water_temp,
            "brew_time": brew_time,
        }
        for beans_quality in range(1, 11)
        for roast_level in range(1, 5)
        for grind_size in range(1, 6)
        for water_temp in range(85, 101)
        for brew_time in range(10, 61)
    ]
    candidates_df = pd.DataFrame(candidate_rows, columns=FEATURE_COLUMNS)
    predictions = _model.predict(candidates_df)
    best_index = int(predictions.argmax())
    best_row = {
        key: int(value) for key, value in candidates_df.iloc[best_index].to_dict().items()
    }
    best_score = float(predictions[best_index])
    return best_row, max(0.0, min(100.0, best_score))


def apply_inputs(values: dict[str, int]) -> None:
    for key, value in values.items():
        st.session_state[key] = int(value)


def reset_inputs() -> None:
    st.session_state.preset_key = DEFAULT_PRESET_KEY
    st.session_state.last_score = None
    apply_inputs(DEFAULT_INPUTS)


def build_input_frame() -> pd.DataFrame:
    return pd.DataFrame(
        [{column: st.session_state[column] for column in FEATURE_COLUMNS}],
        columns=FEATURE_COLUMNS,
    )


def predict_score(model, input_df: pd.DataFrame) -> float:
    prediction = float(model.predict(input_df)[0])
    return max(0.0, min(100.0, prediction))


def append_history(score: float) -> None:
    st.session_state.history.append(
        {
            "beans_quality": st.session_state.beans_quality,
            "roast_level": st.session_state.roast_level,
            "grind_size": st.session_state.grind_size,
            "water_temp": st.session_state.water_temp,
            "brew_time": st.session_state.brew_time,
            "predicted_score": round(score, 1),
        }
    )
    st.session_state.history = st.session_state.history[-25:]


def score_message(score: float) -> tuple[str, str, str]:
    if score >= 85:
        return ("success", "Excellent brew. Balanced and enjoyable.", "Tip: keep temperature and time in the middle zone.")
    if score >= 70:
        return ("warning", "Solid cup. There is still room to improve.", "Tip: move temperature or brew time closer to the sweet spot.")
    return ("error", "This recipe still needs tuning.", "Tip: review grind size, temperature, and brew time together.")


def taste_profile(score: float, water_temp: int, brew_time: int) -> tuple[str, str]:
    under_extracted = water_temp <= 90 or brew_time <= 20
    over_extracted = water_temp >= 97 or brew_time >= 45
    sweet_zone = 92 <= water_temp <= 96 and 25 <= brew_time <= 35

    if sweet_zone and score >= 80:
        return ("Balanced", "Smooth and balanced coffee.")
    if under_extracted:
        return ("Sour / Fruity", "This recipe looks slightly under-extracted.")
    if over_extracted:
        return ("Bitter", "This recipe looks slightly over-extracted.")
    return ("Balanced", "Smooth and balanced coffee.")


def build_score_explanations() -> list[str]:
    explanations = []
    beans = st.session_state.beans_quality
    roast = st.session_state.roast_level
    grind = st.session_state.grind_size
    temp = st.session_state.water_temp
    brew_time = st.session_state.brew_time

    if beans >= 8:
        explanations.append("Bean quality is high and supports a stronger result.")
    elif beans <= 4:
        explanations.append("Bean quality limits the best possible outcome.")
    else:
        explanations.append("Bean quality is solid but not in the top range.")

    if roast in (2, 3):
        explanations.append("Roast level sits in a balanced range.")
    elif roast == 1:
        explanations.append("A light roast can produce a brighter and more acidic cup.")
    else:
        explanations.append("A dark roast can emphasize bitterness more strongly.")

    if 92 <= temp <= 96:
        explanations.append("Water temperature is in the optimal range.")
    elif temp < 90:
        explanations.append("Water temperature is low, so extraction may be weak.")
    else:
        explanations.append("Water temperature is high, so the cup may taste more bitter.")

    if 25 <= brew_time <= 35:
        explanations.append("Brew time supports a balanced extraction.")
    elif brew_time < 20:
        explanations.append("Brew time is short, so flavor may feel light.")
    else:
        explanations.append("Brew time is long, so bitterness may increase.")

    if grind == 3:
        explanations.append("Grind size looks balanced for this model.")
    elif grind < 3:
        explanations.append("A finer grind can lead to stronger extraction.")
    else:
        explanations.append("A coarser grind can make the cup feel lighter.")

    return explanations


def build_quality_heatmap(history_df: pd.DataFrame):
    heatmap_df = (
        history_df.groupby(["brew_time", "water_temp"], as_index=False)["predicted_score"]
        .mean()
        .rename(
            columns={
                "brew_time": "Brew time",
                "water_temp": "Water temperature",
                "predicted_score": "Predicted score",
            }
        )
    )
    return (
        alt.Chart(heatmap_df)
        .mark_rect()
        .encode(
            x=alt.X("Water temperature:O", title="Water temperature", sort="ascending"),
            y=alt.Y("Brew time:O", title="Brew time", sort="ascending"),
            color=alt.Color("Predicted score:Q", title="Predicted score"),
            tooltip=[
                alt.Tooltip("Water temperature:O", title="Water temperature"),
                alt.Tooltip("Brew time:O", title="Brew time"),
                alt.Tooltip("Predicted score:Q", title="Predicted score", format=".1f"),
            ],
        )
        .properties(height=320)
    )


def build_temperature_chart(model):
    temperature_rows = [
        {
            "beans_quality": st.session_state.beans_quality,
            "roast_level": st.session_state.roast_level,
            "grind_size": st.session_state.grind_size,
            "water_temp": temperature,
            "brew_time": st.session_state.brew_time,
        }
        for temperature in range(85, 101)
    ]
    temperature_df = pd.DataFrame(temperature_rows, columns=FEATURE_COLUMNS)
    temperature_scores = model.predict(temperature_df)
    return pd.DataFrame(
        {
            "Water temperature": list(range(85, 101)),
            "Predicted score": temperature_scores,
        }
    ).set_index("Water temperature")


def handle_preset_change() -> None:
    preset_key = normalize_preset_key(st.session_state.get("preset_key"))
    st.session_state.preset_key = preset_key
    preset_values = PRESETS.get(preset_key)
    if preset_values:
        apply_inputs(preset_values)


def handle_reset() -> None:
    reset_inputs()


def handle_best_settings(model) -> None:
    best_row, best_score = find_best_settings(model)
    apply_inputs(best_row)
    st.session_state.preset_key = DEFAULT_PRESET_KEY
    st.session_state.last_score = best_score
    append_history(best_score)


def handle_predict(model) -> None:
    score = predict_score(model, build_input_frame())
    st.session_state.last_score = score
    append_history(score)


init_state()

try:
    model = load_model()
except Exception as exc:
    st.error(f"Could not load model.joblib: {exc}")
    st.stop()

st.markdown(
    """
    <style>
      .block-container {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .subtle {
        opacity: 0.85;
        font-size: 0.95rem;
      }
      .card {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.10);
        border-radius: 16px;
        padding: 18px;
      }
      .big-score {
        font-size: 52px;
        font-weight: 800;
        line-height: 1;
        margin: 0;
      }
      .hint {
        font-size: 0.95rem;
        opacity: 0.90;
        margin-top: 0.5rem;
      }
      .footer-note {
        opacity: 0.70;
        font-size: 0.85rem;
        margin-top: 1rem;
      }
    </style>
    """,
    unsafe_allow_html=True,
)

st.title("Coffee Quality Predictor")
st.markdown(
    "<div class='subtle'>Estimate coffee taste from brewing parameters with a trained RandomForestRegressor model.</div>",
    unsafe_allow_html=True,
)
st.info(
    "Typical strong values according to the model:\n\n"
    "- Temperature: 92-96 C\n"
    "- Brew time: 25-35 seconds\n"
    "- Grind size: Medium\n"
    "- Roast level: Medium to Medium-Dark"
)

left, right = st.columns([1.1, 0.9], gap="large")

with left:
    st.markdown("<div class='card'>", unsafe_allow_html=True)
    st.subheader("Inputs")
    st.selectbox(
        "Choose a preset",
        options=list(PRESETS.keys()),
        key="preset_key",
        on_change=handle_preset_change,
    )
    st.slider("Beans quality (1-10)", 1, 10, key="beans_quality")
    st.selectbox(
        "Roast level",
        options=[1, 2, 3, 4],
        format_func=lambda value: ROAST_LABELS[value],
        key="roast_level",
    )
    st.select_slider(
        "Grind size",
        options=[1, 2, 3, 4, 5],
        format_func=lambda value: GRIND_LABELS[value],
        key="grind_size",
    )
    st.slider("Water temperature (C)", 85, 100, key="water_temp")
    st.slider("Brew time (seconds)", 10, 60, key="brew_time")

    action_left, action_right = st.columns(2)
    with action_left:
        st.button("Run prediction", width="stretch", on_click=handle_predict, args=(model,))
    with action_right:
        st.button("Reset", width="stretch", on_click=handle_reset)

    st.button(
        "Find best settings",
        width="stretch",
        on_click=handle_best_settings,
        args=(model,),
    )
    st.markdown("</div>", unsafe_allow_html=True)

with right:
    st.markdown("<div class='card'>", unsafe_allow_html=True)
    st.subheader("Result")
    score = st.session_state.last_score

    if score is None:
        st.markdown("<p class='big-score'>-</p>", unsafe_allow_html=True)
        st.info("Choose parameters and run a prediction.")
    else:
        st.caption("Model score")
        st.markdown(f"<p class='big-score'>{score:.1f}</p>", unsafe_allow_html=True)
        st.progress(int(round(score)))

        message_type, headline, hint = score_message(score)
        getattr(st, message_type)(headline)
        st.markdown(f"<div class='hint'>{hint}</div>", unsafe_allow_html=True)

        taste, description = taste_profile(
            score,
            st.session_state.water_temp,
            st.session_state.brew_time,
        )
        st.markdown("### Taste profile")
        st.success(f"Expected taste profile: **{taste}**")
        st.write(description)

        st.subheader("Why this score?")
        for explanation in build_score_explanations():
            st.write(f"- {explanation}")

    st.markdown(
        "<div class='footer-note'>The result stays visible until the inputs are reset.</div>",
        unsafe_allow_html=True,
    )
    st.markdown("</div>", unsafe_allow_html=True)

st.markdown("## History and analysis")

if st.session_state.history:
    history_df = pd.DataFrame(st.session_state.history)
    metric_left, metric_center, metric_right = st.columns(3)
    metric_left.metric("Best score", f"{history_df['predicted_score'].max():.1f}")
    metric_center.metric("Average score", f"{history_df['predicted_score'].mean():.1f}")
    metric_right.metric("Attempts", len(history_df))

    score_plot = pd.DataFrame({"Predicted score": history_df["predicted_score"].tolist()})
    score_plot.index = range(1, len(score_plot) + 1)
    score_plot.index.name = "Attempt"
    st.markdown("### Score over time")
    st.line_chart(score_plot)

    st.markdown("### Recipe map: temperature x brew time")
    st.altair_chart(build_quality_heatmap(history_df), use_container_width=True)

    st.markdown("### Top 5 attempts")
    top_attempts_df = history_df.sort_values("predicted_score", ascending=False).head(5)
    st.dataframe(top_attempts_df, width="stretch")
else:
    st.info("No predictions yet. Run a recipe to unlock history and the heatmap.")

st.markdown("### Temperature effect")
st.line_chart(build_temperature_chart(model))

with st.expander("Show dataset preview"):
    try:
        dataset = load_dataset()
        st.dataframe(dataset.head(20), width="stretch")
        st.caption(f"Dataset size: {dataset.shape[0]} rows x {dataset.shape[1]} columns")
    except Exception as exc:
        st.write(f"Could not load dataset: {exc}")

st.subheader("Prediction history")
if st.session_state.history:
    st.dataframe(pd.DataFrame(st.session_state.history[::-1]), width="stretch")
else:
    st.write("No predictions yet.")
