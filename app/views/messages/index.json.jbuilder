 json.array! @newmsgs do |newmsg|
   json.user_name newmsg.user.name
   json.time newmsg.posted_time
   json.content newmsg.content
   json.id newmsg.id
   json.image newmsg.image.url
 end
