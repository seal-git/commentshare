from app import app_
import json

tmp=dict()
tmp['follow_to']=2
tmp['follow_from']=1

response = app_.test_client().post(
            '/add_follow',
            data=json.dumps(tmp),
            content_type='application/json'
        )

print(response.data)