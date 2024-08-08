import mysql.connector
POST_LIMIT = 243

connection = mysql.connector.connect(
    host = "sql7.freesqldatabase.com",
    user = "sql7724137",
    passwd = "fiUGhY2HK4",
    port = 3306,
    database = "sql7724137"
)

def getUserFollowerAmnt(id):
  user = getUser(id)
  followers = 0
  for item in user[4].split(","):
    if item != "":
      followers = followers + 1
  return followers

def getPostScore(post, id):
  if id is None or id < 1:
    return getUserFollowerAmnt(int(post[1]))
  following = getUser(id)[4]
  score = 0
  if str(post[1]) in str(following):
    score = score + getUserFollowerAmnt(int(post[1]))
  return score

def createUser(name, password, email):
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM `users` WHERE username = '{name}'")
  if cursor.fetchone() != None:
    return "same user"
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"INSERT INTO `users` (`username`, `password`, `email`) VALUES ('{name}', '{password}', '{email}')", multi=True)
  connection.commit()
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM `users` WHERE username = '{name}'")
  id = 0
  for item in cursor.fetchall():
    id = item[0]
  del cursor
  return id

def getUser(id):
  try:
    cursor = connection.cursor()
  except:
    return (0, "Error", "none", "none", "")
  cursor.execute("SELECT * FROM `users` WHERE id = " + str(id))
  for item in cursor.fetchall():
    return item

def getUserByInfo(username, password):
  try:
    cursor = connection.cursor()
  except:
    return "not exist"
  cursor.execute(f"SELECT * FROM `users` WHERE username = '{username}' AND password = '{password}'")
  for item in cursor.fetchall():
    return item
  del cursor
  return "not exist"

def createPost(authorid, content):
  if len(content) < 3:
    return "not long enough"
  if len(content) > POST_LIMIT:
    content = content[0:POST_LIMIT]
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM `posts` WHERE authorid = '{authorid}' AND content = '{content}'")
  if cursor.fetchone() != None:
    return "same post"
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"INSERT INTO `posts` (`authorid`, `content`) VALUES ({authorid}, '{content}')")
  connection.commit()
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM `posts` WHERE authorid = '{authorid}' AND content = '{content}'")
  id = 0
  for item in cursor.fetchall():
    id = item[0]
  del cursor
  return id

def sortPosts(posts, id):
    length = len(posts)
    if length <= 1:
        return posts
    else:
        pivot = posts.pop()

    posts_greater = []
    posts_lower = []

    for item in posts:
        if getPostScore(item, id) > getPostScore(pivot, id):
            posts_greater.append(item)
        else:
            posts_lower.append(item)

    return sortPosts(posts_greater, id) + [pivot] + sortPosts(posts_lower, id)

def getPosts(page, pageSize, id):
  try:
    cursor = connection.cursor()
  except:
    return ["Error getting the posts, Try again later."]
  cursor.execute(f"SELECT * FROM `posts` LIMIT {pageSize*page}")
  posts = []
  for item in cursor.fetchall():
    posts.append(item)
  del cursor
  i = 0
  contents = []
  posts = sortPosts(posts, id)
  while i < len(posts):
    item = posts[i]
    contents.append(getUser(item[1])[1] + ": " + item[2])
    i = i + 1
  return contents

def getPost(id):
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM `posts` WHERE id = {id}")
  post = "not exist"
  for item in cursor.fetchall():
    post = item
  del cursor
  return post

def followUser(followerID, followingID):
  cursor = connection.cursor()
  cursor.execute(f"SELECT * FROM `users` WHERE id = {followerID}")
  newFollowing = ""
  for item in cursor.fetchall():
    newFollowing = item[4]
  split = newFollowing.split(",")
  for item in split:
    if item == str(followingID):
      return "already following"
  newFollowing = newFollowing + "," + str(followingID)
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"UPDATE `users` SET `following` = '{newFollowing}' WHERE id = {followerID}")
  connection.commit()
  del cursor

def unfollowUser(followerID, unfollowingID):
  user = getUser(followerID)
  following = user[4]
  if str(unfollowingID) in following:
    following = following.split(",")
    newFollowing = []
    for item in following:
      if item != str(unfollowingID):
        newFollowing.append(item)
    newFollowing = (",").join(newFollowing)
  else:
    return "never followed"
  cursor = connection.cursor()
  cursor.execute(f"UPDATE `users` SET `following` = '{newFollowing}' WHERE id = {followerID}")
  del cursor

def deleteUser(id):
  cursor = connection.cursor()
  cursor.execute("SELECT * FROM `users`")
  for item in cursor.fetchall():
    if item[0] != id:
      unfollowUser(item[0], id)
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"DELETE FROM `posts` WHERE authorid = {id}")
  del cursor
  cursor = connection.cursor()
  cursor.execute(f"DELETE FROM `users` WHERE id = {id}")
  connection.commit()
  del cursor