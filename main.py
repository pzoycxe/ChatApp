from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

def use_html(path):
	with open(path, "r", encoding="utf-8") as file:
		return file.read()

#serve static files
app.mount("/public", StaticFiles(directory="public", html=True), name="public")

#test:
@app.get("/check")
def test():
	return{"everything is fine"}

#routes:
@app.get("/", response_class=HTMLResponse)
def home():
	return use_html("public/index.html")

@app.get("/login", response_class=HTMLResponse)
def login():
	return use_html("public/login.html")

@app.get("/sign-up", response_class=HTMLResponse)
def register():
	return use_html("public/sign-up.html")

@app.get("/account", response_class=HTMLResponse)
def account():
	return use_html("public/account.html")

