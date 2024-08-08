from flask import Flask, redirect, url_for, render_template, request, session, flash
import sql

app = Flask('app')
app.secret_key = "coolcoolnodechat"

def getUsernameOrNone(id):
  user = sql.getUser(int(id))
  if user is None:
    return ""
  else:
    return user[1]

def getUrlParams(url):
  params = str(url).split("?")[len(str(url).split("?"))-1]
  params = params.split("&")
  result = {}
  for param in params:
    key = param.split("=")[0]
    val = param.split("=")[1]
    result[key] = val
  return result

@app.route('/', methods=["GET", "POST"])
def home():
  if request.method == "POST":
    print(request.form["content"])
    print(session.get("user"))
    if session.get("user") is None or session.get("user") == "" or session.get("user") == "None":
      flash("You need to login to post!")
      return redirect(url_for("login"))
    post = sql.createPost(str(session.get("user")), str(request.form["content"]))
    print(post)
    if post == "same post":
      flash("You already posted that!")
    if post == "not long enough":
      flash("Posts must have a minimum of 3 letters!")
    return redirect(url_for("home"))
  else:
    posts = ["Posts are under maintenance. Sorry!"]
    posts = sql.getPosts(1, 20, session.get("user"))
    user = sql.getUser(int(session.get("user")))
    return render_template("home.html", user=session["user"], username=user[1], posts=posts)

@app.route('/me')
def me():
  if session.get("user") is None:
    return render_template("404.html", url=str(request.url))
  else:
    return redirect("/users/" + str(session.get("user")))

@app.route('/users/<id>', methods=["GET", "POST"])
def user(id):
  if request.method == "POST":
    if sql.getUser(int(id)) == None:
      return render_template("404.html", url=str(request.url))
    if session.get("user") is None:
      flash("You need to login to follow!")
      return redirect(request.url)
    else:
      result = sql.followUser(session.get("user"), id)
      if result == "already following":
        result = sql.unfollowUser(session.get("user"), id)
      return redirect(request.url)
  else:
    user = sql.getUser(int(id))
    if user == None:
      return render_template("404.html", url=str(request.url))
    curUsername = ""
    if session.get("user") != None:
      curUsername = sql.getUser(session.get("user"))[1]
    following = sql.getUser(session.get("user"))[4]
    if str(id) in following:
      following = "yes"
    else:
      following = "no"
    return render_template("user.html", id=str(id), username=user[1], curUser = curUsername, following=following)

@app.route('/signup', methods=["GET", "POST"])
def signup():
  if request.method == "POST":
    username = request.form["username"]
    password = request.form["password"]
    email = request.form["email"]

    id = sql.createUser(username, password, email)
    if id == "same user":
      flash("Username taken, Please log in if you have an account already.")
      return redirect(url_for("signup"))
    else:
      session["user"] = id
      return redirect(f"/users/{id}")
  else:
    username = getUsernameOrNone(session.get("user"))
    return render_template("signup.html", curUser=username)

@app.route('/login', methods=["GET", "POST"])
def login():
  if request.method == "POST":
    username = request.form["username"]
    password = request.form["password"]

    user = sql.getUserByInfo(username, password)
    if user == "not exist":
      flash("Account does not exist, please sign up to get an account.")
      return redirect(url_for("login"))
    else:
      session["user"] = user[0]
      return redirect(f"/users/{user[0]}")
  else:
    return render_template("login.html")

@app.route('/logout')
def logout():
  session.pop("user", None)
  return redirect("/")

@app.route('/deleteAcc', methods=["GET", "POST"])
def deleteacc():
  if session.get("user") is None:
    return redirect("/")
  if request.method == "POST":
      user = session.get("user")
      session.pop("user", None)
      sql.deleteUser(user)
      return redirect("/")
  else:
      return render_template("delAcc.html")
  
@app.route('/search/users')
def searchUsers():
  params = getUrlParams(request.url)
  if params.get("q") is None:
    flash("You need to put in a query to search!")
    return redirect(url_for("home"))
  else:
    query = params.get("q")


app.run(host='0.0.0.0', port=5000, debug=False)