from app import app_
import json
tmp=dict()
tmp['value']='test'
tmp['user_id']=2
tmp['user_name']='tt'
tmp['pdf_id']=2
tmp['span-page']=1
tmp['span-top']=0
tmp['span-left']=0



response = app_.test_client().post(
            '/test_add_comments',
            data=json.dumps(tmp),
            content_type='application/json'
        )

print(response.data)