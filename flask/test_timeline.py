from app import app_
import json

tmp=dict()
tmp['user_id']=1
tmp['pdf_id']=1


response = app_.test_client().post(
            '/get_time_line',
            data=json.dumps(tmp),
            content_type='application/json'
        )

print(response.data)