from app.models import df_llm

def process_prompt(prompt):
    try:
        response = df_llm.chat(prompt)
        return response
    except Exception as e:
        return str(e)
