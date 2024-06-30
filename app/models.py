import pandas as pd
from pandasai import SmartDataframe
from pandasai.llm.local_llm import LocalLLM

# Format pandas numbers
pd.options.display.float_format = '{:,.0f}'.format

# Load the data
df = pd.read_csv("student.csv")

# Initialize the LLM and SmartDataframe
ollama_llm = LocalLLM(api_base="http://localhost:11434/v1", model="llama3")
df_llm = SmartDataframe(df, config={"llm": ollama_llm})
