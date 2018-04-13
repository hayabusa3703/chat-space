# テーブル設計


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messeages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messeages


## membersテーブル(中間テーブル)

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true||
|group|references|null: false, foreign_key: true||


### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|references|null: false, foreign_key: true||
|group|references|null: false, foreign_key: true||

### Association
- belongs_to :group
- belongs_to :user

