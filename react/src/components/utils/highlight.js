//viewer内のコメント付き要素をハイライトする関数

let highlight = function(viewer, commentList){
	//loadされているページとそのページのコメントを配列に入れる
	let pageList = Array.from(viewer.getElementsByClassName("page"));
	pageList = pageList.filter(p => p.dataset.loaded);
	let pageNumList = pageList.map(p => p.dataset.pageNumber);
	commentList = commentList.filter(p => pageNumList.includes(p["span-page"]))
	//console.log('high light')
	//console.log(commentList)

	//ページの高さと幅を取得
	pageStyle = window.getComputedStyle(pageList[0])
	let pageWidth = parseFloat(pageStyle.getPropertyValue("width"));
	let pageHeight = parseFloat(pageStyle.getPropertyValue("height"));

	for(let i=0; i<pageList.length; i++){
		//iページのspanを配列に入れる
		let spanList = pageList[i].getElementsByTagName("span");
		let spanInfoList = [];
		for(let j=0; j<spanList.length; j++){
			//spanのleftとtopを(1000,1000)で正規化する
			let spanStyle = window.getComputedStyle(spanList[j]);
			let spanLeft = spanStyle.getPropertyValue("left").slice(0, -2);
			spanLeft = parseFloat(spanLeft, 10)/pageWidth*1000.0;
			let spanTop = spanStyle.getPropertyValue("top").slice(0, -2);
			spanTop = parseFloat(spanTop, 10)/pageHeight*1000.0;
			//正規化したspanをspanInfoListに入れる
			let spanInfo = {left: spanLeft, top: spanTop};
			spanInfoList.push(spanInfo);
		}
		// console.log("info",spanInfoList)
		//iページのコメントを対応しているspan
		let commentListOnePage = commentList.filter(p => p["span-page"]==pageNumList[i]);
		for(let j=0; j<commentListOnePage.length; j++){
			let spanCommentLeft = commentListOnePage[j]["span-left"];
			let spanCommentTop = commentListOnePage[j]["span-top"];
			for(let k=0; k<spanInfoList.length; k++){
				let spanLeft = spanInfoList[k]["left"];
				let spanTop = spanInfoList[k]["top"];
				if(Math.abs(spanCommentLeft-spanLeft)<1&&Math.abs(spanCommentTop-spanTop)<1){
					spanList[k].style.backgroundColor = "green";
					break;
				}
			}
		}
	}
}
