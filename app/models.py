import pandas as pd
from pandasai import SmartDataframe
from pandasai.llm.local_llm import LocalLLM
from langchain_groq.chat_models import ChatGroq
import os

# Format pandas numbers
pd.options.display.float_format = '{:,.0f}'.format

# Load the data
df = pd.read_csv("student.csv")

# Initialize the LLM and SmartDataframe
# ollama_llm = LocalLLM(api_base="http://localhost:11434/v1", model="llama3")
# df_llm = SmartDataframe(df, config={"llm": ollama_llm})
llm=ChatGroq(
    model_name="llama3-8b-8192", 
    api_key = "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")
df_llm = SmartDataframe(df, config={"llm": llm, "save_charts": True,"encrypt_charts":False,"save_charts_path": "D:/downloadsD/Data_Analyze_SQL-Packet/datanalyzer/public/imgs",})