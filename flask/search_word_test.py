from app import app_, db_, login_manager
from flask import request, jsonify
from app.db_define import User,PDF,Comment,Follow
import os
import json
import datetime





tmp=dict()
tmp['query']='aaaa'

response = app_.test_client().post(
            '/word_search',
            data=json.dumps(tmp),
            content_type='application/json'
        )


print(response.get_data())