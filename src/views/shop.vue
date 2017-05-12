<template>
	<div class="s-shop">
		<div class="s-banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="swiper-1 s-swiper">
							
						</div>
					</div>
					<div class="swiper-slide"></div>
					<div class="swiper-slide">Slide 5</div>
				</div>
				<div class="swiper-pagination index-pagination"></div>
			</div>
		</div>
		<div class="s-1">
			<ul class="s-1-ul">
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/9607713b473fc22d6244b5303b8d2149.png?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/59d358c3a2a6e22e9a2cb135b1da24c0.jpg?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/01c0bd78504de01bc4d4ada3dc2b95a0.jpg?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
				<li class="s-1-ul-li">
					<img class="s-1-ul-li-img" src="http://image.smartisanos.cn/resource/1334fa8aea2a311289d8154dd7a26efc.jpg?x-oss-process=image/resize,w_610/quality,Q_100/format,webp">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	require('./../../static/css/swiper.min.css');
	require('./../../static/js/swiper.min.js');
	export default {
		components:{
		},
		data () {
			return {
				mousewheelControl:false,
				initialSlide:0
			}
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					slidesPerView: 1,
					paginationClickable: true,
					mousewheelControl: false,
					height:500,
					effect : 'fade',
					autoplay : 5000,
				});
			}
		}
	}
</script>
<style scoped lang="less">
	.s-shop{
		width: 100%;
		text-align: center;
		background-color: #ededed;
		margin-top: 1px;
		padding-top: 50px;
		height: 600px;
		.swiper-container {
			width: 1220px;
			height: 500px;
			margin: 0 auto;
		}
		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;
			width: 100%;
			height: 100%;
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
			transition: all .15s ease-out;
			background-color: inherit;
		}
		.s-swiper{
			height: 100%;
			width: 100%;
			border-radius: 15px;
			transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
			transition: opacity .3s;
		}
		.swiper-1{
			background-image: url(//static.smartisanos.cn/index/assets/images/banner-3d-shadow.ab4cdb64030945e86f20091b96b00357.png);
			// position: absolute;
			background-repeat: no-repeat;
			background-position: center 0;
			pointer-events: none;
		}
		.index-pagination{
			// position: absolute;
		}
		.s-1{
			margin-top: 30px;
			width: 1220px;
			margin-left: auto;
			margin-right: auto;
			ul{
				list-style: none;
				padding:0;
				li{
					float: left;
					width: 25%;
					img{
						width: 100%;
						height: 100%;
						border: 1px solid;
					}
				}
			}
		}
	}
</style>