export default {
	previewImage(file, prvid) {
	/* file：file控件
	* prvid: 图片预览容器
	*/
		var Max_Size = 1000; //2M
        var Max_Width = 100; //100px
        var Max_Height = 200; //200px　　
		var tip = "Expect jpg or png or gif!"; // 设定提示信息
		var filters = {
			"jpeg" : "/9j/4",
			"gif" : "R0lGOD",
			"png" : "iVBORw"
		}
		var prvbox = document.getElementById(prvid);
		prvbox.innerHTML = "";
		if (window.FileReader) { // html5方案
			for (var i=0, f; f = file.files[i]; i++) {
				var fr = new FileReader();
				fr.onload = function(e) {
					var src = e.target.result;
					var image = new Image();
					image.onload=function(){
						var width = image.width;
						var height = image.height;
						isAllow = width >= Max_Width && height >= Max_Height;
						console.log(width,height)
						if(width<Max_Width&&height<Max_Height){

						}
						showTip2(isAllow);
					};
					image.src= src;
					if (!validateImg(src)) {
						console.log(tip)
					} else {
						showPrvImg(src);
					}

				}
				fr.readAsDataURL(f);
			}
		} else { // 降级处理

			if ( !/\.jpg$|\.png$|\.gif$/i.test(file.value) ) {
				console.log(tip);
			} else {
				showPrvImg(file.value);
			}
		}
		function showTip2(isAllow){

			var html = '';

			if(isAllow){
				html += '宽高通过';
			}else{
				html += '宽高未通过，要求width:'+ Max_Width +', height:'+ Max_Height;
			}
			console.log(html);
		}
		function validateImg(data) {
			var pos = data.indexOf(",") + 1;
			for (var e in filters) {
				if (data.indexOf(filters[e]) === pos) {
					return e;
				}
			}
			return null;
		}

		function showPrvImg(src) {
			var img = document.createElement("img");
			img.src = src;
			prvbox.appendChild(img);
		}
	}
}