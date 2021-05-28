import datetime
import hashlib
import os

from mongoengine import (
    connect, Document, EmailField, StringField, FloatField, ListField, ReferenceField, DateTimeField, EmbeddedDocument,
    EmbeddedDocumentField, CASCADE
)

# GUIDE: Here we are connecting to the mongodb database. os.environ.get is getting environment variables
# if they are not set, the values are None which leads us to login to the default database.
username = os.environ.get('MONGODB_USERNAME','flaskuser')
password = os.environ.get('MONGODB_PASSWORD','passwd123')
host = os.environ.get('MONGODB_HOSTNAME')
db = os.environ.get('MONGODB_DATABASE', "revue")
connect(username=username, password=password, host=host, db=db)

# GUIDE: These are models for our database entries. They extend mongoengine.Document. 
# This allows us to unwrap database queries directly into objects for convenience
# http://docs.mongoengine.org/apireference.html#documents
class User(Document):
    email = EmailField(required=True, unique=True)
    username = StringField(max_length=50, required=True, unique=True)
    password = StringField(required=True)
    subscribed = ListField(ReferenceField("Subvue"))
    created = DateTimeField(required=True, default=datetime.datetime.now())

    def to_public_json(self):
        hashed_email = hashlib.md5(self.email.encode("utf-8")).hexdigest()

        data = {
            "id": str(self.id),
            "username": self.username,
            "hashedEmail": hashed_email,
            "subscribed": [subvue.to_public_json() for subvue in self.subscribed],
            "created": self.created,
        }

        return data

class Point(Document):
    title = StringField(required=True, unique=True)
    description = StringField(required=True)
    latitude = FloatField(required=True)
    longitude = FloatField(required=True)
    created = DateTimeField(required=True, default=datetime.datetime.now())

    def to_public_json(self):
        data = {
            "title": self.title,
            "description": self.description,
            "latitude": self.latitude,
            "longitude": self.longitude,
        }
        return data

#point1 = Point(title='Alumi Hall', description='Admissions and admistrative offices', latitude=-90.371893, longitude=40.943456)
#point1.save()

#point2 = Point(title='Seymour Libary', description='Main libary on campus', latitude=-90.372998, longitude=40.943112)
#point2.save()

#point3 = Point(title='Seymour Hall', description='Cafeteria and dorms as well as career center', latitude=-90.372199, longitude=40.942661)
# point3.save()

# point4 = Point(title='Old Main', description='Site of the Lincoln Douglas debate', latitude=-90.37115, longitude=40.943122)
# point4.save()

# point5 = Point(title='Ford Center of Fine Arts', description='harbach theatre as well as recital hall', latitude=-90.370211, longitude=40.941767)
# point5.save()

# point6 = Point(title='George Davis Hall', description='acidemic building for social science classes', latitude=-90.370163, longitude=40.943443)
# point6.save()

# point7 = Point(title='Umbeck Science-Mathematics Center', description='acidemic building for science and math classes', latitude=-90.375109, longitude=40.943134)
# point7.save()

# point8 = Point(title='Memorial Gym', description='Gym with weight room, basketball court, and pool', latitude=-90.369385, longitude=40.940915)
# point8.save()

# point9 = Point(title='T. Fleming Fieldhouse', description='indoor track and field house', latitude=-90.368683, longitude=40.94075)
# point9.save()

# point10 = Point(title='Knosher Bowl', description='football field', latitude=-90.371966, longitude=40.939628)
# point10.save()

# point11 = Point(title='Prats Field', description='soccer field', latitude=-90.373409, longitude=40.939612)
# point11.save()

# point12 = Point(title='Me', description='Where I live currently', latitude=-90.373553, longitude=40.941729)
# point12.save()

class Comment(EmbeddedDocument):
    content = StringField(max_length=5000)
    user = ReferenceField(User)
    created = DateTimeField(required=True, default=datetime.datetime.now())

    def to_public_json(self):
        data = {
            "content": self.content,
            "created": self.created,
            "user": {
                "id": str(self.user.id),
                "username": self.user.username
            }
        }

        return data


class Subvue(Document):
    name = StringField(max_length=120, required=True)
    permalink = StringField(max_length=120, required=True)
    description = StringField(max_length=500, required=True)
    created = DateTimeField(required=True, default=datetime.datetime.now())
    moderators = ListField(ReferenceField(User))

    def to_public_json(self):
        data = {
            "id": str(self.id),
            "name": self.name,
            "permalink": self.permalink,
            "description": self.description,
            "moderators": [{
                "id": str(moderator.id),
                "username": moderator.username
            } for moderator in self.moderators],
        }

        return data


class Post(Document):
    title = StringField(max_length=120, required=True)
    subvue = ReferenceField(Subvue, required=True, reverse_delete_rule=CASCADE)
    user = ReferenceField(User, reverse_delete_rule=CASCADE)
    content = StringField(max_length=5000)
    comments = ListField(EmbeddedDocumentField(Comment))
    created = DateTimeField(required=True, default=datetime.datetime.now())
    image = StringField()
    upvotes = ListField(ReferenceField(User, reverse_delete_rule=CASCADE))
    downvotes = ListField(ReferenceField(User, reverse_delete_rule=CASCADE))

    def to_public_json(self):
        data = {
            "id": str(self.id),
            "title": self.title,
            "subvue": self.subvue.to_public_json(),
            "content": self.content,
            "user": {
                "id": str(self.user.id),
                "username": self.user.username
            },
            "comments": [comment.to_public_json() for comment in self.comments][::-1],
            "created": self.created,
            "image": self.image,
            "upvotes": [{
                "id": str(upvote.id),
                "username": upvote.username
            } for upvote in self.upvotes],
            "downvotes": [{
                "id": str(downvote.id),
                "username": downvote.username
            } for downvote in self.downvotes],
        }

        return data
