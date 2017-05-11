<template>
	<div class="s-index">
		<div class="s-top">
			<span>漂亮得不像实力派</span>
			<ul>
				<li><a>炭黑色</a></li>
				<li><a>酒红色</a></li>
				<li><a>细红线特别版</a></li>
			</ul>
		</div>
		<div class="s-main">
			<!-- 遮罩层 -->
			<!-- <div class="swiper-wrapper-modal">
				
		</div> -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="swiper-1">
						<div class="swiper-1-main">
							<div class="s-img img-1">

							</div>
							<div class="s-img img-2">

							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
				<div class="swiper-slide">Slide 4</div>
				<div class="swiper-slide">Slide 5</div>
			</div>
			<div class="swiper-pagination index-pagination" v-show="mousewheelControl"></div>
		</div>
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
			window.addEventListener('scroll', this.sscroll);
		},
		methods:{
			sscroll(){
				let tsio = document.body.scrollTop||document.documentElement.scrollTop;
				if(tsio === 0){
					this.mousewheelControl = false;
				}else{
					this.mousewheelControl = true;
					this.init();
				}
			},
			init(){
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					direction: 'vertical',
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 0,
					mousewheelControl: this.mousewheelControl,
					keyboardControl : true,
					height : window.innerHeight,
					topI:0,
					initialSlide:this.initialSlide
				});
			}
		}
	}
</script>
<style scoped lang="less">
	.s-index{
		width: 100%;
		height: 100%;
		.s-top{
			width: 100%;
			height: 100px;
			background-image: url(//static.smartisanos.cn/index/assets/images/slogan-black-bg.f0c4f66d808db9ec5b8334983b55b71d.jpg);
			text-align: center;
			padding: 20px 0;			
			span{
				font-size: 48px;
				font-weight: 300;
				margin-bottom: 10px;
				color: #fff;
			}
			ul{
				// margin: 0 auto;
				padding: 0;
				li{
					list-style: none;
					// position: relative;
					display: inline-block;
					padding: 0 18px;
					font-size: 14px;
					color: #d2d1d2;
					text-align: center;
				}
				li + li{
					border-left: 1px solid #d2d1d2;
				}

			}
		}
		.s-main{
			// position: absolute;
			.swiper-wrapper-modal{
				position: absolute;
				bottom: 0;
				left:0;
				right: 0;
				background-color: red;
				z-index: 10000000;

			}
		}
		.swiper-container {
			width: 100%;
			height: 100%;
			position: absolute;
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
			border-bottom: 1px solid red;
		}
		.index-pagination{
			position: absolute;
		}
	}
	.swiper-1{
		width: 100%;
		height: 100%;
		background-color: #05050a;
		background-image: url(//static.smartisanos.cn/index/assets/images/slogan-black-bg.f0c4f66d808db9ec5b8334983b55b71d.jpg);
		background-image: -webkit-image-set(url(//static.smartisanos.cn/index/assets/images/slogan-black-bg.f0c4f66d808db9ec5b8334983b55b71d.jpg) 1x,url(//static.smartisanos.cn/index/assets/images/slogan-black-bg@2x.69a96bdf002383ce323912e2b3d32130.jpg) 2x);
		opacity: 1;
		transition: opacity 1s cubic-bezier(.165,.84,.44,1);
		z-index: 12;
		.swiper-1-main{
			width: 400px;
			.s-img{
				position: absolute;
				background-repeat: no-repeat;
				background-size: contain;
				transition-property: -webkit-transform;
				transition-property: transform;
				transition-property: transform,-webkit-transform;
				transition-timing-function: cubic-bezier(.19,1,.22,1);
			}
			.img-1{
				background-image: -webkit-image-set(url(//static.smartisanos.cn/index/assets/images/slogan-odin-black-l.e14697bc941f34bb11adf54370d6af67.png) 1x,url(//static.smartisanos.cn/index/assets/images/slogan-odin-black-l@2x.52e2adac1b4e2a0b577caf726317697f.png) 2x);
				left: 30%;
				width: 40.22222vh;
				height: 113.66667vh;
				background-position: 100%;
				-webkit-transform: translateY(20%);
				transform: translateY(20%);
				transition-duration: 2.4s;
			}
			.img-2{
				background-image: -webkit-image-set(url(//static.smartisanos.cn/index/assets/images/slogan-odin-black-r.8f61099fd493acc80ea9b76cc7507353.png) 1x,url(//static.smartisanos.cn/index/assets/images/slogan-odin-black-r@2x.08d8a2ff197d4a561dd1b89e8b4ac14f.png) 2x);
				right: 30%;
				width: 42.88889vh;
				height: 113.66667vh;
				background-position: 0;
				z-index: 2;
				-webkit-transform: translateY(22%);
				transform: translateY(22%);
				transition-duration: 3s;
			}
		}
	}
</style>
