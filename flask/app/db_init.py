from flask_sqlalchemy import SQLAlchemy
from app import db_
from app.db_define import *
import bcrypt

init_all = False  # dbの定義を変更した場合はTrueにして作り直す
if init_all:
    print("recreate db")
    db_.drop_all()  # dbを作り直す．dbを消したくない場合は注意．
    db_.create_all()
    # PDFのサンプルデータ作成
    data_list = [['naist_exam', 1],
                 ['test', 1],
                 ['PDF_sample_1', 1],
                 ['PDF_sample_2', 1],
                 ['PDF_sample_3', 1],
                 ["samplepdf", 1]
                 ]
    init_pdf_list = []
    for data in data_list:
        init_pdf = PDF()
        init_pdf.id = data[0]
        init_pdf.filename = data[0]
        init_pdf.url = data[0] + '.pdf'
        init_pdf.user_id = data[1]
        init_pdf_list.append(init_pdf)

    db_.session.add_all(init_pdf_list)
    db_.session.commit()

    # コメントデータ
    comment_list = [
        ["ss", "samplepdf", 1, 1, 150.5, 220.5, 77.5, 93.5, ],
        ["sss", "samplepdf", 1, 1, 276.5, 326.5, 68.5, 73.5, ],
    ]
    init_comment_list = []
    for comment_ in comment_list:
        init_comment = Comment()
        init_comment.value = comment_[0]
        init_comment.pdf_id = comment_[1]
        init_comment.user_id = comment_[2]
        init_comment.span_page = comment_[3]
        init_comment.rect_x = comment_[4]
        init_comment.rect_y = comment_[5]
        init_comment.rect_w = comment_[6]
        init_comment.rect_h = comment_[7]
        init_comment_list.append(init_comment)

    db_.session.add_all(init_comment_list)
    db_.session.commit()

    # ユーザーのサンプルデータ作成
    data_list = [
        ["test_user", "testuser@is.naist.jp", b"pass"],
        ['user1', 'user1@is.naist.jp', b'pass'],
        ['user2', 'user2@is.naist.jp', b'pass'],
        ['user3', 'user3@is.naist.jp', b'pass'],
    ]
    init_user_list = []
    for data in data_list:
        init_user = User()
        init_user.username = data[0]
        init_user.email = data[1]
        init_user.password = bcrypt.hashpw(data[2], bcrypt.gensalt())
        init_user_list.append(init_user)

    db_.session.add_all(init_user_list)
    db_.session.commit()

    data_list = [[1, 2],
                 [2, 1],
                 ]
    init_follow_list = []
    for data in data_list:
        init_follow = Follow()
        init_follow.follow_from = data[0]
        init_follow.follow_to = data[1]
        init_follow_list.append(init_follow)

    db_.session.add_all(init_follow_list)
    db_.session.commit()
